/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(frag|vert|glsl)$/,
      type: 'asset/source'
    });
    return config
  }
}

module.exports = nextConfig
