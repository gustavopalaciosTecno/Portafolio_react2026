import { Outlet, Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

export default function MainLayout() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Inicio', icon: 'home' },
    { path: '/sobre-mi', label: 'Sobre mí', icon: 'person' },
    { path: '/habilidades', label: 'Habilidades', icon: 'psychology' },
    { path: '/experiencia', label: 'Experiencia', icon: 'work' },
    { path: '/proyectos', label: 'Proyectos', icon: 'code' },
    { path: '/contacto', label: 'Contacto', icon: 'mail' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-white tracking-tighter">
            DEV<span className="text-primary">.</span>PRO
          </Link>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold tracking-widest uppercase transition-colors ${
                    location.pathname === link.path ? 'text-primary' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button 
              className="md:hidden text-gray-400 hover:text-white focus:outline-none flex items-center p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-4 flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`py-3 text-sm font-semibold tracking-widest flex items-center gap-3 uppercase transition-colors ${
                  location.pathname === link.path ? 'text-primary bg-primary/10 rounded-lg px-4' : 'text-gray-400 hover:text-white px-4'
                }`}
              >
                <span className="material-symbols-outlined text-lg">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <footer className="bg-[#050505] border-t border-white/10 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-black text-white tracking-tighter">
            DEV<span className="text-primary">.</span>PRO
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 DevPro. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors">
              <span className="material-symbols-outlined">code</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors">
              <span className="material-symbols-outlined">terminal</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
