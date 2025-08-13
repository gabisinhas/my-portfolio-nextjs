import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    distDir:'dist',
    images:{
      unoptimized: true
    },
    basePath: '/next-portfolio',
    assetPrefix: '/next-portfolio'
};

export default nextConfig;
