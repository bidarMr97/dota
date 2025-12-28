const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  turbopack: {},
  output: "standalone",
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
