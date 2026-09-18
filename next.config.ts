import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Custom domain (teganjohnson.com) serves from root — no subfolder prefix needed
  basePath: '',
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
