
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold text-[#282828] mb-6">Hablemos de su <span className="text-[#F25733]">Próximo Proyecto</span></h2>
        <p className="text-[#7A7A7A] text-lg mb-10 leading-relaxed">
          Nuestros expertos están listos para asesorarle en soluciones de ingeniería industrial personalizadas. Complete el formulario y responderemos en menos de 24 horas.
        </p>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#F25733]/10 text-[#F25733] rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-[#282828]">Correos</div>
              <div className="text-[#7A7A7A] flex flex-col space-y-1">
                <a className="text-[#F25733] font-bold" href="mailto:contacto@sercoin-ltda.cl">contacto@sercoin-ltda.cl</a>
                <a className="text-[#F25733] font-bold" href="mailto:jrodriguez@sercoin-ltda.cl">jrodriguez@sercoin-ltda.cl</a>
                <a className="text-[#F25733] font-bold" href="mailto:mrodriguez@sercoin-ltda.cl">mrodriguez@sercoin-ltda.cl</a>
              </div>
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
              <div className="flex flex-col space-y-1 text-[#F25733] font-bold">
                <a href="tel:+56984195977">+56 9 8419 5977</a>
                <a href="tel:+56984197789">+56 9 8419 7789</a>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#F25733]/10 text-[#F25733] rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-[#282828]">Sitio</div>
              <a className="text-[#F25733] font-bold" href="http://www.sercoin-ltda.cl" target="_blank" rel="noreferrer">www.sercoin-ltda.cl</a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#F25733]/10 text-[#F25733] rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12 17.657 7.757 16.243 6.343 12 10.586 7.757 6.343 6.343 7.757 10.586 12 6.343 16.243 7.757 17.657 12 13.414 16.243 17.657z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-[#282828]">Ubicación</div>
              <a
                className="text-[#F25733] font-bold break-words"
                href="https://www.google.com/maps/place/32%C2%B042'57.9%22S+71%C2%B012'16.3%22W/@-32.716073,-71.204514,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-32.716073!4d-71.204514?entry=ttu"
                target="_blank"
                rel="noreferrer"
              >
                Ver ubicación en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] p-4 sm:p-8 lg:p-10 rounded-3xl shadow-xl border border-slate-200 w-full">
        <form className="space-y-4 sm:space-y-6" action="https://formspree.io/f/mdaogalv" method="POST">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-bold text-[#282828] mb-2">Nombre Completo</label>
              <input name="nombre" type="text" className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#F25733] focus:border-transparent outline-none transition-all" placeholder="Juan Pérez" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-[#282828] mb-2">Correo Corporativo</label>
              <input name="correo" type="email" className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#F25733] focus:border-transparent outline-none transition-all" placeholder="juan@empresa.cl" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-[#282828] mb-2">Servicio de Interés</label>
            <select name="servicio" className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#F25733] focus:border-transparent outline-none transition-all bg-white" required>
              <option value="Mantención Industrial">Mantención Industrial</option>
              <option value="Obras Civiles">Obras Civiles</option>
              <option value="Estructuras Metálicas">Estructuras Metálicas</option>
              <option value="Pintura Especializada">Pintura Especializada</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-[#282828] mb-2">Mensaje</label>
            <textarea name="mensaje" rows={4} className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#F25733] focus:border-transparent outline-none transition-all" placeholder="Cuéntenos sobre sus requerimientos técnicos..." required></textarea>
          </div>
          <button className="w-full bg-[#F25733] hover:bg-[#F06E4E] text-white font-black py-3 sm:py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 active:scale-95">
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
