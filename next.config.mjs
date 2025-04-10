/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheMaxMemorySize: 3000,
  experimental:{
    serverActions: {
      enabled: true,
    },
    serverComponentsExternalPackages:["node/rs/argon2"]
  },
  productionBrowserSourceMaps: false,
  reactProductionProfiling: false,
  reactStrictMode: true,
};

export default nextConfig;
