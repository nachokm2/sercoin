import React, { useState, useEffect, useCallback } from 'react';
import { CATEGORY_LABELS, initialProjects, Category, ProjectCardData } from './projectsData';

type CardProps = {
  project: ProjectCardData;
  onRefreshImage: (id: string, index: number) => void;
};

const ProjectCard: React.FC<CardProps> = ({ project, onRefreshImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const descriptionId = `project-desc-${project.id}`;

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
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <div className="h-full w-full">
          {currentLoading ? (
            <div className="flex h-full w-full flex-col items-center justify-center space-y-3 bg-[#0B1221]/70 backdrop-blur-sm">
              <div className="relative h-12 w-12">
                <div className="absolute inset-0 animate-ping rounded-full bg-[#F25733]/20"></div>
                <div className="relative h-full w-full animate-spin rounded-full border-4 border-[#F25733] border-t-transparent"></div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F25733]/80">
                Procesando vista {currentIndex + 1}
              </p>
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
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            aria-label="Vista anterior"
            className="h-10 w-10 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all active:scale-90"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            aria-label="Vista siguiente"
            className="h-10 w-10 flex items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all active:scale-90"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRefreshImage(project.id, currentIndex);
          }}
          disabled={currentLoading}
          aria-label={`Regenerar vista ${currentIndex + 1} de ${project.title}`}
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
              type="button"
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              aria-label={`Ver vista ${idx + 1} de ${project.images.length}`}
              aria-current={currentIndex === idx ? 'true' : undefined}
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
        <div
          id={descriptionId}
          className={`overflow-hidden transition-[max-height] duration-400 ${showDescription ? 'max-h-36' : 'max-h-0'}`}
        >
          <p className="text-sm leading-relaxed text-[#555]">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.values.map((value) => (
              <span
                key={value}
                className="rounded-full bg-[#F25733]/10 text-[#F25733] text-[11px] font-semibold px-3 py-1 border border-[#F25733]/30"
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowDescription((prev) => !prev);
            }}
            aria-expanded={showDescription}
            aria-controls={descriptionId}
            className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#F25733] hover:text-[#f47a5a] transition-all"
          >
            <span>Explorar proyecto</span>
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
          <h2 className="text-2xl font-bold text-[#1f1f1f]">Proyectos en los que hemos trabajado</h2>
          <p className="text-sm text-slate-600">
            Explora nuestro portafolio y filtra por Diseño, Fabricación o Reparación para conocer cada proyecto a través de su
            galería de imágenes.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full font-bold transition-all border flex items-center gap-2 ${filter === cat ? 'bg-[#F25733] text-white border-[#F25733] shadow-lg shadow-[#f25733]/30' : 'bg-white text-[#4b5563] border-slate-200 hover:border-[#F25733] hover:text-[#F25733]'}`}
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
