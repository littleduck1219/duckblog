/** @type {{output: string, assetPrefix: string, experimental: {appDir: boolean}}} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  assetPrefix: "/duckblog/",
};
module.exports = nextConfig;
