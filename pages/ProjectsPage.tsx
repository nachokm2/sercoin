import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-[#F9F9F9]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[#282828] mb-4 pt-16 sm:pt-20">Experiencia y Proyectos Destacados</h1>
              <div className="w-24 h-1 bg-[#F25733] mx-auto rounded-full"></div>
              <p className="mt-6 text-[#7A7A7A] max-w-3xl mx-auto">
                Soluciones de alto impacto para compañías mineras e industriales.
              </p>
            </div>

            <div className="mt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#282828] mb-3">Servicios clave aplicados en cada proyecto</h2>
                <p className="text-[#7A7A7A] max-w-3xl mx-auto">
                  Los mismos desarrollos, fabricación y reparaciones que ves en nuestros servicios son la base de los proyectos entregados.
                </p>
              </div>
              <Services variant="dark" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mt-12">
              <div>
                <h3 className="text-2xl font-bold text-[#282828] mb-3">Principales Clientes</h3>
                <ul className="space-y-2 text-[#555]">
                  {["Codelco (Divisiones Andina, El Teniente, Chuquicamata, Ministro Hales, El Salvador)",
                    "Anglo American (Divisiones El Soldado y Los Bronces)",
                    "Minera Los Pelambres",
                    "Polpaico",
                    "Züblin",
                    "Delta Ingeniería y Construcción",
                    "Salfa Mantenciones",
                    "Inser Transfield Services",
                    "Maestranza Wilde Ltda."].map(item => (
                      <li key={item} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-[#F25733] rounded-full mt-2"></span>
                        <span>{item}</span>
                      </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#282828] mb-3">Tipos de Proyectos Ejecutados</h3>
                <ul className="space-y-2 text-[#555]">
                  {["Chutes de descarga y transferencia",
                    "Tolvas para minería subterránea y rajo abierto",
                    "Equipos SAG y componentes asociados",
                    "Estructuras y marcos metálicos para túneles",
                    "Estanques, cubas, manifolds y sistemas hidráulicos",
                    "Reparación y mantención de bombas, válvulas y reductores",
                    "Fabricación de equipos especiales y soluciones a medida"].map(item => (
                      <li key={item} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-[#F25733] rounded-full mt-2"></span>
                        <span>{item}</span>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;