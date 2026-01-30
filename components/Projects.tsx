import React, { useState, useEffect, useCallback } from 'react';
import tmt1 from './Seleccion sitio web/Seleccion sitio web/Taller Mantencion Teniente/1.jpg';
import tmt2 from './Seleccion sitio web/Seleccion sitio web/Taller Mantencion Teniente/2.jpg';
import tmt3 from './Seleccion sitio web/Seleccion sitio web/Taller Mantencion Teniente/3.jpg';
import tmt4 from './Seleccion sitio web/Seleccion sitio web/Taller Mantencion Teniente/4.jpg';
import tmt5 from './Seleccion sitio web/Seleccion sitio web/Taller Mantencion Teniente/5.jpg';
import fort1 from './Seleccion sitio web/Seleccion sitio web/Marcos de fortificación minería subterránea/1.JPG';
import fort2 from './Seleccion sitio web/Seleccion sitio web/Marcos de fortificación minería subterránea/2.JPG';
import fort3 from './Seleccion sitio web/Seleccion sitio web/Marcos de fortificación minería subterránea/3.JPG';
import fort4 from './Seleccion sitio web/Seleccion sitio web/Marcos de fortificación minería subterránea/4.JPG';
import fort5 from './Seleccion sitio web/Seleccion sitio web/Marcos de fortificación minería subterránea/5.jpg';
import fort6 from './Seleccion sitio web/Seleccion sitio web/Marcos de fortificación minería subterránea/6.jpg';
import fort7 from './Seleccion sitio web/Seleccion sitio web/Marcos de fortificación minería subterránea/7.jpg';
import mantencionPlantaQuimica from './Matención planta quimica.jpg';
import pavimentoIndustrial from './Pavimento industrial.jpg';
import refuerzoEstructuralTorre from './Refuerzo estructural de torre.jpg';
import pinturaEstanqueCombustible from './Pintura estanque de combustible.jpg';
import mantenimientoIndustrial from './Mantenimiento industrial.jpg';
import componenteEspecializado from './Componente especializado.jpg';
import montajeSilosMineria from './Montaje de silos de mineria.jpg';
import galponLogisticoQuilicura from './Galpon logistico quilicura.jpg';
import proyectoGenerico from './Proyecto.jpg';
import reparacionTornamesa from './Reparación de tornamesa Pala Hidráulica Demag.jpg';
import sistemasAutomatizados from './Sistemas automatizados.jpg';

type Category = 'Diseño' | 'Fabricación' | 'Reparación';

type ProjectCardData = {
  id: string;
  title: string;
  category: Category;
  description: string;
  images: string[];
  loadingStates: boolean[];
  values: string[];
};

const CATEGORY_LABELS: Category[] = ['Diseño', 'Fabricación', 'Reparación'];

const initialProjects: ProjectCardData[] = [
  {
    id: '1',
    title: 'Codelco División El Teniente - Taller Mantención Camiones Rajo',
    category: 'Fabricación',
    description: 'Fabricación y montaje del taller de mantención para camiones de rajo en División El Teniente, asegurando resistencia estructural, cumplimiento normativo y coordinación en terreno para mantener la continuidad operacional del cliente.',
    images: [tmt1, tmt2, tmt3, tmt4, tmt5],
    loadingStates: new Array(5).fill(false),
    values: ['Capacidad estructural', 'Montaje industrial', 'Continuidad operacional']
  },
  {
    id: '2',
    title: 'Mantención Planta Química',
    category: 'Reparación',
    description: 'Servicio integral de mantención mecánica y estructural en planta química industrial para asegurar continuidad operacional, reducir riesgos y cumplir estándares de seguridad. Incluyó reparación de componentes críticos, refuerzos estructurales y trabajos en ambientes controlados, evidenciando experiencia en mantención industrial compleja y operación en condiciones críticas.',
    images: [
      mantencionPlantaQuimica,
      mantenimientoIndustrial,
      componenteEspecializado,
      proyectoGenerico,
      galponLogisticoQuilicura
    ],
    loadingStates: new Array(5).fill(false),
    values: ['Mantención industrial compleja', 'Trabajo en ambientes críticos', 'Continuidad operacional']
  },
  {
    id: '3',
    title: 'Delta Ingeniería y Construcción - Marcos laminados K-1',
    category: 'Diseño',
    description: 'Fabricación y montaje de marcos laminados para fortificación de túnel K-1 (2.000 ton), asegurando precisión dimensional, secuencia de montaje y cumplimiento de requisitos de fortificación en obra subterránea.',
    images: [fort1, fort2, fort3, fort4, fort5, fort6, fort7],
    loadingStates: new Array(5).fill(false),
    values: ['Montaje pesado', 'Fortificación subterránea', 'Precisión en obra']
  }
];

