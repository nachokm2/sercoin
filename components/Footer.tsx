
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#282828] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
             <div className="flex items-center space-x-2">
              <img src="/components/logo-02.webp" alt="Sercoin Ltda Logo" className="h-8 w-auto" />
              <span className="text-xl font-black tracking-tight">SERCOIN <span className="text-[#F25733]">LTDA</span></span>
            </div>
            <p className="text-[#7A7A7A] leading-relaxed">
              Líderes en soluciones industriales para la minería, energía y construcción en todo el territorio nacional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F25733] transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F25733] transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
            <div className="mt-6 space-y-2">
              <a href="tel:+56984197798" className="inline-block text-white hover:text-[#F06E4E] hover:underline px-4 py-2 text-sm font-medium transition-colors">
                📞 +56 9 8419 7798
              </a>
              <br />
              <a href="tel:+56984195977" className="inline-block text-white hover:text-[#F06E4E] hover:underline px-4 py-2 text-sm font-medium transition-colors">
                📞 +56 9 8419 5977
              </a>
              <br />
              <a href="mailto:contacto@sercoin-ltda.cl" className="inline-block text-white hover:text-[#F06E4E] hover:underline px-4 py-2 text-sm font-medium transition-colors">
                ✉️ contacto@sercoin-ltda.cl
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-[#7A7A7A]">
              <li><a href="#" className="hover:text-[#F06E4E] transition-colors">Mantención Industrial</a></li>
              <li><a href="#" className="hover:text-[#F06E4E] transition-colors">Obras Civiles</a></li>
              <li><a href="#" className="hover:text-[#F06E4E] transition-colors">Estructuras Metálicas</a></li>
              <li><a href="#" className="hover:text-[#F06E4E] transition-colors">Montajes Eléctricos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-[#7A7A7A]">
              <li><Link to="/nosotros" className="hover:text-[#F06E4E] transition-colors">Nosotros</Link></li>
              <li><Link to="/clientes" className="hover:text-[#F06E4E] transition-colors">Clientes</Link></li>
              <li><Link to="/proyectos" className="hover:text-[#F06E4E] transition-colors">Proyectos</Link></li>
              <li><a href="#" className="hover:text-[#F06E4E] transition-colors">Seguridad y Calidad</a></li>
              <li><a href="#" className="hover:text-[#F06E4E] transition-colors">Noticias</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-[#7A7A7A] mb-4 text-sm">Reciba actualizaciones sobre nuestros proyectos y avances tecnológicos.</p>
            <div className="flex">
              <input type="email" placeholder="email@empresa.cl" className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full outline-none focus:border-[#F25733] transition-colors" />
              <button className="bg-[#F25733] hover:bg-[#F06E4E] px-4 py-2 rounded-r-lg font-bold">Unirse</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-[#7A7A7A] text-sm">
          <p>© {new Date().getFullYear()} Sercoin Ltda. Todos los derechos reservados. Diseñado para la excelencia industrial.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
