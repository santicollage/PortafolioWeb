import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  CheckCircle,
} from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';
import { useModal } from '../../hooks/useModal';
import experienceData from '../../data/experience.json';
import type { ExperienceItem } from '../../types';

function formatDate(date: string): string {
  const [year, month] = date.split('-');
  const months = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic',
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
}

function ExperienceModal({
  item,
  isOpen,
  onClose,
}: {
  item: ExperienceItem;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={item.title} size="lg">
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-semibold text-white">{item.company}</span>
          <Badge
            label={item.type === 'work' ? 'Trabajo' : 'Educación'}
            variant="gradient"
            size="sm"
          />
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-[#A0A0A0]">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            {item.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {formatDate(item.startDate)} —{' '}
            {item.current
              ? 'Actualidad'
              : item.endDate
                ? formatDate(item.endDate)
                : ''}
          </span>
        </div>

        <p className="text-[#A0A0A0] leading-relaxed whitespace-pre-line">
          {item.longDescription}
        </p>

        {item.achievements.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-[#6B6B6B] uppercase tracking-wider mb-3">
              Logros
            </h3>
            <ul className="space-y-2">
              {item.achievements.map((achievement, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-[#A0A0A0]"
                >
                  <CheckCircle
                    size={14}
                    className="mt-0.5 shrink-0 text-green-400"
                  />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.technologies.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-[#6B6B6B] uppercase tracking-wider mb-3">
              Tecnologías
            </h3>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((t) => (
                <Badge key={t} label={t} variant="default" size="md" />
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const { isOpen, open, close } = useModal();
  const isWork = item.type === 'work';

  return (
    <>
      <motion.article
        initial={{ opacity: 0, x: isWork ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="group p-5 rounded-2xl bg-[#1F1F1F] border border-[#2C2C2C] hover:border-[#5919C2]/40 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
        onClick={open}
      >
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
            {isWork ? (
              <Briefcase size={18} className="text-white" />
            ) : (
              <GraduationCap size={18} className="text-white" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-white text-sm transition-all">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A0A0A0] mt-0.5">{item.company}</p>
              </div>
              {item.current && (
                <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                  Actual
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-[#6B6B6B]">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {formatDate(item.startDate)} —{' '}
                {item.current
                  ? 'Actualidad'
                  : item.endDate
                    ? formatDate(item.endDate)
                    : ''}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={12} />
                {item.location}
              </span>
            </div>
            <p className="mt-3 text-xs text-[#A0A0A0] leading-relaxed line-clamp-2">
              {item.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1">
              {item.technologies.slice(0, 3).map((t) => (
                <Badge key={t} label={t} variant="default" size="sm" />
              ))}
              {item.technologies.length > 3 && (
                <Badge
                  label={`+${item.technologies.length - 3}`}
                  variant="outline"
                  size="sm"
                />
              )}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                open();
              }}
              className="mt-3 text-xs gradient-text font-medium hover:opacity-80 transition-opacity focus:outline-none"
            >
              Ver detalles →
            </button>
          </div>
        </div>
      </motion.article>

      <ExperienceModal
        item={item as ExperienceItem}
        isOpen={isOpen}
        onClose={close}
      />
    </>
  );
}

export function Experience() {
  const allItems = [
    ...experienceData.experience,
    ...experienceData.education,
  ] as ExperienceItem[];

  const workItems = allItems.filter((i) => i.type === 'work');
  const eduItems = allItems.filter((i) => i.type === 'education');

  return (
    <section id="experience" className="section-padding bg-alt">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeader
          tag="Trayectoria"
          title="Experiencia &"
          highlight="Formación"
          description="Mi recorrido profesional y académico."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[#A0A0A0] uppercase tracking-widest mb-5">
              <Briefcase size={16} className="gradient-text" />
              Experiencia
            </h3>
            <div className="space-y-4">
              {workItems.map((item) => (
                <ExperienceCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-[#A0A0A0] uppercase tracking-widest mb-5">
              <GraduationCap size={16} className="gradient-text" />
              Formación
            </h3>
            <div className="space-y-4">
              {eduItems.map((item) => (
                <ExperienceCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
