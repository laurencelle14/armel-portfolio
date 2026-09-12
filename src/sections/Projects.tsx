import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

export function Projects({ onOpen }: { onOpen: (slug: string) => void }) {
  const { t } = useLanguage();

  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-24">
        <Reveal>
          <p className="mb-3 font-mono text-sm text-muted">{t.projects.eyebrow}</p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.projects.title}</h2>
          <p className="mb-12 max-w-lg text-muted">{t.projects.subtitle}</p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08}>
              <ProjectCard project={project} onOpen={onOpen} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (slug: string) => void }) {
  const { t, lang } = useLanguage();
  const content = project[lang];

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 ease-smooth hover:border-text/30"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="mt-1 text-sm text-muted">{content.tagline}</p>
        </div>
        <span className="whitespace-nowrap rounded-full border border-border px-2.5 py-1 text-[11px] text-muted">
          {t.statusValues[project.statusKey]}
        </span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{content.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((tech) => (
          <span key={tech} className="rounded-full bg-bg px-2.5 py-1 text-xs text-muted">
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="rounded-full bg-bg px-2.5 py-1 text-xs text-muted">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <button
          onClick={() => onOpen(project.slug)}
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 hover:text-muted"
        >
          {t.projects.viewDetails}
          <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.name} source code`}
            className="focus-ring text-muted transition-colors duration-200 hover:text-text"
          >
            <Github size={16} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
