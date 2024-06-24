/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  transpilePackages: [ "antd", "@ant-design", "rc-util", "rc-pagination", "rc-picker", "rc-notification", "rc-tooltip", "rc-tree", "rc-table" ],
  reactStrictMode: true,
  output: 'export',
  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/",
      }
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //   });

  //   return config;
  // },

};

export default nextConfig;
