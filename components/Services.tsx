
import React, { useState } from 'react';

const services = [
  {
    title: 'Estructuras Metálicas',
    desc: 'Fabricación de galpones, vigas especiales, chutes, feeders, tolvas, baldes y tolvas. Diseñamos y construimos estructuras metálicas personalizadas para la industria minera con los más altos estándares de calidad.',
    detailedDesc: 'Nuestras estructuras metálicas incluyen galpones industriales, vigas especiales de alta resistencia, sistemas de chutes y feeders para transporte de mineral, tolvas de almacenamiento, y baldes y tolvas especializadas. Utilizamos materiales de primera calidad y técnicas de soldadura avanzadas para garantizar durabilidad y seguridad en entornos mineros exigentes. Capacidad de producción de hasta 120 toneladas mensuales.',
    features: ['Galpones industriales', 'Vigas especiales', 'Chutes y feeders', 'Tolvas de almacenamiento', 'Baldes especializados', 'Soldadura de alta calidad'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Componentes Especializados',
    desc: 'Fabricación de piezas especiales de piping, estanques y herramientas especializadas para minería: C-Hook, Jacking cradle, Capachos para bolas, Atriles de Traslado de Componentes.',
    detailedDesc: 'Producimos componentes especializados incluyendo piezas de piping de alta presión, estanques de almacenamiento industrial, y herramientas mineras especializadas como C-Hook para izaje, Jacking cradle para mantenimiento, Capachos para bolas de molino, y Atriles de Traslado de Componentes. Todos nuestros productos cumplen con normas internacionales de seguridad y calidad.',
    features: ['Piping de alta presión', 'Estanques industriales', 'C-Hook para izaje', 'Jacking cradle', 'Capachos para bolas', 'Atriles de traslado'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    img: '/components/Componente especializado.jpg'
  },
  {
    title: 'Sistemas Automatizados',
    desc: 'Fabricación de sistemas de traspaso de mineral automatizados incluyendo guillotinas, lanzas, paletas y otros componentes para optimizar procesos mineros con tecnología avanzada.',
    detailedDesc: 'Desarrollamos sistemas automatizados completos para el traspaso de mineral, incluyendo guillotinas hidráulicas, lanzas de alimentación, paletas transportadoras y sistemas de control automatizados. Nuestros sistemas mejoran la eficiencia operativa, reducen los tiempos de inactividad y aumentan la seguridad en las operaciones mineras. Diseño personalizado según las necesidades específicas de cada cliente.',
    features: ['Guillotinas hidráulicas', 'Lanzas de alimentación', 'Paletas transportadoras', 'Sistemas de control', 'Automatización completa', 'Diseño personalizado'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    img: '/components/Sistemas automatizados.jpg'
  },
  {
    title: 'Mantenimiento Industrial',
    desc: 'Servicio integral de mantención y reparación de equipos mineros: bombas de proceso, equipos de flotación, equipos de relaves y otros componentes industriales críticos.',
    detailedDesc: 'Ofrecemos servicios completos de mantenimiento y reparación para equipos mineros críticos incluyendo bombas de proceso de alta presión, equipos de flotación, sistemas de relaves, y otros componentes industriales. Nuestro equipo técnico altamente calificado realiza diagnósticos precisos, reparaciones especializadas y mantenimiento preventivo para minimizar tiempos de inactividad y maximizar la vida útil de los equipos.',
    features: ['Bombas de proceso', 'Equipos de flotación', 'Sistemas de relaves', 'Mantenimiento preventivo', 'Reparaciones especializadas', 'Diagnósticos técnicos'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    img: '/components/Mantenimiento industrial.jpg'
  }
];

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, idx) => (
        <div key={idx} className="group relative bg-[#F9F9F9] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
          <div className="h-48 overflow-hidden relative">
            <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute top-4 left-4 bg-[#F25733] p-3 rounded-xl text-white shadow-lg">
              {service.icon}
            </div>
          </div>
          <div className="p-8 flex-grow">
            <h3 className="text-xl font-bold text-[#282828] mb-3">{service.title}</h3>
            <p className="text-[#7A7A7A] leading-relaxed text-sm mb-4">
              {service.desc}
            </p>
            
            {/* Información expandida */}
            {expandedService === idx && (
              <div className="mt-4 pt-4 border-t border-slate-200 animate-fadeIn">
                <p className="text-[#555555] leading-relaxed text-sm mb-4">
                  {service.detailedDesc}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-bold text-[#282828] mb-2">Características principales:</h4>
                  <ul className="text-sm text-[#7A7A7A] space-y-1">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#F25733] rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="px-8 pb-8">
            <button 
              onClick={() => toggleExpanded(idx)}
              className="text-[#F25733] font-bold text-sm inline-flex items-center group-hover:translate-x-2 transition-transform cursor-pointer hover:text-[#E0462A]"
            >
              {expandedService === idx ? 'Ver menos' : 'Saber más'}
              <svg 
                className={`w-4 h-4 ml-2 transition-transform ${expandedService === idx ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

<style>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
`}</style>

export default Services;
