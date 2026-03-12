import { Github, Linkedin, Mail } from 'lucide-react';
import personalData from '../../data/personal.json';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2C2C2C] bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold font-display gradient-text">
              {'<Dev/>'}
            </span>
            <p className="mt-1 text-sm text-[#6B6B6B]">{personalData.title}</p>
          </div>

          <nav aria-label="Footer social links">
            <ul className="flex items-center gap-3" role="list">
              {personalData.social.github && (
                <li>
                  <a
                    href={personalData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2.5 rounded-xl bg-[#2C2C2C] text-[#A0A0A0] hover:text-white hover:bg-[#3A3A3A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5919C2]"
                  >
                    <Github size={18} />
                  </a>
                </li>
              )}
              {personalData.social.linkedin && (
                <li>
                  <a
                    href={personalData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2.5 rounded-xl bg-[#2C2C2C] text-[#A0A0A0] hover:text-white hover:bg-[#3A3A3A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5919C2]"
                  >
                    <Linkedin size={18} />
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.email}&su=Contacto%20desde%20Portfolio&body=Hola%20${personalData.firstName},%0A%0AMe%20gustaría%20ponerme%20en%20contacto%20contigo.%0A%0ASaludos,%0A[Tu%20nombre]`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="p-2.5 rounded-xl bg-[#2C2C2C] text-[#A0A0A0] hover:text-white hover:bg-[#3A3A3A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5919C2]"
                >
                  <Mail size={18} />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-[#2C2C2C] flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#6B6B6B]">
          <p>
            © {year} {personalData.name}. Todos los derechos reservados.
          </p>
          <p>Hecho con React + TypeScript + TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
}
