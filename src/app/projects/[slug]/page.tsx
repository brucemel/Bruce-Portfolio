import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProject, getProjectSlugs } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = getProject(slug);
    return {
      title: frontmatter.title,
      description: frontmatter.description,
    };
  } catch {
    return { title: "Project Not Found" };
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;

  let project;
  try {
    project = getProject(slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = project;
  const date = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors mb-10"
      >
        <ArrowLeft size={14} />
        Back to projects
      </Link>

      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] mb-4 leading-tight">
          {frontmatter.title}
        </h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
          {frontmatter.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {frontmatter.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {frontmatter.github && (
            <a
              href={frontmatter.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <GithubIcon size={15} />
              View Source
            </a>
          )}
          {frontmatter.demo && (
            <a
              href={frontmatter.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm hover:opacity-90 transition-opacity"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
          <span className="text-xs text-[var(--muted)] font-mono ml-auto">
            {date}
          </span>
        </div>
      </header>

      <article className="prose prose-sm sm:prose max-w-none">
        <MDXRemote source={content} />
      </article>
    </div>
  );
}
