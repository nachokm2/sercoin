
import React, { useState, useEffect, useCallback } from 'react';
import ingenieria1 from './Seleccion sitio web/Seleccion sitio web/Cubas Overflow - Underflow - Unitaria/1.JPG';
import ingenieria2 from './Seleccion sitio web/Seleccion sitio web/Cubas Overflow - Underflow - Unitaria/2.JPG';
import ingenieria3 from './Seleccion sitio web/Seleccion sitio web/Cubas Overflow - Underflow - Unitaria/3.JPG';
import ingenieria4 from './Seleccion sitio web/Seleccion sitio web/Cubas Overflow - Underflow - Unitaria/4.JPG';
import fab2 from './Fabricación/Imagen2.jpg';
import fab3 from './Fabricación/Imagen3.jpg';
import fab4 from './Fabricación/Imagen4.jpg';
import fab5 from './Fabricación/Imagen5.jpg';
import fab6 from './Fabricación/Imagen6.jpg';
import fab7 from './Fabricación/Imagen7.jpg';
import fab8 from './Fabricación/Imagen8.jpg';
import fab9 from './Fabricación/Imagen9.jpg';
import fab10 from './Fabricación/Imagen10.jpg';
import fab11 from './Fabricación/Imagen11.jpg';
import fab12 from './Fabricación/Imagen12.jpg';
import fab13 from './Fabricación/Imagen13.jpg';
import baseMartilloPng from './diseño/Base martillo pica roca LHD.png';
import carretesPuerto from './diseño/carretes porta espias de puerto.jpg';
import capsulasSeguridad from './diseño/Cápsulas de Seguridad para retiro de inchancables.jpg';
import escalasEvacuacion from './diseño/escalas para evacuación por chimeneas en minería subterránea.png';
import yugosIzaje from './diseño/yugos para izaje.jpg';
import reparacionHarneros from './reparaciones/Reparación de harneros.jpg';
import reparacionTornillos from './reparaciones/Reparación de Tornillos VTM 1500.jpg';
import reparacionChancadores from './reparaciones/Reparación y Armado de Chancadores.jpg';
import reparacion14 from './reparaciones/Imagen14.jpg';
import reparacion15 from './reparaciones/Imagen15.jpg';
import reparacion16 from './reparaciones/Imagen16.png';

type ServiceCardData = {
  id: string;
  title: string;
  desc: string;
  detailedDesc: string;
  features: string[];
  images: string[];
};

type ServicesProps = {
  variant?: 'light' | 'dark'; // light = text claro sobre fondo oscuro (Home), dark = texto oscuro sobre fondo claro (Services page)
};

const services: ServiceCardData[] = [
  {
    id: 'diseno',
    title: 'Diseño',
    desc: 'Ingeniería y desarrollo de equipos especiales y soluciones de seguridad para minería.',
    detailedDesc:
      'Abarcamos desde el levantamiento y modelado 3D hasta la ingeniería de detalle para la fabricación de componentes críticos, herramientas de izaje y estructuras de seguridad certificadas.',
    features: [
      'Equipos Especiales (Carretes y Yugos)',
      'Cápsulas de Seguridad y Escalas',
      'Herramientas para Maquinaria (LHD)',
      'Ingeniería de Detalle y Planos'
    ],
    images: [baseMartilloPng, carretesPuerto, capsulasSeguridad, escalasEvacuacion, yugosIzaje]
  },
  {
    id: 'fabricacion',
    title: 'Fabricación',
    desc: 'Diseño, levantamiento y fabricación de estructuras y equipos mineros especializados.',
    detailedDesc:
      'Desarrollo de soluciones de gran envergadura para condiciones exigentes, abarcando desde pasacables de alta montaña y estanques, hasta mecanizado de precisión.',
    features: ['Pasacables Mineros (hasta 18m)', 'Estanques de Gran Volumen', 'Chutes y Sistemas de Traspaso', 'Mecanizado de Piezas Especiales'],
    images: [fab2, fab3, fab4, fab5, fab6, fab7, fab8, fab9, fab10, fab11, fab12, fab13]
  },
  {
    id: 'reparacion',
    title: 'Reparación',
    desc: 'Reparación y armado especializado de componentes de alto tonelaje para minería.',
    detailedDesc:
      'Servicio integral enfocado en la recuperación de equipos críticos, abarcando desde tornamesas de palas hidráulicas y tornillos VTM, hasta el armado completo de chancadores y harneros.',
    features: ['Tornamesas Pala Demag', 'Tornillos VTM 1500', 'Armado de Chancadores', 'Reparación de Harneros'],
    images: [reparacionHarneros, reparacionTornillos, reparacionChancadores, reparacion14, reparacion15, reparacion16]
  }
];

const ServiceCard: React.FC<{ service: ServiceCardData; variant: 'light' | 'dark' }> = ({ service, variant }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % service.images.length);
  }, [service.images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + service.images.length) % service.images.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(id);
  }, [isHovered, nextSlide]);

  const isDarkText = variant === 'dark';

  const cardClass = isDarkText
    ? 'group relative flex flex-col overflow-hidden rounded-xl bg-white border border-slate-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl'
    : 'group relative flex flex-col overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl';

  return (
    <div
      className={cardClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden bg-slate-100 flex items-center justify-center">
        <img
          src={service.images[currentIndex]}
          alt={`${service.title} vista ${currentIndex + 1}`}
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>

        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={prevSlide}
            className="h-9 w-9 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all active:scale-90"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="h-9 w-9 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all active:scale-90"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 space-x-1.5">
          {service.images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-[#F25733]' : 'w-2 bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <h3 className={`text-lg font-bold ${isDarkText ? 'text-[#282828]' : 'text-white'}`}>{service.title}</h3>
          <span
            className={`mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full ${
              isDarkText ? 'bg-[#F25733]/10 text-[#F25733] border border-slate-200/60' : 'bg-white/10 text-white border border-white/20'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4m-9 4v5" />
            </svg>
          </span>
        </div>
        <p className={`text-sm mb-3 ${isDarkText ? 'text-[#555]' : 'text-slate-100'}`}>{service.desc}</p>
        <p className={`text-sm mb-4 ${isDarkText ? 'text-[#7A7A7A]' : 'text-slate-200'}`}>{service.detailedDesc}</p>
        <div className={`mt-auto pt-4 ${isDarkText ? 'border-t border-slate-200' : 'border-t border-white/20'}`}>
          <p className={`text-xs font-bold mb-2 ${isDarkText ? 'text-[#282828]' : 'text-white'}`}>Características principales:</p>
          <ul className={`text-xs space-y-1 ${isDarkText ? 'text-[#555]' : 'text-slate-100'}`}>
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#F25733] rounded-full mr-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC<ServicesProps> = ({ variant = 'light' }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} variant={variant} />
      ))}
    </div>
  );
};

export default Services;
