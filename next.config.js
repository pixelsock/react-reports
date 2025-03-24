/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure for GitHub Pages
  output: 'export',
  // GitHub Pages configuration
  basePath: process.env.GITHUB_ACTIONS ? '/react-reports' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/react-reports/' : '',
  images: {
    unoptimized: true,
  },
  // Disable server-side features for static export
  trailingSlash: true,
}

module.exports = nextConfig
