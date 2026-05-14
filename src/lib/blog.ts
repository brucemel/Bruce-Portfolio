import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, BlogFrontmatter } from "./types";

const blogDir = path.join(process.cwd(), "content/blog");

export function getBlogSlugs(): string[] {
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getBlogPost(slug: string): {
  frontmatter: BlogFrontmatter;
  content: string;
} {
  const raw = fs.readFileSync(path.join(blogDir, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return { frontmatter: data as BlogFrontmatter, content };
}

export function getAllBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => {
      const { frontmatter } = getBlogPost(slug);
      return { slug, ...frontmatter };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getLatestBlogPosts(count = 3): BlogPost[] {
  return getAllBlogPosts().slice(0, count);
}
