import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-[#F9F9F9]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#282828] mb-4">Sobre Sercoin Ltda</h2>
              <div className="w-24 h-1 bg-[#F25733] mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-bold text-[#282828] mb-4">Nuestra Misión</h3>
                  <p className="text-lg text-[#7A7A7A] leading-relaxed mb-6">
                    Proveer soluciones integrales para la industria minera mediante la fabricación y reparación de sistemas de traspaso de mineral y maquinaria, utilizando tecnología avanzada y un enfoque en la calidad y precisión, para asegurar la máxima eficiencia y satisfacción de nuestros clientes.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#282828] mb-4">Nuestra Visión</h3>
                  <p className="text-lg text-[#7A7A7A] leading-relaxed mb-6">
                    Ser la empresa líder en soluciones de ingeniería industrial en Chile, reconocida por nuestra excelencia técnica, innovación y compromiso con la sostenibilidad.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#282828] mb-4">Nuestros Valores</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-bold text-[#F25733] mb-2">Calidad</h4>
                    <p className="text-[#7A7A7A]">Compromiso con los más altos estándares en cada proyecto.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-bold text-[#F25733] mb-2">Seguridad</h4>
                    <p className="text-[#7A7A7A]">Prioridad absoluta en la seguridad de nuestros trabajadores y clientes.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="text-xl font-bold text-[#F25733] mb-2">Innovación</h4>
                    <p className="text-[#7A7A7A]">Uso de tecnología avanzada para soluciones eficientes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default AboutPage;