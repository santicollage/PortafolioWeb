import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Info, Globe } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';
import { AnimatedBackground } from '../ui/AnimatedBackground';
import { useModal } from '../../hooks/useModal';
import projectsData from '../../data/projects.json';
import type { Project } from '../../types';

function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} size="xl">
      <div className="space-y-6">
        {project.image && (
          <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden bg-[#2C2C2C]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.parentElement!.innerHTML =
                  '<div class="w-full h-full flex items-center justify-center text-4xl">🚀</div>';
              }}
            />
          </div>
        )}

        <div>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <Badge label={project.category} variant="gradient" size="md" />
            <Badge label={String(project.year)} variant="outline" size="md" />
          </div>
          <p className="text-[#A0A0A0] leading-relaxed whitespace-pre-line">
            {project.longDescription}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[#6B6B6B] uppercase tracking-wider mb-3">
            Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} label={t} variant="default" size="md" />
            ))}
          </div>
        </div>

        {project.challenges && (
          <div className="p-4 rounded-xl bg-[#2C2C2C] border border-[#3A3A3A]">
            <h3 className="text-sm font-semibold text-[#F68237] mb-2">
              ⚡ Desafío
            </h3>
            <p className="text-sm text-[#A0A0A0]">{project.challenges}</p>
          </div>
        )}

        {project.results && (
          <div className="p-4 rounded-xl bg-[#2C2C2C] border border-[#3A3A3A]">
            <h3 className="text-sm font-semibold text-green-400 mb-2">
              ✅ Resultados
            </h3>
            <p className="text-sm text-[#A0A0A0]">{project.results}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-3 pt-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl gradient-bg text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Globe size={16} />
              Ver sitio
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2C2C2C] border border-[#3A3A3A] text-white text-sm font-medium hover:bg-[#3A3A3A] transition-colors"
            >
              <Github size={16} />
              Repositorio
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="group flex flex-col rounded-2xl bg-[#1F1F1F] border border-[#2C2C2C] hover:border-[#5919C2]/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"
      >
        <div className="relative h-48 bg-[#2C2C2C] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.parentElement!.innerHTML =
                '<div class="w-full h-full flex items-center justify-center text-5xl bg-gradient-to-br from-[#1F1F1F] to-[#2C2C2C]">🚀</div>';
            }}
          />
          {project.featured && (
            <span className="absolute top-3 left-3 px-2 py-1 rounded-lg gradient-bg text-white text-xs font-semibold">
              Destacado
            </span>
          )}
          <span className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/60 text-white text-xs font-medium">
            {project.category}
          </span>
        </div>

        <div className="flex flex-col flex-1 p-5 gap-3">
          <h3 className="text-lg font-semibold text-white font-display">
            {project.title}
          </h3>
          <p className="text-sm text-[#A0A0A0] leading-relaxed flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <Badge key={t} label={t} variant="default" size="sm" />
            ))}
            {project.tech.length > 4 && (
              <Badge
                label={`+${project.tech.length - 4}`}
                variant="outline"
                size="sm"
              />
            )}
          </div>

          <div className="flex gap-2 pt-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${project.title}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#2C2C2C] hover:bg-[#3A3A3A] text-[#A0A0A0] hover:text-white text-xs font-medium border border-[#3A3A3A] transition-colors"
              >
                <ExternalLink size={13} />
                Sitio
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Repositorio de ${project.title}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#2C2C2C] hover:bg-[#3A3A3A] text-[#A0A0A0] hover:text-white text-xs font-medium border border-[#3A3A3A] transition-colors"
              >
                <Github size={13} />
                Repo
              </a>
            )}
            <button
              onClick={open}
              aria-label={`Ver detalles de ${project.title}`}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl gradient-bg text-white text-xs font-medium hover:opacity-90 transition-opacity"
            >
              <Info size={13} />
              Detalles
            </button>
          </div>
        </div>
      </motion.article>

      <ProjectModal project={project} isOpen={isOpen} onClose={close} />
    </>
  );
}

export function Projects() {
  const [filter, setFilter] = useState('Todos');
  const categories = [
    'Todos',
    ...Array.from(new Set(projectsData.map((p) => p.category))),
  ];
  const filtered =
    filter === 'Todos'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative section-padding bg-[#0F0F0F] overflow-hidden"
    >
      <AnimatedBackground />
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 z-10">
        <SectionHeader
          tag="Portafolio"
          title="Proyectos"
          highlight="Destacados"
          description="Una selección de proyectos que demuestran mis capacidades técnicas."
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5919C2] ${
                filter === cat
                  ? 'gradient-bg text-white'
                  : 'bg-[#1F1F1F] text-[#A0A0A0] hover:text-white hover:bg-[#2C2C2C] border border-[#3A3A3A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(filtered as Project[]).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
