import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [isSecretPassed, setIsSecretPassed] = useState(false);
  const [secretWord, setSecretWord] = useState('');
  const navigate = useNavigate();

  const ENCODED_SECRET = 'UEVQSU5P'; // "PEPINO" en Base64

  const handleSecretSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (btoa(secretWord.toUpperCase()) === ENCODED_SECRET) {
      setIsSecretPassed(true);
      setError('');
    } else {
      setError('Palabra secreta incorrecta');
      setSecretWord('');
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    
    try {
      if (isRegister) {
        if (password !== confirmPassword) {
            throw new Error('Las contraseñas no coinciden. Por favor, escríbelas igual.');
        }
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setSuccess('Registro exitoso. Revisa tu email o inicia sesión si no se requiere validación.');
        setIsRegister(false);
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate('/dashboard');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 font-sans text-white">
      <div className="max-w-md w-full bg-[#1e120c] rounded-2xl p-8 border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full"></div>
        
        <h2 className="text-3xl font-black text-center mb-8 relative z-10">
          DEV<span className="text-primary">.</span>ADMIN
        </h2>
        
        {error && <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg mb-4 text-sm font-medium relative z-10">{error}</div>}
        {success && <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-3 rounded-lg mb-4 text-sm font-medium relative z-10">{success}</div>}
        
        {!isSecretPassed ? (
          <form onSubmit={handleSecretSubmit} className="space-y-4 relative z-10">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Palabra Secreta</label>
              <input 
                type="password" 
                value={secretWord}
                onChange={(e) => setSecretWord(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                required
                autoFocus
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors mt-4"
            >
              Continuar
            </button>
            <div className="mt-6 text-center pt-4 border-t border-white/10">
              <button 
                type="button"
                onClick={() => navigate('/')} 
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Volver al sitio público
              </button>
            </div>
          </form>
        ) : (
          <>
            <form onSubmit={handleAuth} className="space-y-4 relative z-10">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Contraseña</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              {isRegister && (
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Repetir Contraseña</label>
                  <input 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    required
                  />
                </div>
              )}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 mt-4"
              >
                {loading ? 'Procesando...' : isRegister ? 'Crear Administrador' : 'Acceder al Panel'}
              </button>
            </form>
            
            <div className="mt-6 text-center relative z-10">
              <button 
                onClick={() => setIsRegister(!isRegister)} 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {isRegister ? '¿Ya eres admin? Inicia sesión' : 'Crear nueva cuenta root'}
              </button>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <button onClick={() => navigate('/')} className="text-sm text-primary hover:text-primary/80 transition-colors">
                  Volver al sitio público
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
