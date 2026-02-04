
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-02.webp';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#282828] text-white pt-20 pb-10">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Sercoin Ltda Logo" className="h-12 w-auto" />
              <span className="text-2xl font-black tracking-tight">
                <span className="text-[#F25733]">SERCOIN</span> <span className="text-[#F25733]">LTDA</span>
              </span>
            </div>
            <p className="text-[#7A7A7A] leading-relaxed">
              Líderes en soluciones industriales para la minería, energía y construcción en todo el territorio nacional.
            </p>
            <div className="mt-6 space-y-2">
              <a href="mailto:contacto@sercoin-ltda.cl" className="inline-block text-white hover:text-[#F06E4E] hover:underline px-4 py-2 text-base font-semibold transition-colors">
                ✉️ contacto@sercoin-ltda.cl
              </a>
              <br />
              <a href="mailto:jrodriguez@sercoin-ltda.cl" className="inline-block text-white hover:text-[#F06E4E] hover:underline px-4 py-2 text-base font-semibold transition-colors">
                ✉️ jrodriguez@sercoin-ltda.cl
              </a>
              <br />
              <a href="mailto:mrodriguez@sercoin-ltda.cl" className="inline-block text-white hover:text-[#F06E4E] hover:underline px-4 py-2 text-base font-semibold transition-colors">
                ✉️ mrodriguez@sercoin-ltda.cl
              </a>
              <br />
              <a href="tel:+56984195977" className="inline-block text-white hover:text-[#F06E4E] hover:underline px-4 py-2 text-base font-semibold transition-colors">
                📞 +56 9 8419 5977
              </a>
              <br />
              <a href="tel:+56984197789" className="inline-block text-white hover:text-[#F06E4E] hover:underline px-4 py-2 text-base font-semibold transition-colors">
                📞 +56 9 8419 7789
              </a>
              <br />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Ubicación</h4>
            <p className="text-[#7A7A7A] mb-4 text-sm">Panamericana Norte Km 117, Nogales, Región de Valparaíso</p>
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-inner">
              <iframe
                title="Ubicación Sercoin Ltda."
                src="https://www.google.com/maps?q=-32.716073,-71.204514&z=17&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-[#7A7A7A] text-sm space-y-1">
          <p>© {new Date().getFullYear()} Sercoin Ltda. Todos los derechos reservados. Diseñado para la excelencia industrial.</p>
          <p>Desarrollado por Rodrigo Palma (Dev).</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
