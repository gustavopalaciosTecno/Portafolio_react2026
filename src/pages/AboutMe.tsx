import { motion } from 'motion/react';
import { Code, Server, Smartphone, Globe, Cloud, Database } from 'lucide-react';

export default function AboutMe() {
  const qualities = [
    { icon: <Code className="w-6 h-6 text-blue-400" />, title: 'Desarrollo Clean Code', desc: 'Escribo código legible, escalable y mantenible.' },
    { icon: <Globe className="w-6 h-6 text-indigo-400" />, title: 'Web Accesible', desc: 'Enfocado en crear experiencias para todos los usuarios.' },
    { icon: <Server className="w-6 h-6 text-emerald-400" />, title: 'Arquitecturas Sólidas', desc: 'Diseño de sistemas en el backend eficientes y robustos.' },
    { icon: <Smartphone className="w-6 h-6 text-amber-400" />, title: 'Mobile First', desc: 'Diseños que se adaptan a cualquier dispositivo.' },
    { icon: <Cloud className="w-6 h-6 text-sky-400" />, title: 'Cloud Native', desc: 'Despliegues en AWS, Vercel, y Supabase.' },
    { icon: <Database className="w-6 h-6 text-purple-400" />, title: 'Modelado de Datos', desc: 'Diseño estructurado y óptimo de bases de datos.' },
  ];

  return (
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="w-full md:w-1/3 relative">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-slate-700 relative z-10">
              <img
                src="https://serviciospalaciosweb.com/wp-content/uploads/2026/01/perfil_3-904x1024.png"
                alt="Néstor Gustavo Palacios Meyer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 transform scale-110 rounded-full"></div>
          </div>

          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-6">
              Sobre Mí
            </h1>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Hola, soy Néstor Gustavo Palacios Meyer. Soy un desarrollador web experto con 12 años de experiencia en el sector. A lo largo de mi carrera, he tenido la oportunidad de participar en una multitud de proyectos desafiantes utilizando tecnologías de vanguardia.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Mi enfoque siempre ha estado centrado en la creación de aplicaciones robustas, interfaces dinámicas y experiencias de usuario excepcionales. Disfruto resolviendo problemas complejos, optimizando el rendimiento y colaborando estrechamente con equipos multidisciplinares. Nunca dejo de aprender y me apasiona integrar soluciones basadas en IA para potenciar las herramientas de mañana.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-8 text-center">¿Qué me define como profesional?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualities.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:bg-slate-700/50 transition-colors"
            >
              <div className="bg-slate-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {q.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{q.title}</h3>
              <p className="text-slate-400 text-sm">{q.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
