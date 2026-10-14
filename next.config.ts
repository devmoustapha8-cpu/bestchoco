import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
      },
    ],
  },
  // Plus de config Supabase pas besoin pour vitrine 2 articles
};

export default nextConfig;