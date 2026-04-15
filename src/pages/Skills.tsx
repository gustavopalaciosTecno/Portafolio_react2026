export default function Skills() {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans min-h-screen">
      {/* Header */}
      <header className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/5">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 font-display">
          EXPERTISE <span className="text-primary">&</span><br />
          HABILIDADES
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          Un arsenal técnico forjado a través de años de resolución de problemas complejos y construcción de sistemas escalables.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column - Core Competencies */}
        <div className="lg:col-span-4 space-y-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-primary"></span>
              Core
            </h2>
            <ul className="space-y-6">
              <li className="group cursor-pointer">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Arquitectura Frontend</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Diseño de sistemas escalables, micro-frontends y state management complejo.</p>
              </li>
              <li className="group cursor-pointer">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Performance Web</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Optimización de Core Web Vitals, lazy loading y bundle size reduction.</p>
              </li>
              <li className="group cursor-pointer">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">UI/UX Engineering</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Implementación pixel-perfect de diseños, animaciones fluidas y accesibilidad.</p>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-[#111] rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
            <h3 className="text-xl font-bold mb-4">Metodologías</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300">Agile / Scrum</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300">CI/CD</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300">TDD</span>
              <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300">Design Systems</span>
            </div>
          </div>
        </div>

        {/* Right Column - Tech Stack Grid */}
        <div className="lg:col-span-8">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-primary"></span>
            Tech Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Category */}
            <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-colors group">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black tracking-tight">Frontend</h3>
                <span className="material-symbols-outlined text-3xl text-gray-600 group-hover:text-primary transition-colors">web</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-300">React / Next.js</span>
                    <span className="text-primary font-bold">95%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-300">TypeScript</span>
                    <span className="text-primary font-bold">90%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-300">Tailwind CSS</span>
                    <span className="text-primary font-bold">98%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[98%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Category */}
            <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-colors group">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black tracking-tight">Backend</h3>
                <span className="material-symbols-outlined text-3xl text-gray-600 group-hover:text-primary transition-colors">dns</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-300">Node.js / Express</span>
                    <span className="text-primary font-bold">85%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-300">PostgreSQL</span>
                    <span className="text-primary font-bold">80%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[80%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-gray-300">GraphQL</span>
                    <span className="text-primary font-bold">75%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[75%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Category */}
            <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 hover:border-primary/30 transition-colors group md:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black tracking-tight">Herramientas & Ecosistema</h3>
                <span className="material-symbols-outlined text-3xl text-gray-600 group-hover:text-primary transition-colors">build</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-white/5 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-gray-400">code_blocks</span>
                  <span className="text-xs font-bold text-gray-300">Git / GitHub</span>
                </div>
                <div className="p-4 bg-white/5 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-gray-400">deployed_code</span>
                  <span className="text-xs font-bold text-gray-300">Docker</span>
                </div>
                <div className="p-4 bg-white/5 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-gray-400">cloud</span>
                  <span className="text-xs font-bold text-gray-300">AWS / Vercel</span>
                </div>
                <div className="p-4 bg-white/5 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-gray-400">design_services</span>
                  <span className="text-xs font-bold text-gray-300">Figma</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
