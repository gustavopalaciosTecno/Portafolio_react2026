export default function Contact() {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      {/* Header */}
      <header className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 font-display relative z-10">
          HABLEMOS <span className="text-primary">DE</span><br />
          TU PROYECTO
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed relative z-10">
          ¿Tienes una idea en mente o necesitas escalar tu equipo técnico? Estoy disponible para nuevos desafíos y colaboraciones.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary"></span>
                Información de Contacto
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                No dudes en contactarme a través de cualquiera de estos canales. Intento responder a todos los mensajes en un plazo de 24 horas hábiles.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:hola@devpro.com" className="flex items-center gap-6 p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-primary/30 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-primary transition-colors">mail</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold mb-1 uppercase tracking-widest">Email Directo</p>
                  <p className="text-xl font-medium group-hover:text-primary transition-colors">hola@devpro.com</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 bg-[#111] border border-white/5 rounded-2xl group">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-gray-400">location_on</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold mb-1 uppercase tracking-widest">Ubicación</p>
                  <p className="text-xl font-medium">Buenos Aires, Argentina</p>
                  <p className="text-sm text-gray-500 mt-1">Disponible para trabajo remoto global</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-6">Redes Profesionales</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors group">
                  <span className="material-symbols-outlined text-gray-400 group-hover:text-white">link</span>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors group">
                  <span className="material-symbols-outlined text-gray-400 group-hover:text-white">code</span>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors group">
                  <span className="material-symbols-outlined text-gray-400 group-hover:text-white">chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0f0f0f] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
            
            <form className="relative z-10 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Ej. Juan Pérez"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="juan@empresa.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Asunto</label>
                <select 
                  id="subject" 
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                >
                  <option value="">Selecciona un motivo...</option>
                  <option value="project">Nuevo Proyecto</option>
                  <option value="consulting">Consultoría Técnica</option>
                  <option value="job">Oportunidad Laboral</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Mensaje</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-3 group"
              >
                Enviar Mensaje
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">send</span>
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}
