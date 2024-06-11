/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/",
      }
    ]
  }
};

export default nextConfig;
