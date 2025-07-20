import React, { useState, useEffect } from "react";


const Layout = () => {
  // Tu lógica de typing effect y demás...
  const fullText = "Ricardo Salazar Galicia";
  const fullText2 = "Desarrollador Frontend";
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState(1);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (phase === 1) {
      if (index < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + fullText[index]);
          setIndex(index + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setPhase(2);
          setIndex(fullText.length);
        }, 800);
      }
    } else if (phase === 2) {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setPhase(3);
          setIndex(0);
        }, 300);
      }
    } else if (phase === 3) {
      if (index < fullText2.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + fullText2[index]);
          setIndex(index + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setPhase(4);
          setIndex(fullText2.length);
        }, 800);
      }
    } else if (phase === 4) {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setPhase(1);
          setIndex(0);
        }, 300);
      }
    }
    return () => clearTimeout(timeout);
  }, [index, phase, fullText, fullText2]);

  return (
    <main>
      <div className="ctnprincipal bg-zinc-900 text-white w-full h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10">
          <img src="/rrt1.png" alt="" className="w-full h-3/12" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="imgyo w-72 h-72 border border-white">
              <img src="cv.png" alt="" />
            </div>
            <h1 className="Yo text-4xl font-bold mb-4 text-amber-500 mt-10">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="yotxt w-2xl">
              Buenas soy Richard un apasionado desarrollador web, en donde siempre quiero dar la mejor experiencia visual a nuestros clientes, ofreciéndoles no solo un servicio, sino una experiencia única y personalizada en cada proyecto, en el cual uno siempre va aprender algo nuevo mientras desarrolla, ¿No lo crees?
            </p>
          </div>
        </div>
      </div>

      <section className="proyectos w-full h-screen bg-black flex flex-col items-center justify-center">
        <h2 className="text-3xl text-center text-white mt-10">Proyectos</h2>
        <p className="text-center text-gray-400 mt-4">Aquí puedes ver algunos de mis trabajos recientes.</p>
        {/* Aquí puedes agregar los componentes o elementos de tus proyectos */}
      </section>
    </main>
  );
};

export default Layout;