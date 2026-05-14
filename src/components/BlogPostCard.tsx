import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/types";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group border-b border-[var(--border)] py-6 last:border-0">
      <div className="flex items-center gap-3 mb-2">
        <time
          dateTime={post.date}
          className="text-xs text-[var(--muted)] font-mono"
        >
          {date}
        </time>
        <span className="text-[var(--border)]">·</span>
        <span className="text-xs text-[var(--muted)]">{post.readTime}</span>
      </div>

      <h3 className="font-semibold text-[var(--fg)] text-base mb-2 group-hover:text-[var(--accent)] transition-colors leading-snug">
        <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
          {post.title}
        </Link>
      </h3>

      <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
        {post.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-xs font-mono bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-[var(--accent)] shrink-0 ml-4"
          tabIndex={-1}
          aria-hidden
        >
          Read <ArrowRight size={12} />
        </Link>
      </div>
    </article>
  );
}
