import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logoAntofagasta from '../components/antofagasta minerals.png';
import logoBarric from '../components/barric.png';
import logoCollahuasi from '../components/collahuasi.png';
import logoMantos from '../components/Mantos de luna.png';
import logoMetso from '../components/metso.png';
import logoCodelco from '../components/codelco.png';
import logoSandvik from '../components/sandvik.png';
import logoTeck from '../components/teck.png';
import logoUltraMar from '../components/ultra mar.png';
import logoVeladero from '../components/veladero.png';
import logoZublin from '../components/Zublin.png';

const ClientsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[#282828] mb-4 pt-16 sm:pt-20">Nuestros Clientes</h1>
              <div className="w-24 h-1 bg-[#F25733] mx-auto rounded-full"></div>
              <p className="mt-6 text-[#7A7A7A] max-w-2xl mx-auto">
                Conozca las alianzas realizadas con grandes marcas del sector industrial que confían en nuestra experiencia y calidad.
              </p>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex animate-slide space-x-12">
                {/* Repetir los logos para el efecto continuo */}
                <img src={logoAntofagasta} alt="Antofagasta Minerals" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoBarric} alt="Barric" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoCollahuasi} alt="Collahuasi" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoMantos} alt="Mantos de Luna" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoMetso} alt="Metso" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoCodelco} alt="Codelco" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoSandvik} alt="Sandvik" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoTeck} alt="Teck" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoUltraMar} alt="Ultra Mar" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoVeladero} alt="Veladero" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoZublin} alt="Zublin" className="h-20 w-auto transition-all flex-shrink-0" />
                {/* Repetir para el efecto continuo */}
                <img src={logoAntofagasta} alt="Antofagasta Minerals" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoBarric} alt="Barric" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoCollahuasi} alt="Collahuasi" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoMantos} alt="Mantos de Luna" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoMetso} alt="Metso" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoCodelco} alt="Codelco" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoSandvik} alt="Sandvik" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoTeck} alt="Teck" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoUltraMar} alt="Ultra Mar" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoVeladero} alt="Veladero" className="h-20 w-auto transition-all flex-shrink-0" />
                <img src={logoZublin} alt="Zublin" className="h-20 w-auto transition-all flex-shrink-0" />
              </div>
            </div>
            <div className="mt-16 text-center">
              <p className="text-lg text-[#7A7A7A] max-w-4xl mx-auto">
                Trabajamos con las principales empresas del sector minero, industrial y portuario de Chile, proporcionando soluciones de alta calidad que cumplen con los estándares más exigentes de la industria.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
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

export default ClientsPage;