type CardProps = {
  project: ProjectCardData;
  onRefreshImage: (id: string, index: number) => void;
};

const ProjectCard: React.FC<CardProps> = ({ project, onRefreshImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(id);
  }, [isHovered, nextSlide]);

  const currentLoading = project.loadingStates[currentIndex];
  const currentImage = project.images[currentIndex];

  const handleCardClick = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white border border-slate-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      aria-expanded={showDescription}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <div className="h-full w-full">
          {currentLoading ? (
            <div className="flex h-full w-full flex-col items-center justify-center space-y-3 bg-[#0B1221]/70 backdrop-blur-sm">
              <div className="relative h-12 w-12">
                <div className="absolute inset-0 animate-ping rounded-full bg-[#F25733]/20"></div>
                <div className="relative h-full w-full animate-spin rounded-full border-4 border-[#F25733] border-t-transparent"></div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F25733]/80">Procesando vista {currentIndex + 1}</p>
            </div>
          ) : currentImage ? (
            <img
              src={currentImage}
              alt={`${project.title} - Vista ${currentIndex + 1}`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-slate-600">
              <svg className="w-12 h-12 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9-4 9 4-9 4-9-4zm0 6l9 4 9-4" />
              </svg>
            </div>
          )}
        </div>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black/30 opacity-70"></div>

        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all active:scale-90"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all active:scale-90"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onRefreshImage(project.id, currentIndex);
          }}
          disabled={currentLoading}
          className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-md bg-black/70 text-slate-200 backdrop-blur-md hover:text-[#F25733] transition-colors disabled:opacity-40"
          title="Regenerar esta toma"
        >
          <svg className={`w-4 h-4 ${currentLoading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v6h6M20 20v-6h-6M5 19a9 9 0 0114-7" />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-1.5">
          {project.images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-[#F25733]' : 'w-2 bg-white/40 hover:bg-white'}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-bold tracking-tight text-[#282828] group-hover:text-[#F25733] transition-colors">{project.title}</h3>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Ref. {project.id.padStart(3, '0')}</span>
        </div>
        <div className={`overflow-hidden transition-[max-height] duration-400 ${showDescription ? 'max-h-36' : 'max-h-0'}`}>
          <p className="text-sm leading-relaxed text-[#555]">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.values.map((value) => (
              <span key={value} className="rounded-full bg-[#F25733]/10 text-[#F25733] text-[11px] font-semibold px-3 py-1 border border-[#F25733]/30">
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
          <button className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#F25733] hover:text-[#f47a5a] transition-all">
            <span>Explorar Proyecto</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="text-[10px] font-bold text-[#7A7A7A]">
            {currentIndex + 1} / {project.images.length} vistas
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectCardData[]>(initialProjects);
  const [filter, setFilter] = useState<'Todos' | Category>('Todos');

  const categories: Array<'Todos' | Category> = ['Todos', ...CATEGORY_LABELS];
  const filteredProjects = filter === 'Todos' ? projects : projects.filter((p) => p.category === filter);

  const handleRefresh = (id: string, index: number) => {
    setProjects((prev) =>
      prev.map((proj) => {
        if (proj.id !== id) return proj;
        const nextLoading = [...proj.loadingStates];
        nextLoading[index] = true;
        const updated = { ...proj, loadingStates: nextLoading };
        setTimeout(() => {
          setProjects((inner) =>
            inner.map((pInner) => {
              if (pInner.id !== id) return pInner;
              const cleared = [...pInner.loadingStates];
              cleared[index] = false;
              return { ...pInner, loadingStates: cleared };
            })
          );
        }, 800);
        return updated;
      })
    );
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-col items-center gap-4 text-center bg-white/70 border border-slate-100 rounded-2xl px-6 py-5 shadow-sm">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F25733]">Categorías</p>
          <h2 className="text-2xl font-bold text-[#1f1f1f]">Explora por tipo de proyecto</h2>
          <p className="text-sm text-slate-600">Filtra los proyectos por Diseño, Fabricación o Reparación.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-bold transition-all border flex items-center gap-2 ${filter === cat ? 'bg-[#F25733] text-white border-[#F25733] shadow-lg shadow-[#f25733]/30' : 'bg-white text-[#4b5563] border-slate-200 hover:border-[#F25733] hover:text-[#F25733]'}
              `}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-current"></span>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onRefreshImage={handleRefresh} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
