
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ClientsPage from './pages/ClientsPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DMX110Page from './pages/DMX110Page';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proyectos" element={<ProjectsPage />} />
      <Route path="/clientes" element={<ClientsPage />} />
      <Route path="/servicios" element={<ServicesPage />} />
      <Route path="/nosotros" element={<AboutPage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/productos" element={<DMX110Page />} />
    </Routes>
  );
};

export default App;
