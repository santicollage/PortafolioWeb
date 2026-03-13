import type { ComponentType } from 'react';
import personalData from '../../data/personal.json';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Monitor,
  ShoppingCart,
  Code2,
  Layout,
  Lightbulb,
  Wrench,
  CheckCircle,
  Clock,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../ui/SectionHeader';
import { AnimatedBackground } from '../ui/AnimatedBackground';
import servicesData from '../../data/services.json';

const ICON_MAP: Record<
  string,
  ComponentType<{ size?: number; className?: string }>
> = {
  monitor: Monitor,
  'shopping-cart': ShoppingCart,
  'code-2': Code2,
  layout: Layout,
  lightbulb: Lightbulb,
  wrench: Wrench,
};

export function Services() {
  const featured = servicesData.services.filter((s) => s.highlight);
  const rest = servicesData.services.filter((s) => !s.highlight);

  return (
    <section
      id="services"
      className="relative section-padding bg-[#0F0F0F] overflow-hidden"
    >
      <AnimatedBackground />
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 z-10">
        <SectionHeader
          tag="Servicios"
          title={servicesData.headline}
          description={servicesData.subheadline}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {featured.map((service) => {
            const Icon = ICON_MAP[service.icon] ?? Monitor;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-12 group relative overflow-hidden rounded-2xl p-6 md:p-8 border border-[#3A3A3A] hover:border-[#5919C2]/60 transition-all duration-300"
                style={{
                  background:
                    'linear-gradient(135deg, #1F1F1F 0%, #2C2C2C 100%)',
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 gradient-bg" />
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-display mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#A0A0A0] leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[#6B6B6B]">
                      <Clock size={14} />
                      {service.timeEstimate}
                    </div>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-[#A0A0A0]"
                        >
                          <CheckCircle
                            size={14}
                            className="text-green-400 shrink-0"
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {rest.map((service, index) => {
            const Icon = ICON_MAP[service.icon] ?? Monitor;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-5 rounded-2xl bg-[#1F1F1F] border border-[#2C2C2C] hover:border-[#5919C2]/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="text-base font-semibold text-white font-display mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#6B6B6B]">
                  <Clock size={12} />
                  {service.timeEstimate}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl p-8 md:p-12 text-center gradient-bg"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-4">
              ¿Listo para empezar tu proyecto?
            </h3>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Cuéntame tu idea y te armo una propuesta personalizada sin
              compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0F0F0F] font-semibold hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              >
                Ver todos los servicios
                <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/${personalData.phone}?text=Hola%20${personalData.firstName},%0A%0AEstoy%20interesado%20en%20tus%20servicios%20de%20desarrollo%20web.%20Me%20gustaría%20discutir%20un%20proyecto%20que%20tengo%20en%20mente.%0A%0ASaludos`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              >
                Enviar mensaje
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
