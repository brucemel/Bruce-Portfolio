import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { TechStack } from "@/components/TechStack";
import { BlogPostCard } from "@/components/BlogPostCard";
import { SectionReveal } from "@/components/SectionReveal";
import { getFeaturedProjects } from "@/lib/projects";
import { getLatestBlogPosts } from "@/lib/blog";

export default function HomePage() {
  const projects = getFeaturedProjects();
  const posts = getLatestBlogPosts(2);

  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <SectionReveal>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-[var(--fg)] mb-1">
                Featured Projects
              </h2>
              <p className="text-sm text-[var(--muted)]">
                Things I&apos;ve built and what I learned from them
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-[var(--accent)] hover:gap-3 transition-all font-medium"
            >
              All projects <ArrowRight size={14} />
            </Link>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <SectionReveal key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-6 sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--accent)] font-medium"
          >
            All projects <ArrowRight size={14} />
          </Link>
        </SectionReveal>
      </section>

      {/* Tech Stack */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <SectionReveal>
          <h2 className="text-2xl font-bold text-[var(--fg)] mb-2">
            Tech Stack
          </h2>
          <p className="text-sm text-[var(--muted)] mb-8">
            Technologies I work with daily
          </p>
          <TechStack />
        </SectionReveal>
      </section>

      {/* About Preview */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-[var(--border)]">
        <SectionReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[var(--fg)] mb-4">
                About Me
              </h2>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                I&apos;m a software development student at BYU-Idaho (online),
                based in Trujillo, Peru. I started with vanilla JavaScript and
                worked my way through backend systems with Node.js and Express,
                then forward to modern full-stack development with Next.js and
                TypeScript.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                I&apos;m particularly interested in the intersection of AI and
                web development — building applications that feel intelligent
                without sacrificing reliability or performance.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:gap-3 transition-all"
              >
                Read my story <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Next.js + TypeScript", sub: "Primary stack" },
                { label: "Node.js + Express", sub: "REST APIs" },
                { label: "PostgreSQL + MongoDB", sub: "Databases" },
                { label: "Anthropic API", sub: "AI integration" },
              ].map(({ label, sub }) => (
                <div
                  key={label}
                  className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]"
                >
                  <p className="text-sm font-medium text-[var(--fg)] mb-0.5">
                    {label}
                  </p>
                  <p className="text-xs text-[var(--muted)]">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* Latest Posts */}
      {posts.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-16 border-t border-[var(--border)]">
          <SectionReveal>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-[var(--fg)] mb-1">
                  Latest Writing
                </h2>
                <p className="text-sm text-[var(--muted)]">
                  Notes on what I&apos;m building and learning
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm text-[var(--accent)] font-medium hover:gap-3 transition-all"
              >
                All posts <ArrowRight size={14} />
              </Link>
            </div>
            <div className="max-w-2xl">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          </SectionReveal>
        </section>
      )}

      {/* Contact CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-t border-[var(--border)]">
        <SectionReveal>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-10 text-center">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-3">
              Open to opportunities
            </h2>
            <p className="text-[var(--muted)] mb-8 max-w-md mx-auto">
              I&apos;m actively looking for remote full-stack roles at US
              companies. If you&apos;re building something interesting,
              let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Get In Touch <ArrowRight size={15} />
            </Link>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
