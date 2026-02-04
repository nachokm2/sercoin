import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import portada1 from '../components/Portada/Foto portada 1.jpg';
import portada2 from '../components/Portada/Foto portada 2.jpg';
import portada3 from '../components/Portada/Foto portada 3.JPG';
import portada4 from '../components/Portada/Foto portada 4.jpg';
import portada5 from '../components/Portada/Foto portada 5.jpg';
import portada6 from '../components/Portada/Foto portada 6.jpg';
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

const Home: React.FC = () => {
  const backgrounds = [portada1, portada2, portada3, portada4, portada5, portada6];
  const [bgIndex, setBgIndex] = useState(0);
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [backgrounds.length]);

  const currentBg = backgrounds[bgIndex];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main ref={mainRef} className="flex-grow relative overflow-hidden scroll-smooth snap-y snap-mandatory z-0">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {backgrounds.map((img, idx) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-700 ${idx === bgIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={img}
                alt="Fondo"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ backgroundColor: '#0b1221', imageRendering: 'optimizeQuality' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(5,7,12,0.45) 0%, rgba(5,7,12,0.65) 55%, rgba(5,7,12,0.82) 100%)' }} />
            </div>
          ))}
        </div>

        <section className="snap-start relative z-10">
          <Hero backgroundImage={currentBg} />
        </section>

        <section id="servicios" className="relative py-20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
              <div className="w-24 h-1 bg-[#F25733] mx-auto rounded-full"></div>
              <p className="mt-6 text-slate-100 max-w-2xl mx-auto">
                A través de nuestros servicios buscamos satisfacer las necesidades de nuestros clientes cumpliendo con la Seguridad, Calidad y Plazos de entrega.
              </p>
            </div>
            <Services />
          </div>
        </section>

        <section id="nosotros" className="relative py-20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Nuestra Misión</h2>
              <div className="w-24 h-1 bg-[#F25733] mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-slate-100 leading-relaxed">
                Entregar a nuestros clientes productos y servicios de excelencia, dando soluciones creativas y efectivas que respondan ante las necesidades de la gran minería, la industria y la construcción. Que aporten dentro de un marco de gestión de calidad al éxito de cada uno de los proyectos que emprendan con nosotros. Todo esto basado en una larga trayectoria, sólidos principios y cultura organizacional.
              </p>
            </div>
          </div>
        </section>

        <section id="clientes" className="relative py-20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Nuestros Clientes</h2>
              <div className="w-24 h-1 bg-[#F25733] mx-auto rounded-full"></div>
              <p className="mt-6 text-slate-100 max-w-2xl mx-auto">
                Conozca las alianzas realizadas con grandes marcas del sector industrial.
              </p>
            </div>
            <div className="relative overflow-hidden -mx-4 sm:-mx-6 md:-mx-10 px-4 sm:px-6 md:px-10 py-4">
              <div className="flex animate-slide space-x-12">
                {/* Repetir los logos para el efecto continuo */}
                <img src={logoAntofagasta} alt="Antofagasta Minerals" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoBarric} alt="Barric" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoCollahuasi} alt="Collahuasi" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoMantos} alt="Mantos de Luna" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoMetso} alt="Metso" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoCodelco} alt="Codelco" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoSandvik} alt="Sandvik" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoTeck} alt="Teck" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoUltraMar} alt="Ultra Mar" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoVeladero} alt="Veladero" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoZublin} alt="Zublin" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                {/* Repetir para el efecto continuo */}
                <img src={logoAntofagasta} alt="Antofagasta Minerals" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoBarric} alt="Barric" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoCollahuasi} alt="Collahuasi" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoMantos} alt="Mantos de Luna" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoMetso} alt="Metso" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoCodelco} alt="Codelco" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoSandvik} alt="Sandvik" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoTeck} alt="Teck" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoUltraMar} alt="Ultra Mar" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoVeladero} alt="Veladero" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
                <img src={logoZublin} alt="Zublin" className="h-16 w-auto opacity-90 hover:opacity-100 transition-all flex-shrink-0 filter brightness-0 invert hover:invert-0 hover:brightness-100" />
              </div>
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

export default Home;
