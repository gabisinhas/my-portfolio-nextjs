import type { NextConfig } from "next";

const repoName = "next-portfolio"; 

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
