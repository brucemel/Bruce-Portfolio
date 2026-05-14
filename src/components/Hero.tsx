"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden"
      >
        <div
          className="mt-[-100px] h-[600px] w-[600px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="text-sm font-mono text-[var(--accent)] mb-4 tracking-wider"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--fg)] leading-[1.05] mb-6"
          >
            Bruce Melendez
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-xl sm:text-2xl font-medium text-[var(--muted)] mb-6 leading-relaxed"
          >
            Full-Stack Developer specializing in{" "}
            <span className="text-[var(--accent)]">
              AI-integrated web applications
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-base sm:text-lg text-[var(--muted)] mb-10 max-w-xl leading-relaxed"
          >
            I build production-ready REST APIs and modern Next.js applications.
            Currently studying Software Development at BYU-Idaho and looking for
            remote full-stack roles at US companies.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-[var(--fg)] font-medium text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              Get In Touch
            </Link>
            <div className="flex items-center gap-2 ml-2">
              <a
                href="https://github.com/brucemel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)] transition-colors"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com/in/bruce-melendez-62212639a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--fg)] hover:bg-[var(--surface)] transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
