import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/login');
      } else {
        setLoading(false);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    await supabase.auth.signOut();
  };

  if (loading) return <div className="h-screen flex items-center justify-center bg-[#0a0a0a] text-white">Cargando panel...</div>;

  const sidebarLinks = [
    { path: '/dashboard', label: 'Proyectos', icon: 'folder' }
  ];

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e120c] border-r border-white/5 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-white/5">
          <Link to="/" className="text-xl font-black tracking-tighter">
            DEV<span className="text-primary">.</span>ADMIN
          </Link>
        </div>
        
        <nav className="flex-1 py-6 px-4 flex flex-col gap-2">
          {sidebarLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                location.pathname === link.path
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="material-symbols-outlined text-xl">{link.icon}</span>
              <span className="text-sm">{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all font-medium text-left"
          >
            <span className="material-symbols-outlined text-xl">logout</span>
            <span className="text-sm">Cerrar Sesión</span>
          </button>
          <Link
            to="/"
            className="w-full flex mt-2 items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all text-left"
          >
            <span className="material-symbols-outlined text-xl">public</span>
            <span className="text-sm">Sitio Público</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-[#1e120c] border-b border-white/5 flex items-center justify-between px-8">
          <div className="flex items-center gap-4 text-gray-400">
            <span className="material-symbols-outlined">search</span>
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-64"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-bold text-sm">
              JD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
