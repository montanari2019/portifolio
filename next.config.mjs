/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "montanarisoftimages.s3.us-east-2.amazonaws.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
