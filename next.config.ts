import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    devtoolSegmentExplorer: false,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "github.githubassets.com" },
      { protocol: "https", hostname: "www.youtube.com" },
      { protocol: "https", hostname: "zenn.dev" },
      { protocol: "https", hostname: "x.com" },
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
