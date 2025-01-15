import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Ensures proper folder structure for static routes
};

export default nextConfig;
