// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {}, // this tells Next.js you are okay with Turbopack
  },
  // Optional: if you had custom webpack before, you can keep it:
  webpack(config, options) {
    return config;
  },
};

export default nextConfig;
