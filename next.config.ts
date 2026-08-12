import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [{ protocol: "https", hostname: "nurdakhil.com" }],
  },
  async redirects() {
    return [
      { source: "/products/al-ramadi", destination: "/products/nur-alshayb", permanent: true },
      { source: "/products/ushabi-lilshar", destination: "/products/nur-alshayb", permanent: true },
      { source: "/products/albakhakh", destination: "/products/nur-alshayb", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [{ key: "X-Frame-Options", value: "DENY" }],
      },
    ];
  },
};

export default nextConfig;
