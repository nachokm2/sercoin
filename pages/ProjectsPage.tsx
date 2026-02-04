import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-[#F9F9F9] pt-28">
          <div className="container mx-auto px-4">
            <Projects />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;