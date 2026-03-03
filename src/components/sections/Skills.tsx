import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import skillsData from "../../data/skills.json";

const TECH_ICONS: Record<string, string> = {
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  html5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  framer:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  nestjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  graphql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  prisma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  vercel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  linux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  api: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
};

export function Skills() {
  const [activeTab, setActiveTab] = useState(skillsData.categories[0].id);
  const activeCategory = skillsData.categories.find((c) => c.id === activeTab);

  return (
    <section id="skills" className="section-padding bg-alt">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <SectionHeader
          tag="Tecnologías"
          title="Mi Stack"
          highlight="Tecnológico"
          description="Herramientas y tecnologías con las que construyo soluciones modernas."
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5919C2] ${
                activeTab === cat.id
                  ? "gradient-bg text-white"
                  : "bg-[#1F1F1F] text-[#A0A0A0] hover:text-white hover:bg-[#2C2C2C] border border-[#3A3A3A]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {activeCategory && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {activeCategory.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-[#1F1F1F] border border-[#2C2C2C] hover:border-[#5919C2]/50 hover:bg-[#2C2C2C] transition-all duration-200"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  {TECH_ICONS[skill.icon] ? (
                    <img
                      src={TECH_ICONS[skill.icon]}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white text-xs font-bold">
                      {skill.name.slice(0, 2)}
                    </div>
                  )}
                </div>
                <span className="text-sm font-medium text-white text-center leading-tight">
                  {skill.name}
                </span>
                <div className="w-full bg-[#2C2C2C] rounded-full h-1 group-hover:bg-[#3A3A3A] transition-colors">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      delay: index * 0.05 + 0.2,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="h-1 rounded-full gradient-bg"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
