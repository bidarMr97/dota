const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  turbopack: {},
  output: "standalone",
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
