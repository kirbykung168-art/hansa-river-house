/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'wsrv.nl' },
      { protocol: 'https', hostname: 'passportandstamps.com' },
    ],
  },
};

export default nextConfig;
