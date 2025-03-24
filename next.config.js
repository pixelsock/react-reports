/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure for Vercel deployment
  output: 'standalone',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
