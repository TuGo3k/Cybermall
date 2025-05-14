/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
