// next.config.js
import { fileURLToPath } from "url";
import { dirname } from "path";

/** @type {import('next').NextConfig} */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  // Only add this if you need Turbopack root defined
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
