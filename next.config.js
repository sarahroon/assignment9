// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Experimental Turbopack settings (required for Next 16+)
  experimental: {
    turbo: {}, // Enables Turbopack safely
  },

  // Optional: keep custom webpack configuration if you have any
  webpack(config, options) {
    // You can add custom rules here if needed
    // Example: config.module.rules.push(...)
    return config;
  },

  // Environment variables can be loaded from .env.local automatically
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },

  // Optional: Vercel optimization
  swcMinify: true,
};

export default nextConfig;
