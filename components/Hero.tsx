
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import camion from './camión sin fondo (1).png';
import isoCert from './norma-iso-9001-2015-globaliso.png';

type HeroProps = {
  backgroundImage?: string;
};

const counterItems = [
  { label: 'Años Exp.', target: 30, suffix: '+', formatter: (v: number) => v.toString() },
  { label: 'm² para trabajos', target: 6000, suffix: '', formatter: (v: number) => v.toLocaleString('es-CL') },
  { label: 'Ton/mes producción', target: 120, suffix: '', formatter: (v: number) => v.toString() },
];

const Hero: React.FC<HeroProps> = ({ backgroundImage }) => {
  const [counts, setCounts] = useState<number[]>(counterItems.map(() => 0));
  const [truckOffsetY, setTruckOffsetY] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const pauseTimer = useRef<number>();

  useEffect(() => {
    const duration = 1200;
    const startTime = performance.now();

    const tick = () => {
      const now = performance.now();
      const progress = Math.min((now - startTime) / duration, 1);
      setCounts(counterItems.map((item) => Math.floor(item.target * progress)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setTruckOffsetY(y * 0.35);
      if (videoRef.current) {
        videoRef.current.play().catch(() => undefined);
        window.clearTimeout(pauseTimer.current);
        pauseTimer.current = window.setTimeout(() => {
          videoRef.current?.pause();
        }, 200);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.clearTimeout(pauseTimer.current);
    };
  }, []);

  const heroStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(5,7,12,0.35) 0%, rgba(5,7,12,0.55) 55%, rgba(5,7,12,0.7) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : { backgroundColor: '#0b1221' };

  return (
      <section
        className="relative h-screen min-h-[600px] flex items-center overflow-hidden pt-[70px] sm:pt-0"
        style={heroStyle}
      >
      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="max-w-3xl">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-black text-white leading-tight mb-4 sm:mb-6 pt-[60px] sm:pt-[88px] md:pt-[120px]">
              Maestranza <span className="text-[#F25733]">Sercoin Ltda</span>, Diseño y Fabricación de Estructuras Metálicas para la Industria y la Gran Minería.
            </h1>
          <p className="text-base sm:text-xl text-slate-300 mb-6 sm:mb-10 leading-relaxed max-w-2xl">
            Ofrecemos soluciones integrales, nos especializamos en la fabricación de sistemas de traspaso de mineral, también contamos con servicios de Mantención y Reparación de Equipos y Componentes para la Industria y la Gran Minería.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href="#servicios"
              className="bg-[#F25733] hover:bg-[#F06E4E] text-white text-center px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all shadow-xl hover:-translate-y-1"
            >
              Nuestros Servicios
            </a>
            <img
              src={isoCert}
              alt="Certificación ISO 9001:2015"
              className="h-24 sm:h-28 w-auto object-contain drop-shadow-lg"
              loading="lazy"
            />
          </div>

          <div className="mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            {counterItems.map((item, idx) => (
              <div key={item.label} className="text-white border-l-4 border-[#F25733] pl-4 mb-4 sm:mb-0">
                <div className="text-2xl sm:text-3xl font-black">{item.formatter(counts[idx])}{item.suffix}</div>
                <div className="text-[#7A7A7A] text-xs sm:text-sm font-medium uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating element for visual flair */}
      <div className="hidden lg:block absolute right-[-10%] bottom-[-10%] w-[600px] h-[600px] bg-[#F25733]/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;
