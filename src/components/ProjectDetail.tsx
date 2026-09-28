import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

export function ProjectDetail({ project, onBack }: { project: Project; onBack: () => void }) {
  const { t, lang } = useLanguage();
  const content = project[lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-content px-6 py-16"
    >
      <button
        onClick={onBack}
        className="focus-ring mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-text"
      >
        <ArrowLeft size={16} />
        {t.projects.back}
      </button>

      <p className="mb-2 font-mono text-sm text-muted">{t.statusValues[project.statusKey]}</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.name}</h1>
      <p className="mt-3 max-w-xl text-lg text-muted">{content.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full border border-border bg-surface px-3 py-1 text-xs">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 text-sm text-muted hover:text-text">
            <Github size={16} /> {t.projects.source}
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 text-sm text-muted hover:text-text">
            <ExternalLink size={16} /> {t.projects.demo}
          </a>
        )}
      </div>

      {project.image && (
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          decoding="async"
          className="mt-10 w-full rounded-2xl border border-border"
        />
      )}

      <div className="mt-16 grid gap-12 md:grid-cols-3">
        <div className="space-y-10 md:col-span-2">
          <Block title={t.projects.overview} text={content.overview} />
          <Block title={t.projects.problem} text={content.problem} />
          <Block title={t.projects.solution} text={content.solution} />
          <List title={t.projects.features} items={content.features} />
          <List title={t.projects.challenges} items={content.challenges} />
          <List title={t.projects.learned} items={content.learned} />
        </div>

        <aside>
          <div className="rounded-2xl border border-border bg-surface p-6 md:sticky md:top-24">
            <p className="mb-3 text-sm font-medium text-muted">{t.projects.details}</p>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">{t.projects.role}</dt>
                <dd className="text-right">{content.role}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">{t.projects.status}</dt>
                <dd className="text-right">{t.statusValues[project.statusKey]}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">{title}</h2>
      <p className="leading-relaxed text-text">{text}</p>
    </div>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-text">
            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
