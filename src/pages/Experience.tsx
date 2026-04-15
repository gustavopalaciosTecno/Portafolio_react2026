export default function Experience() {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      {/* Header */}
      <header className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 font-display relative z-10">
          TRAYECTORIA <span className="text-primary">&</span><br />
          EXPERIENCIA
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed relative z-10">
          Un recorrido profesional enfocado en la entrega de valor, liderazgo técnico y construcción de productos digitales de alto impacto.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column - Timeline */}
          <div className="lg:col-span-8 relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-white/5"></div>

            <div className="space-y-24">
              
              {/* Experience Item 1 */}
              <div className="relative pl-24 group">
                {/* Timeline Dot */}
                <div className="absolute left-[27px] top-2 w-5 h-5 rounded-full bg-primary border-4 border-[#0a0a0a] group-hover:scale-150 transition-transform duration-300 z-10"></div>
                <div className="absolute left-[36px] top-2 w-12 h-[2px] bg-primary/20 group-hover:bg-primary/50 transition-colors duration-300"></div>

                <div className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 relative z-10">
                    <div>
                      <h3 className="text-3xl font-black tracking-tight mb-1">Senior Lead Web Developer</h3>
                      <h4 className="text-xl text-gray-400 font-medium">Innovatech Global Solutions</h4>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-widest uppercase">
                      <span className="material-symbols-outlined text-base">calendar_today</span>
                      2018 - Presente
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8 relative z-10">
                    Liderazgo del equipo de desarrollo de arquitecturas cloud y modernización de plataformas legacy. Mentoring de desarrolladores y diseño de soluciones.
                  </p>

                  <div className="space-y-4 mb-8 relative z-10">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <p className="text-sm text-gray-300 leading-relaxed">Reducción del tiempo de carga inicial (LCP) en un 40% mediante optimización de assets y SSR.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <p className="text-sm text-gray-300 leading-relaxed">Implementación de un Design System corporativo utilizado por 5 equipos de producto diferentes.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                      <p className="text-sm text-gray-300 leading-relaxed">Mentoría de desarrolladores junior y establecimiento de estándares de código y testing (Jest/Cypress).</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">React</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">Next.js</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">TypeScript</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">GraphQL</span>
                  </div>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="relative pl-24 group">
                {/* Timeline Dot */}
                <div className="absolute left-[27px] top-2 w-5 h-5 rounded-full bg-gray-600 border-4 border-[#0a0a0a] group-hover:bg-primary group-hover:scale-150 transition-all duration-300 z-10"></div>
                <div className="absolute left-[36px] top-2 w-12 h-[2px] bg-white/10 group-hover:bg-primary/50 transition-colors duration-300"></div>

                <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-3xl font-black tracking-tight mb-1">Full Stack Developer</h3>
                      <h4 className="text-xl text-gray-400 font-medium">Creative Digital Studio</h4>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-gray-400 rounded-full text-sm font-bold tracking-widest uppercase">
                      <span className="material-symbols-outlined text-base">calendar_today</span>
                      2014 - 2018
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    Desarrollo end-to-end de sitios web corporativos y comercio electrónico internacionales con React, Node.js y bases de datos relacionales.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-gray-500 mt-1">check_circle</span>
                      <p className="text-sm text-gray-300 leading-relaxed">Desarrollo de plataformas e-commerce B2B con integraciones complejas de pasarelas de pago y ERPs.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-gray-500 mt-1">check_circle</span>
                      <p className="text-sm text-gray-300 leading-relaxed">Creación de APIs RESTful robustas y escalables utilizando Node.js y Express.</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400">Vue.js</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400">Node.js</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400">PostgreSQL</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400">AWS</span>
                  </div>
                </div>
              </div>

              {/* Experience Item 3 */}
              <div className="relative pl-24 group">
                {/* Timeline Dot */}
                <div className="absolute left-[27px] top-2 w-5 h-5 rounded-full bg-gray-600 border-4 border-[#0a0a0a] group-hover:bg-primary group-hover:scale-150 transition-all duration-300 z-10"></div>
                <div className="absolute left-[36px] top-2 w-12 h-[2px] bg-white/10 group-hover:bg-primary/50 transition-colors duration-300"></div>

                <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-3xl font-black tracking-tight mb-1">Junior Web Developer</h3>
                      <h4 className="text-xl text-gray-400 font-medium">WebNext Agency</h4>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-gray-400 rounded-full text-sm font-bold tracking-widest uppercase">
                      <span className="material-symbols-outlined text-base">calendar_today</span>
                      2012 - 2014
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    Inicios profesionales desarrollando interfaces responsivas e integración de APIs backend usando tecnologías web estándar.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400">JavaScript</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400">HTML/CSS</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400">PHP</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Education & Certifications */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Education */}
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary"></span>
                Educación
              </h2>
              
              <div className="space-y-8">
                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-gray-500"></div>
                  <h3 className="text-xl font-bold mb-1">Ingeniería en Software</h3>
                  <p className="text-sm text-gray-400 mb-2">Universidad Tecnológica Nacional</p>
                  <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">2007 - 2012</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary"></span>
                Certificaciones
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-[#111] border border-white/5 rounded-xl flex items-center gap-4 hover:border-primary/30 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">cloud_done</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">AWS Certified Developer</h4>
                    <p className="text-xs text-gray-500">Amazon Web Services • 2021</p>
                  </div>
                </div>
                
                <div className="p-4 bg-[#111] border border-white/5 rounded-xl flex items-center gap-4 hover:border-primary/30 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">Meta Front-End Developer</h4>
                    <p className="text-xs text-gray-500">Coursera • 2020</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download CV */}
            <div className="pt-8">
              <a href="#" className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 hover:bg-primary text-white font-bold rounded-xl transition-colors group">
                <span className="material-symbols-outlined group-hover:animate-bounce">download</span>
                Descargar CV Completo
              </a>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
