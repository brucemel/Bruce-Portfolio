"use client";

import { motion } from "framer-motion";

const techs = [
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "React", color: "#61dafb" },
  { name: "Node.js", color: "#68a063" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Tailwind CSS", color: "#38bdf8" },
  { name: "MongoDB", color: "#47a248" },
];

export function TechStack() {
  return (
    <div className="flex flex-wrap gap-2">
      {techs.map((tech, i) => (
        <motion.span
          key={tech.name}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--fg)]"
        >
          <span
            className="h-2 w-2 rounded-full shrink-0"
            style={{ backgroundColor: tech.color }}
          />
          {tech.name}
        </motion.span>
      ))}
    </div>
  );
}
