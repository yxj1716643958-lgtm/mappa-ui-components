/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  // Fix for Vercel deployment
  experimental: {
    esmExternals: false
  }
}

module.exports = nextConfig
