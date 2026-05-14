import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--accent)]/50 transition-colors duration-300">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="font-semibold text-[var(--fg)] text-base leading-snug group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
            >
              <GithubIcon size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-[var(--muted)] leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-md text-xs font-mono bg-[var(--surface-raised)] text-[var(--muted)] border border-[var(--border)]"
          >
            {t}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--accent)] hover:gap-2.5 transition-all"
      >
        Read more <ArrowRight size={13} />
      </Link>
    </article>
  );
}
