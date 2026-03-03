import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Monitor,
  ShoppingCart,
  Code2,
  Layout,
  Lightbulb,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import servicesData from "../data/services.json";
import personalData from "../data/personal.json";

const ICON_MAP: Record<
  string,
  ComponentType<{ size?: number; className?: string }>
> = {
  monitor: Monitor,
  "shopping-cart": ShoppingCart,
  "code-2": Code2,
  layout: Layout,
  lightbulb: Lightbulb,
  wrench: Wrench,
};

export function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#A0A0A0] hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al portfolio
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase gradient-text">
            Servicios
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-4">
            {servicesData.headline}
          </h1>
          <p className="text-lg text-[#A0A0A0] max-w-2xl">
            {servicesData.subheadline}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {servicesData.services.map((service, index) => {
            const Icon = ICON_MAP[service.icon] ?? Monitor;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`p-6 rounded-2xl border transition-all duration-200 ${
                  service.highlight
                    ? "gradient-border bg-[#1F1F1F]"
                    : "bg-[#1F1F1F] border-[#2C2C2C] hover:border-[#5919C2]/40"
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-lg font-bold text-white font-display">
                        {service.title}
                      </h2>
                      {service.highlight && (
                        <span className="px-2 py-0.5 rounded-full gradient-bg text-white text-xs font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-[#6B6B6B]">
                      <Clock size={12} />
                      {service.timeEstimate}
                    </div>
                  </div>
                </div>

                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

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
              </motion.article>
            );
          })}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-10 text-center">
            ¿Cómo <span className="gradient-text">trabajo</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.process.map((step) => (
              <div
                key={step.step}
                className="relative flex flex-col items-center text-center p-5 rounded-2xl bg-[#1F1F1F] border border-[#2C2C2C]"
              >
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4 text-white font-bold text-lg font-display">
                  {step.step}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-8 text-center">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {servicesData.faq.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-[#1F1F1F] border border-[#2C2C2C]"
              >
                <h3 className="font-semibold text-white mb-2">
                  {item.question}
                </h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl p-8 md:p-12 text-center gradient-bg"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display mb-4">
              ¿Hablamos de tu proyecto?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Agenda una llamada gratuita de 30 minutos y cuéntame qué
              necesitas.
            </p>
            <a
              href={`mailto:${personalData.email}`}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-[#0F0F0F] font-semibold hover:bg-white/90 transition-colors"
            >
              Contactar ahora
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
