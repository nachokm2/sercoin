import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[#282828] mb-4 pt-16 sm:pt-20">Nuestros Servicios</h1>
              <div className="w-24 h-1 bg-[#F25733] mx-auto rounded-full"></div>
              <p className="mt-6 text-[#7A7A7A] max-w-2xl mx-auto">
                Soluciones integrales de ingeniería y mantenimiento con los más altos estándares de seguridad y calidad en Chile.
              </p>
            </div>

            <Services variant="dark" />
            <div className="mt-16 text-center">
              <p className="text-lg text-[#7A7A7A] max-w-4xl mx-auto">
                Nuestro equipo de profesionales altamente capacitados utiliza tecnología de vanguardia y metodologías probadas para garantizar resultados excepcionales en cada proyecto.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;