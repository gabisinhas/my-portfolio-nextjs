import type { NextConfig } from "next";

const repoName = "my-portfolio-nextjs";

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
