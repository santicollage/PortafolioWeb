import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, MapPin, Circle } from "lucide-react";
import personalData from "../../data/personal.json";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 -left-32 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #5919C2, transparent)",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #F68237, transparent)",
          }}
        />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              {personalData.available && (
                <span className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[#1F1F1F] border border-[#3A3A3A] text-xs font-medium text-[#A0A0A0]">
                  <Circle size={8} className="fill-green-400 text-green-400" />
                  {personalData.availabilityText}
                </span>
              )}
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight"
            >
              Hola, soy{" "}
              <span className="gradient-text">{personalData.firstName}</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-3 text-xl md:text-2xl text-[#A0A0A0] font-medium"
            >
              {personalData.title}
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-base md:text-lg text-[#A0A0A0] leading-relaxed max-w-xl"
            >
              {personalData.bio}
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-4 flex items-center gap-2 text-sm text-[#6B6B6B]"
            >
              <MapPin size={14} />
              <span>{personalData.location}</span>
            </motion.div>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap gap-3"
            >
              {personalData.social.linkedin && (
                <a
                  href={personalData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#0856a3] text-white text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#5919C2]"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              )}
              {personalData.social.github && (
                <a
                  href={personalData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2C2C2C] hover:bg-[#3A3A3A] text-white text-sm font-medium border border-[#3A3A3A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5919C2]"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}
              <a
                href={`mailto:${personalData.email}`}
                aria-label="Correo electrónico"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2C2C2C] hover:bg-[#3A3A3A] text-white text-sm font-medium border border-[#3A3A3A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5919C2]"
              >
                <Mail size={16} />
                Email
              </a>
              <a
                href={personalData.cv}
                download
                aria-label="Descargar CV"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl gradient-bg text-white text-sm font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#5919C2]"
              >
                <Download size={16} />
                Descargar CV
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-40"
                  style={{
                    background:
                      "linear-gradient(135deg, #F68237, #5919C2, #361879)",
                  }}
                />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#3A3A3A] bg-[#1F1F1F]">
                  <img
                    src={personalData.photo}
                    alt={`Foto de perfil de ${personalData.name}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-8xl font-bold font-display gradient-text">${personalData.firstName[0]}</span></div>`;
                      }
                    }}
                  />
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 px-3 py-2 bg-[#1F1F1F] border border-[#3A3A3A] rounded-xl text-xs font-medium text-white shadow-xl"
                >
                  ✨ Open to work
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -bottom-4 -left-4 px-3 py-2 bg-[#1F1F1F] border border-[#3A3A3A] rounded-xl text-xs font-medium text-white shadow-xl"
                >
                  🚀 Fullstack Dev
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "3+", label: "Años de experiencia" },
            { value: "20+", label: "Proyectos completados" },
            { value: "15+", label: "Clientes satisfechos" },
            { value: "100%", label: "Compromiso" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-2xl bg-[#1F1F1F] border border-[#2C2C2C] text-center"
            >
              <div className="text-2xl md:text-3xl font-bold font-display gradient-text">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-[#6B6B6B]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
