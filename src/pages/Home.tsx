import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-[#050505] text-[#e0e0e0] font-sans">
      <div className="abstract-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-[5%] py-20 md:py-40">
        <div className="max-w-[1400px] w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 z-10">
          <div className="flex-1 text-center md:text-left mt-20 md:mt-0">
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">
              Néstor Gustavo Palacios Meyer
            </h2>
            <h1 className="text-5xl md:text-[5rem] lg:text-[7rem] font-black leading-[0.9] tracking-tighter mb-6 md:mb-8 font-display">
              CREANDO<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                FUTUROS
              </span><br />
              DIGITALES
            </h1>
            <p className="text-lg md:text-xl text-[#a0a0a0] mb-8 md:mb-12 max-w-[500px] mx-auto md:mx-0 leading-relaxed">
              Transformo ideas complejas en experiencias web intuitivas y de alto rendimiento. Especializado en arquitecturas escalables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center md:justify-start">
              <Link to="/proyectos" className="btn-primary-home text-center">
                Ver Proyectos
              </Link>
              <Link to="/contacto" className="btn-secondary-home text-center">
                Contactar
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center relative w-full mt-10 md:mt-0">
            <div className="avatar-wrapper">
              <div className="floating-blob"></div>
              <img src="https://serviciospalaciosweb.com/wp-content/uploads/2025/07/gustavo_g-683x1024.png" alt="Developer Portrait" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-40 px-[5%] relative bg-[#0a0a0a]">
        <h2 className="about-title hidden lg:block">SOBRE MÍ</h2>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl font-black font-display tracking-tight">
              Más de 12 años<br className="hidden md:block" />
              <span className="text-primary">escribiendo código.</span>
            </h3>
            <p className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed">
              Mi pasión es construir software que no solo funcione, sino que inspire. Desde el diseño de la base de datos hasta la última animación CSS, cuido cada detalle del proceso.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-8 pt-4 md:pt-8">
              <div className="stat-box">
                <h4 className="text-4xl md:text-5xl font-black mb-2">50+</h4>
                <p className="text-xs md:text-sm font-bold uppercase tracking-wider">Proyectos Completados</p>
              </div>
              <div className="stat-box">
                <h4 className="text-4xl md:text-5xl font-black mb-2">100%</h4>
                <p className="text-xs md:text-sm font-bold uppercase tracking-wider">Clientes Satisfechos</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-0">
            <div className="skill-item-home">
              <span className="material-symbols-outlined text-5xl text-accent">code</span>
              <span className="font-bold tracking-wider text-center">FRONTEND</span>
            </div>
            <div className="skill-item-home">
              <span className="material-symbols-outlined text-5xl text-primary">database</span>
              <span className="font-bold tracking-wider text-center">BACKEND</span>
            </div>
            <div className="skill-item-home">
              <span className="material-symbols-outlined text-5xl text-primary">architecture</span>
              <span className="font-bold tracking-wider text-center">ARQUITECTURA</span>
            </div>
            <div className="skill-item-home">
              <span className="material-symbols-outlined text-5xl text-accent">speed</span>
              <span className="font-bold tracking-wider text-center">PERFORMANCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-40 px-[5%]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 mb-12 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter">
              TRABAJO<br />
              <span className="text-accent">DESTACADO</span>
            </h2>
            <Link to="/proyectos" className="text-lg md:text-xl font-bold text-primary hover:text-white transition-colors flex items-center gap-2">
              Ver todos <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="project-card-home h-[400px] md:h-[500px]">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" alt="Project 1" />
              <div className="project-info-home">
                <p className="text-primary font-bold tracking-widest text-xs md:text-sm mb-2">E-COMMERCE</p>
                <h3 className="text-3xl md:text-4xl font-black mb-2 md:mb-4">Nexus Store</h3>
                <p className="text-sm md:text-base text-[#a0a0a0] mb-4 md:mb-6">Plataforma de ventas de alto rendimiento con Next.js y Stripe.</p>
                <Link to="/proyectos/1" className="inline-block border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors font-bold text-sm md:text-base">
                  Explorar
                </Link>
              </div>
            </div>
            <div className="project-card-home h-[400px] md:h-[500px] md:translate-y-20 mt-4 md:mt-0">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Project 2" />
              <div className="project-info-home">
                <p className="text-accent font-bold tracking-widest text-xs md:text-sm mb-2">DASHBOARD</p>
                <h3 className="text-3xl md:text-4xl font-black mb-2 md:mb-4">DataViz Pro</h3>
                <p className="text-sm md:text-base text-[#a0a0a0] mb-4 md:mb-6">Panel de analíticas en tiempo real para empresas financieras.</p>
                <Link to="/proyectos/2" className="inline-block border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors font-bold text-sm md:text-base">
                  Explorar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 md:py-40 px-[5%] bg-[#0a0a0a]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-display tracking-tighter mb-12 md:mb-20 text-center">
            TRAYECTORIA
          </h2>
          <div className="border-l-2 border-white/10 pl-8 md:pl-12 space-y-12 md:space-y-20 ml-2 md:ml-0">
            <div className="exp-item-home">
              <span className="text-primary font-bold tracking-widest text-xs md:text-sm block mb-2">2018 - PRESENTE</span>
              <h3 className="text-2xl md:text-3xl font-black mb-2">Senior Lead Web Developer</h3>
              <h4 className="text-lg md:text-xl text-[#a0a0a0] mb-3 md:mb-4">Innovatech Global Solutions</h4>
              <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                Liderando el equipo de desarrollo de arquitecturas cloud y modernización de plataformas legacy. Mentoring de desarrolladores y diseño de soluciones.
              </p>
            </div>
            <div className="exp-item-home">
              <span className="text-accent font-bold tracking-widest text-xs md:text-sm block mb-2">2014 - 2018</span>
              <h3 className="text-2xl md:text-3xl font-black mb-2">Full Stack Developer</h3>
              <h4 className="text-lg md:text-xl text-[#a0a0a0] mb-3 md:mb-4">Creative Digital Studio</h4>
              <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                Desarrollo end-to-end de sitios web corporativos y comercio electrónico internacionales con React, Node.js y bases de datos relacionales.
              </p>
            </div>
            <div className="exp-item-home">
              <span className="text-primary font-bold tracking-widest text-xs md:text-sm block mb-2">2012 - 2014</span>
              <h3 className="text-2xl md:text-3xl font-black mb-2">Junior Web Developer</h3>
              <h4 className="text-lg md:text-xl text-[#a0a0a0] mb-3 md:mb-4">WebNext Agency</h4>
              <p className="text-sm md:text-base text-[#a0a0a0] leading-relaxed">
                Inicios profesionales desarrollando interfaces responsivas e integración de APIs backend usando tecnologías web estándar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
