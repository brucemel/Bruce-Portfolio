import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionReveal } from "@/components/SectionReveal";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack projects built with Next.js, Node.js, PostgreSQL, and more.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <SectionReveal>
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[var(--fg)] mb-3">Projects</h1>
          <p className="text-[var(--muted)] max-w-lg leading-relaxed">
            A collection of things I&apos;ve built — from backend systems to
            AI-powered applications. Each one taught me something new.
          </p>
        </div>
      </SectionReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <SectionReveal key={project.slug} delay={i * 0.07}>
            <ProjectCard project={project} />
          </SectionReveal>
        ))}
      </div>
    </div>
  );
}
