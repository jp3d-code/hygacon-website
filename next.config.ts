import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        hostname: "www.hlcsac.com",
        protocol: "https",
      },
    ],
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
