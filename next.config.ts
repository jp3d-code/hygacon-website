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
};

export default nextConfig;
