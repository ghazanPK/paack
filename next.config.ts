import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove remote patterns since we're using local images now
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
