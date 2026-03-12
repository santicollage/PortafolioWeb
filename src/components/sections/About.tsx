import { motion } from 'framer-motion';
import { User, MapPin, Heart, Code2 } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { SectionHeader } from '../ui/SectionHeader';
import { useModal } from '../../hooks/useModal';
import personalData from '../../data/personal.json';

const highlights = [
  { icon: Code2, label: 'Clean Code', desc: 'Código limpio y mantenible' },
  { icon: Heart, label: 'Pasión', desc: 'Apasionado por la tecnología' },
  { icon: MapPin, label: 'Remoto', desc: 'Trabajo 100% remoto' },
  { icon: User, label: 'Colaboración', desc: 'Comunicación fluida' },
];

function AboutModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Sobre ${personalData.firstName}`}
      size="lg"
    >
      <div className="space-y-5">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#3A3A3A] bg-[#2C2C2C]">
            <img
              src={personalData.photo}
              alt={personalData.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-4xl font-bold gradient-text font-display">${personalData.firstName[0]}</div>`;
              }}
            />
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-white font-display">
            {personalData.name}
          </h3>
          <p className="text-sm gradient-text font-medium mt-1">
            {personalData.title}
          </p>
          <p className="flex items-center justify-center gap-1.5 text-xs text-[#6B6B6B] mt-2">
            <MapPin size={12} />
            {personalData.location}
          </p>
        </div>

        <div className="text-[#A0A0A0] leading-relaxed space-y-3">
          {personalData.bioExtended.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          {highlights.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#2C2C2C]"
            >
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                <Icon size={14} className="text-white" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">{label}</div>
                <div className="text-xs text-[#6B6B6B]">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {personalData.social.linkedin && (
            <a
              href={personalData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded-xl gradient-bg text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              LinkedIn
            </a>
          )}
          <a
            href={`https://wa.me/${personalData.phone}?text=Hola%20${personalData.firstName},%0A%0AHe%20leído%20tu%20perfil%20y%20me%20gustaría%20conocer%20más%20sobre%20tu%20experiencia%20y%20trayectoria%20profesional.%0A%0ASaludos`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-xl bg-[#2C2C2C] border border-[#3A3A3A] text-white text-sm font-medium hover:bg-[#3A3A3A] transition-colors"
          >
            Escribirme
          </a>
        </div>
      </div>
    </Modal>
  );
}

export function About() {
  const { isOpen, open, close } = useModal();

  return (
    <section id="about" className="section-padding bg-[#0F0F0F]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeader tag="Acerca de" title="Sobre" highlight="Mí" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-4">
            <div className="relative w-full max-w-xs mx-auto lg:mx-0">
              <div
                className="absolute inset-0 rounded-2xl blur-2xl opacity-30"
                style={{
                  background: 'linear-gradient(135deg, #5919C2, #F68237)',
                }}
              />
              <div className="relative rounded-2xl overflow-hidden border border-[#3A3A3A] aspect-square bg-[#1F1F1F]">
                <img
                  src={personalData.photo}
                  alt={personalData.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-8xl font-bold gradient-text font-display">${personalData.firstName[0]}</div>`;
                  }}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#1F1F1F] border border-[#2C2C2C] text-center"
                >
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {label}
                  </div>
                  <div className="text-xs text-[#6B6B6B] leading-tight">
                    {desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-[#1F1F1F] border border-[#2C2C2C]">
              <p className="text-[#A0A0A0] leading-relaxed line-clamp-4">
                {personalData.bioExtended.split('\n\n')[0]}
              </p>
            </div>

            <button
              onClick={open}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#5919C2]"
            >
              <User size={16} />
              Saber más sobre mí
            </button>
          </div>
        </motion.div>
      </div>

      <AboutModal isOpen={isOpen} onClose={close} />
    </section>
  );
}
