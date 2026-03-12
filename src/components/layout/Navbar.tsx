import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import personalData from '../../data/personal.json';

const NAV_LINKS = [
  { href: '#hero', label: 'Inicio' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#services', label: 'Servicios' },
];

const SECTION_IDS = [
  'hero',
  'skills',
  'projects',
  'experience',
  'about',
  'services',
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-5xl"
    >
      <nav
        className={`px-4 md:px-6 py-3 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'glass border-[#3A3A3A] shadow-xl shadow-black/30'
            : 'bg-[#1F1F1F]/80 border-[#3A3A3A]/50 backdrop-blur-md'
        }`}
        aria-label="Navegación principal"
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick('#hero')}
            className="text-lg font-bold font-display gradient-text focus:outline-none focus:ring-2 focus:ring-[#5919C2] rounded-lg px-1"
            aria-label="Ir al inicio"
          >
            {'<Santicollage/>'}
          </button>

          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5919C2] ${
                      isActive
                        ? 'text-white bg-[#2C2C2C]'
                        : 'text-[#A0A0A0] hover:text-white hover:bg-[#2C2C2C]'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          <a
            href={`https://wa.me/${personalData.phone}?text=Hola%20${personalData.firstName},%0A%0AMe%20gustaría%20hablar%20contigo%20sobre%20una%20oportunidad%20de%20colaboración.%0A%0ASaludos`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium gradient-bg text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#5919C2] focus:ring-offset-2 focus:ring-offset-[#0F0F0F]"
          >
            Hablemos
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            className="md:hidden p-2 rounded-xl text-[#A0A0A0] hover:text-white hover:bg-[#2C2C2C] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5919C2]"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="pt-3 pb-1 space-y-1" role="list">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <li key={link.href}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#5919C2] ${
                          isActive
                            ? 'text-white bg-[#2C2C2C]'
                            : 'text-[#A0A0A0] hover:text-white hover:bg-[#2C2C2C]'
                        }`}
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <a
                    href={`https://wa.me/${personalData.phone}?text=Hola%20${personalData.firstName},%0A%0AMe%20gustaría%20hablar%20contigo%20sobre%20una%20oportunidad%20de%20colaboración.%0A%0ASaludos`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 rounded-xl text-sm font-medium gradient-bg text-white hover:opacity-90 transition-opacity"
                  >
                    Hablemos
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
