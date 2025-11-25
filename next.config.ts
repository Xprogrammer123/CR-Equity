import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ["randomuser.me"], // ✅ add this line
  },
};

export default nextConfig;
