import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → deployable to GitHub Pages (served at /Portfolio)
  output: "export",
  basePath: "/Portfolio",
  images: { unoptimized: true },

  // NOTE: cacheComponents/partialPrefetching (PPR) cannot be combined with
  // `output: "export"`, so they stay disabled here.
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
