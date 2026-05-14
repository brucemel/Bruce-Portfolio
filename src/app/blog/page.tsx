import type { Metadata } from "next";
import { BlogPostCard } from "@/components/BlogPostCard";
import { SectionReveal } from "@/components/SectionReveal";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing about full-stack development, AI integration, and lessons from building real applications.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <SectionReveal>
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[var(--fg)] mb-3">Writing</h1>
          <p className="text-[var(--muted)] leading-relaxed">
            Notes on full-stack development, AI integration, and things I learn
            while building. Written for developers who prefer code over theory.
          </p>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <div>
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </SectionReveal>
    </div>
  );
}
