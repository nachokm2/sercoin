import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import dmxTechSheet from '../components/Deemex Presentation 2019 A4 ESP.pdf';
import dmxImage from '../components/DMX 110.png';
import dmx105 from '../components/DMX 105.png';

const DMX110Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="pt-28 pb-16 sm:pb-24 bg-gradient-to-b from-white via-white to-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="max-w-3xl">
                <p className="text-[#F25733] font-black uppercase tracking-[0.12em] text-xs sm:text-sm mb-3">Planchas antidesgaste DMX 110</p>
                <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-4">
                  Maximice la Vida Útil de su Maquinaria con Planchas Antidesgaste DMX 110
                </h1>
                <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mb-8">
                  La solución definitiva contra la abrasión severa y la erosión. Tecnología de matriz de carburo de cromo de alta densidad para la industria pesada.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href={dmxTechSheet}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F25733] hover:bg-[#F06E4E] text-white px-6 sm:px-8 py-3 rounded-lg font-bold shadow-lg transition-all hover:-translate-y-1"
                  >
                    Descargar Ficha Técnica
                  </a>
                  <a
                    href="mailto:contacto@sercoin-ltda.cl?subject=Cotizaci%C3%B3n%20DMX%20110"
                    className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 px-6 sm:px-8 py-3 rounded-lg font-bold transition-all"
                  >
                    Cotizar Ahora
                  </a>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={dmxImage}
                  alt="Planchas antidesgaste DMX 110"
                  className="w-full max-w-xl rounded-2xl shadow-xl border border-slate-200"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-14 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">Visión del Producto</h2>
              <span className="text-sm text-slate-500">Referencias visuales DMX</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl border border-slate-200 shadow-md bg-white">
                <img
                  src={dmxImage}
                  alt="Detalle de placa antidesgaste DMX 110"
                  className="w-full h-64 object-contain rounded-lg"
                />
                <p className="text-sm text-slate-600 mt-3">Placa DMX 110: matriz de carburo de cromo de alta densidad para abrasión severa.</p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 shadow-md bg-white">
                <img
                  src={dmx105}
                  alt="Aplicación de placa DMX"
                  className="w-full h-64 object-contain rounded-lg"
                />
                <p className="text-sm text-slate-600 mt-3">Placa DMX en aplicación industrial, destacando su versatilidad y facilidad de montaje.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Introducción al Producto</h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Las planchas DMX 110 de DEEMEX representan la excelencia en protección contra el desgaste. Fabricadas mediante un proceso de soldadura que crea una matriz de carburo de cromo ultra resistente, estas planchas están diseñadas para soportar las condiciones más hostiles.
              </p>
              <p className="text-slate-700 leading-relaxed">
                A diferencia del acero estándar, la serie DMX ofrece una resistencia excepcional a la abrasión y erosión, manteniendo un rendimiento óptimo incluso a temperaturas de hasta 350°C. Es la solución económica más inteligente para entornos de abrasión severa.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-3">Puntos clave</h3>
              <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                <li className="flex items-start"><span className="w-2 h-2 mt-2 bg-[#F25733] rounded-full mr-3"></span>Protección superior contra abrasión y erosión.</li>
                <li className="flex items-start"><span className="w-2 h-2 mt-2 bg-[#F25733] rounded-full mr-3"></span>Desempeño estable hasta 350°C.</li>
                <li className="flex items-start"><span className="w-2 h-2 mt-2 bg-[#F25733] rounded-full mr-3"></span>Proceso bimetálico con matriz densa de carburo de cromo.</li>
                <li className="flex items-start"><span className="w-2 h-2 mt-2 bg-[#F25733] rounded-full mr-3"></span>Configuraciones personalizables según su operación.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Specs */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold">Características Técnicas Destacadas</h2>
              <span className="text-sm text-[#F25733] font-bold uppercase tracking-[0.08em]">Datos para ingeniería</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-md">
                <p className="text-sm text-[#F25733] font-bold mb-2">Dureza Extrema</p>
                <p className="text-lg font-semibold">60-64 HRC / 601-668 HB</p>
                <p className="text-slate-700 text-sm mt-2">Rockwell C y Brinell para máxima resistencia al desgaste.</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-md">
                <p className="text-sm text-[#F25733] font-bold mb-2">Composición Química</p>
                <p className="text-slate-700 text-sm">Cromo 30-40%, Carbono 4-6%, reforzado con Boro y Manganeso.</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-md">
                <p className="text-sm text-[#F25733] font-bold mb-2">Espesores</p>
                <p className="text-slate-700 text-sm">Configuraciones base+revestimiento: 6+4, 8+5, 10+5 y hasta 35 mm totales.</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-md">
                <p className="text-sm text-[#F25733] font-bold mb-2">Resistencia Térmica</p>
                <p className="text-slate-700 text-sm">Operatividad garantizada hasta 350°C en ambientes severos.</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-md">
                <p className="text-sm text-[#F25733] font-bold mb-2">Versatilidad de Corte</p>
                <p className="text-slate-700 text-sm">Compatible con plasma, chorro de agua y láser.</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-md">
                <p className="text-sm text-[#F25733] font-bold mb-2">Tecnología Bimetálica</p>
                <p className="text-slate-700 text-sm">Planchas compuestas de 3+3 mm; capacidad única del 5% de productores mundiales.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ventajas Competitivas</h2>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start"><span className="w-2 h-2 mt-2 bg-[#F25733] rounded-full mr-3"></span>Reducción de costos: minimiza mantenimientos y reparaciones frecuentes.</li>
                <li className="flex items-start"><span className="w-2 h-2 mt-2 bg-[#F25733] rounded-full mr-3"></span>Mayor tiempo operativo: amplía los intervalos entre paradas de producción.</li>
                <li className="flex items-start"><span className="w-2 h-2 mt-2 bg-[#F25733] rounded-full mr-3"></span>Tecnología bimetálica: espesor 3+3 mm para aplicaciones de alto impacto y abrasión.</li>
                <li className="flex items-start"><span className="w-2 h-2 mt-2 bg-[#F25733] rounded-full mr-3"></span>Flexibilidad: permite conformado y doblado con precauciones específicas para geometrías curvas.</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Comparativa de Rendimiento</h3>
              <p className="text-slate-700 text-sm sm:text-base">
                En pruebas comparativas de vida útil, la DMX 110 supera ampliamente al acero dulce y a las placas de 400 BHN. Mientras otros materiales ceden ante la abrasión, DMX 110 mantiene su integridad estructural por más tiempo.
              </p>
              <div className="mt-6 p-4 rounded-xl bg-slate-100 border border-slate-200 text-center text-slate-600 text-sm">
                <p>Gráfico comparativo recomendado (vida útil vs. materiales: acero dulce, 400 BHN, DMX 110).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Aplicaciones e Industrias</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Minería: baldes, tolvas y chutes',
                'Movimiento de tierras: hojas y blindaje de maquinaria',
                'Industria del cemento y vidrio',
                'Plantas de energía y reciclaje',
                'Acerías',
                'Equipos expuestos a abrasión severa'
              ].map((item) => (
                <div key={item} className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-sm flex">
                  <span className="w-2 h-2 mt-2 bg-[#F25733] rounded-full mr-3 flex-shrink-0"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 sm:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Calidad Certificada</h2>
            <p className="text-slate-700 mb-6">Fabricado bajo estrictos estándares internacionales por ELKAT S.A.:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['ISO 9001:2015 (Calidad)', 'ISO 14001:2015 (Medio Ambiente)', 'OHSAS 18001:2007 (Seguridad)'].map((cert) => (
                <div key={cert} className="p-4 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm flex items-center">
                  <span className="w-2 h-2 bg-[#F25733] rounded-full mr-3"></span>
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-white to-slate-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">No deje que el desgaste detenga su operación.</h2>
            <p className="text-slate-700 max-w-2xl mx-auto mb-8">
              Coordine con nuestro equipo para seleccionar la configuración DMX 110 adecuada y maximizar el retorno de su inversión.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:contacto@sercoin-ltda.cl?subject=Cotizaci%C3%B3n%20DMX%20110"
                className="bg-[#F25733] hover:bg-[#F06E4E] text-white px-6 sm:px-8 py-3 rounded-lg font-bold shadow-lg transition-all hover:-translate-y-1"
              >
                Cotizar Ahora
              </a>
              <a
                href={dmxTechSheet}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 px-6 sm:px-8 py-3 rounded-lg font-bold transition-all"
              >
                Descargar Ficha Técnica
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DMX110Page;
