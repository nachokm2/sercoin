
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold text-[#282828] mb-6">Hablemos de su <span className="text-[#F25733]">Próximo Proyecto</span></h2>
        <p className="text-[#7A7A7A] text-lg mb-10 leading-relaxed">
          Nuestros expertos están listos para asesorarle en soluciones de ingeniería industrial personalizadas. Complete el formulario y responderemos en menos de 24 horas.
        </p>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#F25733]/10 text-[#F25733] rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-[#282828]">Ubicación</div>
              <div className="text-[#7A7A7A]">Panamericana Norte km 117, Comuna de Nogales, Región de Valparaíso</div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#F25733]/10 text-[#F25733] rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-[#282828]">Correo Electrónico</div>
              <div className="text-[#7A7A7A]">contacto@sercoin-ltda.cl</div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#F25733]/10 text-[#F25733] rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-[#282828]">Teléfono</div>
              <div className="text-[#7A7A7A]">+56 9 8419 7798</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] p-10 rounded-3xl shadow-xl border border-slate-200">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-[#282828] mb-2">Nombre Completo</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#F25733] focus:border-transparent outline-none transition-all" placeholder="Juan Pérez" />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#282828] mb-2">Correo Corporativo</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#F25733] focus:border-transparent outline-none transition-all" placeholder="juan@empresa.cl" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-[#282828] mb-2">Servicio de Interés</label>
            <select className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#F25733] focus:border-transparent outline-none transition-all bg-white">
              <option>Mantención Industrial</option>
              <option>Obras Civiles</option>
              <option>Estructuras Metálicas</option>
              <option>Pintura Especializada</option>
              <option>Otro</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-[#282828] mb-2">Mensaje</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#F25733] focus:border-transparent outline-none transition-all" placeholder="Cuéntenos sobre sus requerimientos técnicos..."></textarea>
          </div>
          <button className="w-full bg-[#F25733] hover:bg-[#F06E4E] text-white font-black py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-95">
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
