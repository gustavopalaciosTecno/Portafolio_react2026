import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image_url: string;
}

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formError, setFormError] = useState('');
  const [deleteError, setDeleteError] = useState('');
  
  // Form State
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [link, setLink] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const fetchProjects = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setProjects(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const openCreateModal = () => {
    setEditingProject(null);
    setTitle('');
    setDescription('');
    setTechnologies('');
    setLink('');
    setImageUrl('');
    setFormError('');
    setIsModalOpen(true);
  };

  const openEditModal = (project: Project) => {
    setEditingProject(project);
    setTitle(project.title);
    setDescription(project.description);
    setTechnologies(project.technologies?.join(', ') || '');
    setLink(project.link || '');
    setImageUrl(project.image_url || '');
    setFormError('');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormError('');
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    const techArray = technologies.split(',').map(t => t.trim()).filter(t => t);
    
    // get user ID
    const { data: { session } } = await supabase.auth.getSession();
    const user_id = session?.user.id;

    if (!user_id && !editingProject) {
      setFormError('Sesión expirada. Por favor recarga la página.');
      return;
    }

    if (editingProject) {
      // Update
      const { error } = await supabase
        .from('projects')
        .update({
          title, description, technologies: techArray, link, image_url: imageUrl
        })
        .eq('id', editingProject.id);
      
      if (!error) {
        fetchProjects();
        closeModal();
      } else {
        setFormError('Error al actualizar: ' + error.message);
      }
    } else {
      // Insert
      const { error } = await supabase
        .from('projects')
        .insert([{
          title, description, technologies: techArray, link, image_url: imageUrl, user_id
        }]);

      if (!error) {
        fetchProjects();
        closeModal();
      } else {
        setFormError('Error al crear: ' + error.message);
      }
    }
  };

  const handleDelete = async (id: string) => {
    setDeleteError('');
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);

    if (!error) {
      fetchProjects();
    } else {
      setDeleteError('Error al eliminar: ' + error.message);
    }
  };

  return (
    <div className="space-y-8 relative">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black tracking-tighter mb-1">Resumen General</h1>
          <p className="text-gray-400 text-sm">Bienvenido de nuevo. Aquí está el estado actual de tus proyectos.</p>
        </div>
        <button 
          onClick={openCreateModal}
          className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
        >
          <span className="material-symbols-outlined text-lg">add</span>
          Nuevo Proyecto
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#1e120c] p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-2xl rounded-full group-hover:bg-primary/20 transition-colors"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">folder_open</span>
            </div>
            <span className="text-green-400 text-sm font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              +12%
            </span>
          </div>
          <h3 className="text-3xl font-black mb-1 relative z-10">{projects.length}</h3>
          <p className="text-gray-400 text-sm font-medium relative z-10">Proyectos Activos</p>
        </div>

        <div className="bg-[#1e120c] p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
              <span className="material-symbols-outlined">visibility</span>
            </div>
            <span className="text-green-400 text-sm font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              +5%
            </span>
          </div>
          <h3 className="text-3xl font-black mb-1 relative z-10">12.5k</h3>
          <p className="text-gray-400 text-sm font-medium relative z-10">Visitas al Portfolio</p>
        </div>

        <div className="bg-[#1e120c] p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 blur-2xl rounded-full group-hover:bg-purple-500/20 transition-colors"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
              <span className="material-symbols-outlined">mail</span>
            </div>
          </div>
          <h3 className="text-3xl font-black mb-1 relative z-10">84</h3>
          <p className="text-gray-400 text-sm font-medium relative z-10">Mensajes Nuevos</p>
        </div>

        <div className="bg-[#1e120c] p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 blur-2xl rounded-full group-hover:bg-green-500/20 transition-colors"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
              <span className="material-symbols-outlined">task_alt</span>
            </div>
          </div>
          <h3 className="text-3xl font-black mb-1 relative z-10">156</h3>
          <p className="text-gray-400 text-sm font-medium relative z-10">Tareas Completadas</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Projects Table */}
        <div className="lg:col-span-2 bg-[#1e120c] rounded-2xl border border-white/5 overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h2 className="text-xl font-bold">Mis Proyectos</h2>
          </div>
          
          {deleteError && (
            <div className="m-6 bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg text-sm font-medium">
              {deleteError}
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 text-gray-400 text-sm uppercase tracking-wider">
                  <th className="p-4 font-medium">Nombre</th>
                  <th className="p-4 font-medium">Tecnologías</th>
                  <th className="p-4 font-medium">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {loading ? (
                  <tr><td colSpan={3} className="p-4 text-center text-gray-400">Cargando proyectos...</td></tr>
                ) : projects.length === 0 ? (
                  <tr><td colSpan={3} className="p-4 text-center text-gray-400">No hay proyectos. ¡Crea uno nuevo!</td></tr>
                ) : (
                  projects.map(project => (
                    <tr key={project.id} className="hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          {project.image_url ? (
                            <img src={project.image_url} alt={project.title} className="w-10 h-10 rounded-lg object-cover" />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
                              {project.title.charAt(0)}
                            </div>
                          )}
                          <div>
                            <p className="font-bold text-sm text-white">{project.title}</p>
                            <a href={project.link} target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline">{project.link || 'Sin enlace'}</a>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies?.slice(0, 2).map((t, index) => (
                            <span key={index} className="px-2 py-0.5 bg-white/10 text-gray-300 rounded text-xs">{t}</span>
                          ))}
                          {project.technologies?.length > 2 && (
                            <span className="px-2 py-0.5 bg-white/10 text-gray-300 rounded text-xs">+{project.technologies.length - 2}</span>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <button onClick={() => openEditModal(project)} className="p-2 text-gray-400 hover:text-white transition-colors bg-white/5 rounded hover:bg-white/10">
                            <span className="material-symbols-outlined text-sm">edit</span>
                          </button>
                          <button onClick={() => handleDelete(project.id)} className="p-2 text-gray-400 hover:text-red-400 transition-colors bg-white/5 rounded hover:bg-white/10">
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-[#1e120c] rounded-2xl border border-white/5 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-xl font-bold">Actividad Reciente</h2>
          </div>
          
          <div className="p-6 flex-1 overflow-y-auto">
            <div className="text-sm text-gray-400 py-4 text-center">
              Mantente al día con las últimas actualizaciones del portafolio.
            </div>
          </div>
        </div>

      </div>

      {/* Modal for Create/Edit Project */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#1e120c] border border-white/10 rounded-2xl w-full max-w-lg p-6 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">{editingProject ? 'Editar Proyecto' : 'Nuevo Proyecto'}</h2>
            
            {formError && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg mb-4 text-sm font-medium">
                {formError}
              </div>
            )}
            
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Título</label>
                <input required value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Descripción</label>
                <textarea required value={description} onChange={(e) => setDescription(e.target.value)} className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-primary h-24" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Tecnologías (separadas por coma)</label>
                <input value={technologies} onChange={(e) => setTechnologies(e.target.value)} placeholder="React, Tailwind, Node..." className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">URL Enlace</label>
                <input value={link} onChange={(e) => setLink(e.target.value)} type="url" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">URL Imagen</label>
                <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} type="url" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-primary" />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={closeModal} className="px-4 py-2 rounded-lg bg-white/5 text-white hover:bg-white/10">Cancelar</button>
                <button type="submit" className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
