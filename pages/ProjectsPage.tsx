import React from 'react';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-[#F9F9F9]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#282828] mb-4">Proyectos Destacados</h2>
              <div className="w-24 h-1 bg-[#F25733] mx-auto rounded-full"></div>
              <p className="mt-6 text-[#7A7A7A] max-w-2xl mx-auto">
                Descubra nuestros proyectos más destacados en ingeniería industrial y mantenimiento especializado.
              </p>
            </div>
            <Projects />
          </div>
        </section>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default ProjectsPage;