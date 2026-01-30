import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const mainClients = [
  'Codelco (Divisiones Andina, El Teniente, Chuquicamata, Ministro Hales, El Salvador)',
  'Anglo American (Divisiones El Soldado y Los Bronces)',
  'Minera Los Pelambres',
  'Polpaico',
  'Züblin',
  'Delta Ingeniería y Construcción',
  'Salfa Mantenciones',
  'Inser Transfield Services',
  'Maestranza Wilde Ltda.'
];

const projectTypes = [
  'Chutes de descarga y transferencia',
  'Tolvas para minería subterránea y rajo abierto',
  'Equipos SAG y componentes asociados',
  'Estructuras y marcos metálicos para túneles',
  'Estanques, cubas, manifolds y sistemas hidráulicos',
  'Reparación y mantención de bombas, válvulas y reductores',
  'Fabricación de equipos especiales y soluciones a medida'
];

const officeRoles = [
  'Administrador',
  'Jefe de Proyectos',
  'Control de Documentos',
  'Topógrafo',
  'Proyectistas',
  'Asistente Técnico',
  'Dibujantes'
];

const contractItems = [
  'Levantamiento de excepciones PDA',
  'Optimización de diseños industriales',
  'Mejora de chutes, buzones y sistemas de traspaso',
  'Diseño de accesos, barandas de protección y reducción de tiempos de intervención'
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 sm:py-20 bg-[#F9F9F9]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-[#282828] mb-4 pt-16 sm:pt-20">SERCOIN LTDA</h1>
              <div className="w-24 h-1 bg-[#F25733] mx-auto rounded-full"></div>
              <p className="mt-6 text-lg text-[#7A7A7A] max-w-4xl mx-auto">
                Servicios Comerciales e Industriales Limitada (SERCOIN LTDA) es una empresa chilena con amplia experiencia en fabricación, ingeniería, mantención y montajes industriales, orientada a la gran minería, la industria y la construcción.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h3 className="text-2xl font-bold text-[#282828] mb-3">Misión</h3>
                <p className="text-[#555] leading-relaxed">
                  Entregar productos y servicios de excelencia, proporcionando soluciones creativas y efectivas que respondan a las necesidades de la gran minería, la industria y la construcción. Operamos bajo un modelo de gestión de calidad, respaldados por nuestra experiencia, sólidos principios y una cultura organizacional consolidada.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h3 className="text-2xl font-bold text-[#282828] mb-3">Visión</h3>
                <p className="text-[#555] leading-relaxed">
                  Posicionarnos como líderes en la industria de servicios, creando valor sostenible a largo plazo para nuestros colaboradores y aportando activamente al desarrollo de la comunidad.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h3 className="text-2xl font-bold text-[#282828] mb-3">Gestión y Calidad</h3>
                <ul className="space-y-2 text-[#555]">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-[#F25733] rounded-full mt-2"></span>
                    <span>Certificación ISO 9001:2008.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-[#F25733] rounded-full mt-2"></span>
                    <span>Modelo de gestión organizacional implementado.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-[#F25733] rounded-full mt-2"></span>
                    <span>Enfoque en soluciones integrales de producción y mantenibilidad.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h3 className="text-2xl font-bold text-[#282828] mb-3">Contratos de Ingeniería y Optimización</h3>
                <ul className="space-y-2 text-[#555]">
                  {contractItems.map((item) => (
                    <li key={item} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-[#F25733] rounded-full mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                <h3 className="text-2xl font-bold text-[#282828] mb-3">Oficina Técnica e Ingeniería</h3>
                <p className="text-[#555] mb-4">
                  Desde 2010 somos parte del grupo de empresas colaboradoras que presta servicios de ingeniería a Codelco División Andina. Contamos con una oficina técnica en Los Andes con un equipo multidisciplinario.
                </p>
                <ul className="space-y-2 text-[#555]">
                  {officeRoles.map((role) => (
                    <li key={role} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-[#F25733] rounded-full mt-2"></span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#555] mt-4">
                  Utilizamos software especializado para prototipos digitales, validando forma, ajuste y función antes de fabricar, complementando con modelamiento, trayectorias de mineral y memorias de cálculo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;