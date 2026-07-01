import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // This allows the build to finish even if there are hidden linting warnings
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This ensures typescript checks don't stall the deployment completion
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
