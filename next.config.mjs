/** @type {import("next").NextConfig} */
const nextConfig = {
  async rewrites() {
    return [{ source: '/favicon.ico', destination: '/logo.svg' }];
  },
};
export default nextConfig;
