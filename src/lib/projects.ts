import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project, ProjectFrontmatter } from "./types";

const projectsDir = path.join(process.cwd(), "content/projects");

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(projectsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getProject(slug: string): {
  frontmatter: ProjectFrontmatter;
  content: string;
} {
  const raw = fs.readFileSync(
    path.join(projectsDir, `${slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(raw);
  return { frontmatter: data as ProjectFrontmatter, content };
}

export function getAllProjects(): Project[] {
  return getProjectSlugs()
    .map((slug) => {
      const { frontmatter } = getProject(slug);
      return { slug, ...frontmatter };
    })
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}
