// next.config.js
import path from "path";

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve('./src');
    return config;
  },
};

export default nextConfig;
