
import React, { useState } from 'react';

const projects = [
  {
    title: 'Galpón Logístico Quilicura',
    category: 'Estructuras',
    description: 'Construcción de galpón industrial de 5.000 m² con estructuras metálicas de alta resistencia para operaciones logísticas eficientes.',
    img: '/components/Galpon logistico quilicura.jpg'
  },
  {
    title: 'Mantención Planta Química',
    category: 'Mantenimiento',
    description: 'Mantenimiento integral de equipos críticos en planta química, incluyendo reparación de bombas y sistemas de control automatizados.',
    img: '/components/Matención planta quimica.jpg'
  },
  {
    title: 'Montaje de Silos Minería',
    category: 'Montajes',
    description: 'Instalación especializada de silos de mineral con capacidad de 500 toneladas, optimizando el flujo de producción minera.',
    img: '/components/Montaje de silos de mineria.jpg'
  },
  {
    title: 'Pavimento Industrial Puerto',
    category: 'Obras Civiles',
    description: 'Construcción de pavimento industrial reforzado para zona portuaria, soportando cargas pesadas y condiciones climáticas extremas.',
    img: '/components/Pavimento industrial.jpg'
  },
  {
    title: 'Refuerzo Estructural Torre',
    category: 'Estructuras',
    description: 'Refuerzo estructural de torre industrial con técnicas avanzadas de soldadura y materiales de alta resistencia.',
    img: '/components/Refuerzo estructural de torre.jpg'
  },
  {
    title: 'Pintura Estanques Combustible',
    category: 'Recubrimientos',
    description: 'Aplicación de recubrimientos anticorrosivos especializados en estanques de combustible, garantizando durabilidad y seguridad.',
    img: '/components/Pintura estanque de combustible.jpg'
  }
];


const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const categories = ['Todos', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'Todos' ? projects : projects.filter(p => p.category === filter);

  const handleImageClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-bold transition-all ${filter === cat ? 'bg-[#F25733] text-white shadow-lg' : 'bg-white text-[#7A7A7A] hover:bg-slate-100 border border-slate-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer" onClick={() => handleImageClick(project)}>
            <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 p-8 transform transition-transform group-hover:-translate-y-2">
              <span className="inline-block px-3 py-1 bg-[#F25733] text-white text-xs font-bold rounded-md mb-2 uppercase tracking-widest">{project.category}</span>
              <h4 className="text-xl font-bold text-white leading-tight mb-2">{project.title}</h4>
            </div>
            <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-12 relative animate-fade-in">
            <button onClick={closeModal} className="absolute top-6 right-8 text-gray-500 hover:text-gray-800 text-3xl font-bold">&times;</button>
            <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-72 object-cover rounded-xl mb-6" />
            <h3 className="text-4xl font-extrabold mb-4 text-[#F25733]">{selectedProject.title}</h3>
            <span className="inline-block mb-4 px-4 py-2 bg-[#F25733] text-white text-base font-bold rounded-md uppercase tracking-widest">{selectedProject.category}</span>
            <p className="text-gray-700 mt-4 text-lg">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
