
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Video de fondo con Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            src="/components/Video_Generation_With_Audio_Options.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            Mantenimiento y <span className="text-[#F25733]">Reparación</span> de Equipos Mineros
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            Ofrecemos soluciones integrales para la industria minera, especializándonos en la fabricación y reparación de sistemas de traspaso de mineral y componentes de maquinaria, con tecnología avanzada y capacidad de producción de hasta 120 toneladas por mes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#servicios"
              className="bg-[#F25733] hover:bg-[#F06E4E] text-white text-center px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:-translate-y-1"
            >
              Nuestros Servicios
            </a>
            <Link
              to="/contacto"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-center px-10 py-4 rounded-lg font-bold text-lg transition-all"
            >
              Contactar Ahora
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="text-white border-l-4 border-[#F25733] pl-4">
              <div className="text-3xl font-black">30+</div>
              <div className="text-[#7A7A7A] text-sm font-medium uppercase tracking-wider">Años Exp.</div>
            </div>
            <div className="text-white border-l-4 border-[#F25733] pl-4">
              <div className="text-3xl font-black">6000</div>
              <div className="text-[#7A7A7A] text-sm font-medium uppercase tracking-wider">m² para trabajos</div>
            </div>
            <div className="text-white border-l-4 border-[#F25733] pl-4">
              <div className="text-3xl font-black">120</div>
              <div className="text-[#7A7A7A] text-sm font-medium uppercase tracking-wider">Ton/mes producción</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating element for visual flair */}
      <div className="hidden lg:block absolute right-[-10%] bottom-[-10%] w-[600px] h-[600px] bg-[#F25733]/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;
