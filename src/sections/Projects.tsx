import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";

export function Projects({ onOpen }: { onOpen: (slug: string) => void }) {
  const { t } = useLanguage();

  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-24">
        <Reveal>
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.projects.title}</h2>
          <p className="mb-12 max-w-lg text-muted">{t.projects.subtitle}</p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (slug: string) => void }) {
  const { t, lang } = useLanguage();
  const content = project[lang];
  const isShipped = project.statusKey === "shipped" || project.statusKey === "deployed";

  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent/50">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="mt-1 text-sm text-muted">{content.tagline}</p>
        </div>
        <span
          className={`whitespace-nowrap rounded-md border px-2 py-0.5 text-[11px] ${
            isShipped ? "border-accent/40 text-accent" : "border-border text-muted"
          }`}
        >
          {t.statusValues[project.statusKey]}
        </span>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{content.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((tech) => (
          <li key={tech} className="rounded-md bg-bg px-2 py-0.5 text-xs text-muted">
            {tech}
          </li>
        ))}
        {project.stack.length > 4 && (
          <li className="rounded-md bg-bg px-2 py-0.5 text-xs text-muted">+{project.stack.length - 4}</li>
        )}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <button
          onClick={() => onOpen(project.slug)}
          className="focus-ring inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 hover:text-accent"
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
    </article>
  );
}
