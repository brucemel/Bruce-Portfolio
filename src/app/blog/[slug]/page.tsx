import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = getBlogPost(slug);
    return {
      title: frontmatter.title,
      description: frontmatter.description,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        type: "article",
        publishedTime: frontmatter.date,
      },
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let post;
  try {
    post = getBlogPost(slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = post;
  const date = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors mb-10"
      >
        <ArrowLeft size={14} />
        Back to writing
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <time
            dateTime={frontmatter.date}
            className="text-xs font-mono text-[var(--muted)]"
          >
            {date}
          </time>
          <span className="text-[var(--border)]">·</span>
          <span className="text-xs text-[var(--muted)]">
            {frontmatter.readTime}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--fg)] leading-tight mb-4">
          {frontmatter.title}
        </h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
          {frontmatter.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-xs font-mono bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <article className="prose prose-sm sm:prose max-w-none">
        <MDXRemote source={content} />
      </article>

      <div className="mt-16 pt-8 border-t border-[var(--border)]">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
        >
          <ArrowLeft size={14} />
          All posts
        </Link>
      </div>
    </div>
  );
}
