import React, { useState, useEffect, useRef } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import "./Main.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useEmail from '../hooks/useEmail'; // ajusta el path según tu estructura

const Layout = () => {
  // 📩 Contacto
  const formRef = useRef(null);
  const { sendEmail, status, loading } = useEmail();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formRef.current) {
      await sendEmail(formRef.current);
      if (status.success) {
        formRef.current.reset();
      }
    }
  };
  
  useEffect(() => {
    // Al montar el componente, hace scroll suave hacia #home
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // 🪄 Animación de escritura
  const fullText = "Ricardo Salazar Galicia";
  const fullText2 = "Desarrollador Frontend";
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState(1);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });

    let timeout;
    if (phase === 1) {
      if (index < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev + fullText[index]);
          setIndex(index + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setPhase(2);
        }, 800);
      }
    } else if (phase === 2) {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
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
          setDisplayedText(prev => prev + fullText2[index]);
          setIndex(index + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setPhase(4);
        }, 800);
      }
    } else if (phase === 4) {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
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
    <main >
      <div id="home" className="ctnprincipal bg-zinc-900 text-white w-full h-screen flex items-center justify-center relative overflow-hidden">
        
        <div data-aos="fade-down" className="homectn relative z-10">
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="imgyo w-72 h-72 border border-white"><img className="" src="cv.png" alt="" /></div>
            <h1 className="Yo text-4xl font-bold mb-4 text-amber-500 mt-10">
              {displayedText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="yotxt">Apasionado desarrollador web, en donde siempre quiero dar la mejor experiencia visual a nuestros clientes, ofreciendoles no solo un servicio, sino una experiencia única y personalizada en cada proyecto, siendo asi alguien capaz de cumplir no solo con los objetivos de nuestos clientes, sino tambien cumpliendo y superando sus expectativas, haciendo un trabajo en el cual uno siempre va aprender algo nuevo mientras desarrolla, ¿No lo crees?</p>
          </div>
        </div>
      </div>

      <section id="sobre-mi" className="proyectos w-full h-screen flex flex-row items-center justify-center content-center">
        <img className="w-md h-md rounded-md m-40 " src="sobremi.png" alt="" data-aos="fade-right"/>
        <div className="text-content w-full" data-aos="fade-right">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center md:text-left" style={{ fontFamily: 'Tektur, sans-serif'}}>
      Sobre <span className="text-amber-500">Mí</span>
    </h2>
    
    <div className="txtmi space-y-6">
      <p className="text-lg text-gray-300 leading-relaxed w-xl">
        ¡Hola! Soy Richard, un <span className="text-amber-500 font-medium">desarrollador autodidacta</span> de México. 
        A lo largo de mi trayectoria, he desarrollado habilidades para trabajar en equipo 
        y utilizar diversas herramientas tecnológicas de manera productiva y funcional.
      </p>
      
      <p className="text-lg text-gray-300 leading-relaxed w-xl">
        Mi filosofía se basa en la <span className="text-amber-500 font-medium">mejora continua</span>. Constantemente perfecciono mis habilidades 
        y busco soluciones innovadoras que ayuden tanto a personas como a empresas 
        a alcanzar sus objetivos a través de nuestros proyectos.
      </p>
      
      <p className="text-lg text-gray-300 leading-relaxed w-xl">
        Me caracterizo por ser una persona colaborativa, con capacidad para <span className="text-amber-500 font-medium"> seguir instrucciones </span> 
        y trabajar en equipo de manera coordinada, asegurando la ejecución eficiente 
        de cada proyecto emprendido.
      </p>
    </div>
    </div>
      </section>

      <section id="tecnologias" className="tecnologias bg-zinc-900 text-white w-full h-screen flex flex-col items-center justify-center">
        <div className="text-content w-full flex items-center justify-center flex-col">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-8 text-center md:text-left flex items-center justify-center" style={{ fontFamily: 'Tektur, sans-serif'}}>
            Tecnologías
          </h2>
          <div className="line w-95 h-1 bg-amber-500 mb-8"></div>
          <div className="tec grid grid-cols-3 gap-10 w-md" >
            <div className="tech-item" data-aos="zoom-in-down">
              <img src="react.png" alt="React" className="w-full h-auto" />
              <p className="text-center text-gray-300">React</p>
            </div>
            <div className="tech-item"data-aos="zoom-in-down">
              <img src="node-js-logo-png_seeklogo-273749.png" alt="Node.js" className="w-full h-auto" />
              <p className="text-center text-gray-300">Node.js</p>
            </div>
            <div className="tech-item"data-aos="zoom-in-down">
              <img src="tailwind.png" alt="Tailwind CSS" className="w-full h-auto" />
              <p className="text-center text-gray-300">Tailwind CSS</p>
            </div>
            <div className="tech-item"data-aos="zoom-in-down">
              <img src="ts.png" alt="MongoDB" className="w-full h-auto" />
              <p className="text-center text-gray-300">TypeScript</p>
            </div>
            <div className="tech-item"data-aos="zoom-in-down">
              <img src="css.png" alt="React" className="w-full h-auto" />
              <p className="text-center text-gray-300">CSS</p>
            </div>
            <div className="tech-item" data-aos="zoom-in-down">
              <img src="botss.png" alt="Tailwind CSS" className="w-full h-auto" />
              <p className="text-center text-gray-300">BootsTrap</p>
            </div>
            <div className="tech-item" data-aos="zoom-in-down">
              <img src="git.png" alt="MongoDB" className="w-full h-auto" />
              <p className="text-center text-gray-300">Git</p>
            </div>
            <div className="tech-item"data-aos="zoom-in-down">
              <img src="vue,js.png" alt="React" className="w-full h-auto" />
              <p className="text-center text-gray-300">VueJs</p>
            </div>
            <div className="tech-item" data-aos="zoom-in-down">
              <img src="js.png" alt="Node.js" className="w-full h-auto" />
              <p className="text-center text-gray-300">JavaScript</p>
            </div>
          </div>
        </div>
      </section>
      <section id="proyectos" className="Proyectos bg-zinc-900 text-white w-full h-screen flex flex-col items-center justify-center">
        <div className="pr text-content w-full flex items-center justify-center flex-col">
          
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-8 text-center md:text-left flex items-center justify-center"
            style={{ fontFamily: 'Tektur, sans-serif'}}
          >
            Proyectos
          </h2>
          <div className="line w-3xl h-0.5 bg-amber-500 mb-8"></div>

          {/* Slider con Splide */}
          <div className="imgsplide grid grid-cols-2 h-auto w-4/5 bg-neutral-900 p-7 rounded-2xl">
          <div className="imgsplides h-64 flex justify-center w-xl">
            <Splide
              options={{
                type: 'loop',
                perPage: 1,
                arrows: true,
                pagination: true,
                drag: true,
                autoplay: true,
                interval: 2000,
              }}
              aria-label="Mis proyectos"
            >
              <SplideSlide>
                <div className="flex justify-center items-center">
                <img src="tuserverES.png" alt="Proyecto 1" className="w-full h-auto" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex justify-center items-center">
                <img src="tuserver2.png" alt="Proyecto 2" className="w-full h-auto" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex justify-center items-center">
                <img src="tuserver3.png" alt="Proyecto 3" className="w-full h-auto" />
                </div>
              </SplideSlide>
            </Splide>
            
          </div>
          <div>
            <div className="imgsplides h-64 flex justify-center">
            <Splide
              options={{
                type: 'loop',
                perPage: 1,
                arrows: true,
                pagination: true,
                drag: true,
                autoplay: true,
                interval: 2000,
              }}
              aria-label="Mis proyectos"
            >
              <SplideSlide>
                <div className="flex justify-center items-center">
                <img src="skyhost1.png" alt="Proyecto 1" className="w-full h-auto" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex justify-center items-center">
                <img src="skyhost2.png" alt="Proyecto 2" className="w-full h-auto" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex justify-center items-center">
                <img src="skyhost3.png" alt="Proyecto 3" className="w-full h-auto" />
                </div>
              </SplideSlide>
            </Splide>
            </div>
          </div>
          <div className="imgsplides mt-20 mr-9">
            <div className="pr1 h-64 flex justify-center">
            <Splide
              options={{
                type: 'loop',
                perPage: 1,
                arrows: true,
                pagination: true,
                drag: true,
                autoplay: true,
                interval: 2000,
              }}
              aria-label="Mis proyectos"
            >
              <SplideSlide>
                <div className="flex justify-center items-center">
                <img src="zyndel1.png" alt="Proyecto 1" className="w-full h-auto" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex justify-center items-center">
                <img src="zyndel2.png" alt="Proyecto 2" className="w-full h-auto" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex justify-center items-center">
                <img src="zyndel3.png" alt="Proyecto 3" className="w-full h-auto" />
                </div>
              </SplideSlide>
            </Splide>
            </div>
          </div>
          <div className="imgsplides mt-20">
            <div className="pr1 h-64 flex justify-center">
            <Splide
              options={{
                type: 'loop',
                perPage: 1,
                arrows: true,
                pagination: true,
                drag: true,
                autoplay: true,
                interval: 2000,
              }}
              aria-label="Mis proyectos"
            >
              <SplideSlide>
                <div className="flex justify-center items-center">
                <img src="codecom1.png" alt="Proyecto 1" className="w-full h-auto" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex justify-center items-center">
                <img src="codecom2.png" alt="Proyecto 2" className="w-full h-auto" />
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex justify-center items-center">
                <img src="codecom3.png" alt="Proyecto 3" className="w-full h-auto" />
                </div>
              </SplideSlide>
            </Splide>
            </div>
          </div>
          </div>
        </div> 
      </section>
      <section id="contacto"
        className="Contacto h-screen w-full bg-zinc-900 flex flex-col items-center justify-center px-4"
        data-aos="fade-up"
      >
        <h2
          className="text-4xl md:text-5xl font-bold text-amber-600 mb-8 text-center"
          style={{ fontFamily: 'Tektur, sans-serif' }}
          data-aos="zoom-in"
        >
          Contacto
        </h2>

        <form
          ref={formRef}
          className="w-full max-w-lg bg-zinc-800 p-8 rounded-2xl shadow-xl space-y-6"
          onSubmit={handleSubmit}
          data-aos="fade-up"
        >
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              required
              className="w-full px-4 py-2 rounded-xl bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition duration-300"
              placeholder="Nombre completo"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              required
              className="w-full px-4 py-2 rounded-xl bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition duration-300"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 rounded-xl bg-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition duration-300 resize-none"
              placeholder="Cuéntame un poco sobre tu proyecto o idea"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-3 rounded-xl transition duration-300 shadow hover:shadow-lg ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {/* Estado de envío */}
          {status.message && (
            <p className={`text-center text-sm mt-2 ${status.success ? 'text-green-500' : 'text-red-500'}`}>
              {status.message}
            </p>
          )}
        </form>
      </section>
    </main>
  );
};



export default Layout;










