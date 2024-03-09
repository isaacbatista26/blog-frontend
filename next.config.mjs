/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "images.pexels.com",
      },
      {
        hostname: "source.unsplash.com",
      },
      {
        hostname: "cdn.thewirecutter.com",
      },
      {
        hostname: "drive.google.com",
      },
    ],
  },
};

export default nextConfig;
