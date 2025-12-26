import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section id="servicios" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#282828] mb-4">Nuestros Servicios</h2>
              <div className="w-24 h-1 bg-[#F25733] mx-auto rounded-full"></div>
              <p className="mt-6 text-[#7A7A7A] max-w-2xl mx-auto">
                Soluciones integrales de ingeniería y mantenimiento con los más altos estándares de seguridad y calidad en Chile.
              </p>
            </div>
            <Services />
          </div>
        </section>

        <section id="nosotros" className="py-20 bg-[#F9F9F9]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#282828] mb-4">Nuestra Misión</h2>
              <div className="w-24 h-1 bg-[#F25733] mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-[#7A7A7A] leading-relaxed">
                Proveer soluciones integrales para la industria minera mediante la fabricación y reparación de sistemas de traspaso de mineral y maquinaria, utilizando tecnología avanzada y un enfoque en la calidad y precisión, para asegurar la máxima eficiencia y satisfacción de nuestros clientes.
              </p>
            </div>
          </div>
        </section>

        <section id="clientes" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#282828] mb-4">Nuestros Clientes</h2>
              <div className="w-24 h-1 bg-[#F25733] mx-auto rounded-full"></div>
              <p className="mt-6 text-[#7A7A7A] max-w-2xl mx-auto">
                Conozca las alianzas realizadas con grandes marcas del sector industrial.
              </p>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex animate-slide space-x-12">
                {/* Repetir los logos para el efecto continuo */}
                <img src="/components/antofagasta minerals.png" alt="Antofagasta Minerals" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/barric.png" alt="Barric" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/collahuasi.png" alt="Collahuasi" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/Mantos de luna.png" alt="Mantos de Luna" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/metso.png" alt="Metso" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/russell.jpg" alt="Russell" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/sandvik.png" alt="Sandvik" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/teck.png" alt="Teck" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/ultra mar.png" alt="Ultra Mar" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/veladero.png" alt="Veladero" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/Zublin.png" alt="Zublin" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                {/* Repetir para el efecto continuo */}
                <img src="/components/antofagasta minerals.png" alt="Antofagasta Minerals" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/barric.png" alt="Barric" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/collahuasi.png" alt="Collahuasi" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/Mantos de luna.png" alt="Mantos de Luna" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/metso.png" alt="Metso" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/russell.jpg" alt="Russell" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/sandvik.png" alt="Sandvik" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/teck.png" alt="Teck" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/ultra mar.png" alt="Ultra Mar" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/veladero.png" alt="Veladero" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
                <img src="/components/Zublin.png" alt="Zublin" className="h-16 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;