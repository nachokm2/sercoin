import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-[#282828] mb-4 pt-16 sm:pt-20">Contáctanos</h1>
              <div className="w-24 h-1 bg-[#F25733] mx-auto rounded-full"></div>
              <p className="mt-6 text-[#7A7A7A] max-w-2xl mx-auto">
                Estamos aquí para ayudarte. Ponte en contacto con nosotros para discutir tus necesidades de ingeniería industrial.
              </p>
            </div>
            <Contact />

            {/* Mapa interactivo */}
            <div className="mt-12 flex justify-center">
              <iframe
                title="Ubicación Sercoin Ltda."
                src="https://www.google.com/maps?output=embed&q=Panamericana%20Norte%20Km%20117%2C%20Nogales%2C%20Regi%C3%B3n%20de%20Valpara%C3%ADso"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '1rem', minWidth: '300px', maxWidth: '900px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;