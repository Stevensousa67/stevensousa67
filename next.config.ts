import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => [
    {
      source: "/:path*.pdf",
      headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stevensousa-s3.s3.us-east-2.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    useTypeScriptCli: true,
  },
};

export default nextConfig;
