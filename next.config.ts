import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // next-mdx-remote does its own compilation, so .mdx files don't need
  // the built-in Next.js MDX loader.

  // Allow images from common external sources if needed later
  images: {
    remotePatterns: [],
  },

  // Suppress build warnings from CommonJS modules in server context
  serverExternalPackages: ["gray-matter"],
};

export default nextConfig;
