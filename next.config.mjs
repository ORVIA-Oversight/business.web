/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: '/media/business/morrow-demo.mp4',
        destination: 'https://raw.githubusercontent.com/ORVIA-Oversight/orvia-web-showcase/fa7811c0201e7a62aa1c41d429b990481fe8f27b/Create_a_second_cinematic_p%20(2).mp4'
      }
    ]
  }
}
export default nextConfig
