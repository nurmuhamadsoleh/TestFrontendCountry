/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://www.google.com https://maps.googleapis.com https://goo.gl;",
          },
        ],
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
