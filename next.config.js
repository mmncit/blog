/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  // Add basePath
  basePath: "/blog",
};

module.exports = nextConfig;
