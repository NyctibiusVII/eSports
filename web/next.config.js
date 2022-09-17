/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders
      }
    ]
  },
  generateEtags: false,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    SITE_URL_BASE:     process.env.SITE_URL_BASE,
    SITE_URL_BASE_API: process.env.SITE_URL_BASE_API
  },
  images: {
    // domains: ['exemple.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static-cdn.jtvnw.net'
        // port: '8080',
        // pathname: '/account123/**'
      }
    ]
  }
}

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `default-src * 'self' data: 'unsafe-inline' 'unsafe-eval' *`,
  }
]

module.exports = nextConfig
