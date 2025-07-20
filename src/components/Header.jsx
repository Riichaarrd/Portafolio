import React, { useEffect, useState } from "react";
import "./Header.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    const [opacidad, setOpaque] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });

        const handleScroll = () => {
            setOpaque(window.scrollY > 0);
        };

        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // Cerrar menú si cambiamos a pantalla grande
            if (!mobile) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 w-full p-5 z-50 flex justify-center bg-transparent text-white transition-all duration-300 ${opacidad ? "bg-transparent" : "header-blur"}`}>
            <div 
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000" 
                className="headertxt flex justify-between items-center w-3/4"
            >
                <div className="logo text-3xl">
                    <a href="#home">RichardJR</a>
                </div>
                
                {/* Menú normal para desktop */}
                <div className="ctnelements space-x-8 hidden md:flex">
                    <a href="#home" className="nav-linkh text-amber-500 glow-hover">Home</a>
                    <a href="#sobre-mi" className="nav-link glow-hover">Sobre mi</a>
                    <a href="#tecnologias" className="nav-link glow-hover">Tecnologias</a>
                    <a href="#proyectos" className="nav-linkh text-amber-500 glow-hover">Proyectos</a>
                    <a href="#contacto" className="nav-link glow-hover">Contacto</a>
                </div>
                
                {/* Botón hamburguesa para mobile */}
                {isMobile && (
                    <button 
                        className="md:hidden z-50 focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Menú"
                    >
                        <div className={`w-6 flex flex-col items-end transition-all duration-300 ${isMenuOpen ? 'transform rotate-180' : ''}`}>
                            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'}`}></span>
                            <span className={`block h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0 w-0' : 'w-6 mb-1.5'}`}></span>
                            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
                        </div>
                    </button>
                )}
            </div>

            {/* Menú mobile */}
            {isMobile && (
                <nav
                    className={`fixed top-5 right-5 bg-black bg-opacity-95 rounded-xl shadow-lg z-40 px-6 py-4 transition-all duration-300 ease-in-out flex flex-col items-end space-y-4 w-56
                        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
                    style={{ maxHeight: isMenuOpen ? '400px' : '0', overflow: 'hidden' }}
                >
                    {/* Botón de cerrar */}
                    <button 
                        className="absolute top-2 right-3 text-white text-2xl z-50 focus:outline-none close-button"
                        onClick={closeMenu}
                        aria-label="Cerrar menú"
                    >
                        &times;
                    </button>
                    
                    <a 
                        href="#home" 
                        className="text-lg text-amber-500 hover:text-amber-400 transition-colors font-semibold"
                        onClick={closeMenu}
                    >
                        Home
                    </a>
                    <a 
                        href="#sobre-mi" 
                        className="text-lg text-white hover:text-amber-400 transition-colors font-semibold"
                        onClick={closeMenu}
                    >
                        Sobre mi
                    </a>
                    <a 
                        href="#tecnologias" 
                        className="text-lg text-white hover:text-amber-400 transition-colors font-semibold"
                        onClick={closeMenu}
                    >
                        Tecnologias
                    </a>
                    <a 
                        href="#proyectos" 
                        className="text-lg text-amber-500 hover:text-amber-400 transition-colors font-semibold"
                        onClick={closeMenu}
                    >
                        Proyectos
                    </a>
                    <a 
                        href="#contacto" 
                        className="text-lg text-white hover:text-amber-400 transition-colors font-semibold"
                        onClick={closeMenu}
                    >
                        Contacto
                    </a>
                </nav>
            )}
        </header>
    );
};

export default Header;
