
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldShowScrolledStyle = isScrolled || location.pathname !== '/';

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Clientes', href: '/clientes' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${shouldShowScrolledStyle ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/components/logo-02.webp" alt="Sercoin Ltda Logo" className="h-10 w-auto" />
          <span className={`text-2xl font-black tracking-tight ${shouldShowScrolledStyle ? 'text-[#282828]' : 'text-white'}`}>SERCOIN <span className="text-[#F25733]">LTDA</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-medium transition-colors hover:text-[#F06E4E] ${shouldShowScrolledStyle ? 'text-[#7A7A7A]' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="bg-[#F25733] hover:bg-[#F06E4E] text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-md"
          >
            Cotizar Proyecto
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#282828]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className={`w-8 h-8 ${shouldShowScrolledStyle ? 'text-[#282828]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-slate-100 p-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[#7A7A7A] font-semibold text-lg py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
