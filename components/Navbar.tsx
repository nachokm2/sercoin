
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo-02.webp';

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
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Productos', href: '/productos' },
    { name: 'Clientes', href: '/clientes' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${shouldShowScrolledStyle ? 'bg-slate-900/85 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-2 sm:px-4 flex justify-between items-center min-h-[64px]">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img src={logo} alt="Sercoin Ltda Logo" className="h-14 sm:h-16 w-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.35)]" />
          <span className="text-xl sm:text-2xl font-black tracking-tight text-[#F25733]">SERCOIN LTDA</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="font-medium transition-colors text-white hover:text-[#F06E4E]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="bg-[#F25733] hover:bg-[#F06E4E] text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-md"
          >
            Contáctenos
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white ml-4"
          style={{ padding: '8px' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="md:hidden bg-slate-900/90 backdrop-blur-md absolute top-full left-0 w-full shadow-xl border-t border-white/10 p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-white font-semibold text-lg py-2 hover:text-[#F06E4E]"
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
