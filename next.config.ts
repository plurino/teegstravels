import type { NextConfig } from "next";

const isGithubActions = Boolean(process.env.GITHUB_ACTIONS);
let repo = '';
if (process.env.GITHUB_REPOSITORY) {
  repo = '/' + process.env.GITHUB_REPOSITORY.split('/')[1];
} else if (isGithubActions) {
  repo = '/teegstravels';
}

const basePath = isGithubActions ? repo : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
