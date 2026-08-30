/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/explorations',
        destination: '/essays',
        permanent: true,
      },
      {
        source: '/explorations/:path*',
        destination: '/essays/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
