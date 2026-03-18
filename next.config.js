// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Enable Turbopack explicitly (optional)
  turbopack: {},

  // Any other Next.js options you need
  images: {
    domains: ['your-image-domain.com'], // example if you load images from external sources
  },
};

export default nextConfig;
