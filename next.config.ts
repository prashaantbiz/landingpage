import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep production builds separate from the live development server cache.
  // This prevents `next build` from invalidating dev CSS and JavaScript chunks.
  distDir: process.env.npm_lifecycle_event === "build" ? ".next-production" : ".next",
};

export default nextConfig;
