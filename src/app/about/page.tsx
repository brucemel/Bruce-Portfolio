import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Code2, Globe } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bruce Melendez — full-stack developer based in Trujillo, Peru, studying at BYU-Idaho and building toward remote US roles.",
};

const courses = [
  {
    code: "WDD 231",
    name: "Frontend Development",
    tech: "HTML, CSS, Vanilla JS",
  },
  {
    code: "WDD 330",
    name: "JavaScript Applications",
    tech: "Vanilla JS, Vite",
  },
  {
    code: "CSE 340",
    name: "Web Backend Development",
    tech: "Node.js, Express, PostgreSQL, EJS",
  },
  {
    code: "CSE 341",
    name: "Web Services",
    tech: "Node.js, Express, MongoDB, REST APIs",
  },
  {
    code: "WDD 430",
    name: "Web Frontend Development II",
    tech: "Next.js, TypeScript, React",
  },
];

const timeline = [
  {
    year: "2022",
    event: "Started studying Software Development at BYU-Idaho Online",
  },
  {
    year: "2023",
    event:
      "Built first full-stack app: Sleep Outside e-commerce site with Vanilla JS",
  },
  {
    year: "2024 Q1",
    event:
      "Completed CSE 340 — built CSE Motors, a full dealership system with JWT auth",
  },
  {
    year: "2024 Q3",
    event:
      "Completed CSE 341 — learned MongoDB and REST API design with Express",
  },
  {
    year: "2024 Q4",
    event:
      "Integrated the Anthropic API into my library project — first AI-powered app",
  },
  {
    year: "2025",
    event:
      "Completed WDD 430 with Next.js and TypeScript — now building this portfolio",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <SectionReveal>
        <h1 className="text-4xl font-bold text-[var(--fg)] mb-6">About Me</h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed mb-4">
          I&apos;m Bruce Melendez, a software development student at BYU-Idaho
          Online, based in Trujillo, Peru. I build full-stack web applications
          and I&apos;m particularly drawn to the intersection of AI and
          production software.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-4">
          My path into software wasn&apos;t linear. I started with the basics —
          HTML, CSS, vanilla JavaScript — and worked my way through the backend
          with Node.js and Express, learning what actually happens between a
          browser request and a database response. That foundation made
          everything that came after much easier to understand.
        </p>
        <p className="text-[var(--muted)] leading-relaxed mb-12">
          Today I build with Next.js and TypeScript on the frontend, Node.js and
          PostgreSQL on the backend, and I&apos;ve been exploring how to
          integrate LLMs into real applications without the AI being a gimmick —
          it has to solve an actual problem.
        </p>
      </SectionReveal>

      {/* What I value */}
      <SectionReveal delay={0.1}>
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {[
            {
              icon: Code2,
              title: "Craft over speed",
              desc: "I'd rather take time to understand a problem than ship something I can't maintain.",
            },
            {
              icon: Globe,
              title: "Remote-first mindset",
              desc: "I write clearly, communicate proactively, and document decisions — the habits that make remote work work.",
            },
            {
              icon: GraduationCap,
              title: "Always learning",
              desc: "I treat every project as a structured opportunity to close a knowledge gap.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]"
            >
              <Icon size={20} className="text-[var(--accent)] mb-3" />
              <h3 className="font-semibold text-[var(--fg)] text-sm mb-1.5">
                {title}
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* Education */}
      <SectionReveal delay={0.15}>
        <h2 className="text-xl font-bold text-[var(--fg)] mb-6">Education</h2>
        <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] mb-4">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="font-semibold text-[var(--fg)]">
                B.S. Software Development
              </h3>
              <p className="text-sm text-[var(--muted)]">
                BYU-Idaho · Online · In Progress
              </p>
            </div>
            <span className="text-xs font-mono text-[var(--muted)] shrink-0">
              2022 →
            </span>
          </div>
          <div className="space-y-2">
            {courses.map((c) => (
              <div
                key={c.code}
                className="flex items-baseline gap-3 text-sm"
              >
                <span className="font-mono text-xs text-[var(--accent)] shrink-0 w-16">
                  {c.code}
                </span>
                <span className="text-[var(--fg)]">{c.name}</span>
                <span className="text-[var(--muted)] text-xs hidden sm:block">
                  {c.tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Timeline */}
      <SectionReveal delay={0.2}>
        <h2 className="text-xl font-bold text-[var(--fg)] mb-6 mt-12">
          Timeline
        </h2>
        <div className="relative pl-6 border-l border-[var(--border)] space-y-6">
          {timeline.map(({ year, event }) => (
            <div key={year} className="relative">
              <span className="absolute -left-[25px] top-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="text-xs font-mono text-[var(--accent)] block mb-0.5">
                {year}
              </span>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {event}
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal delay={0.25}>
        <div className="mt-16 pt-10 border-t border-[var(--border)]">
          <p className="text-[var(--muted)] mb-6">
            I&apos;m actively looking for remote full-stack roles at US
            companies. If you think I could be a fit for your team, let&apos;s
            talk.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Get In Touch <ArrowRight size={15} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-[var(--fg)] font-medium text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
