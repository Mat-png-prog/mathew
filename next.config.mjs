/** @type {import('next').NextConfig} */
const nextConfig = {
  
  // Configure security headers
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          // Prevent browsers from incorrectly detecting non-scripts as scripts
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Prevent embedding of your site in iframes on other domains
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // XSS protection - modern browsers have this built-in
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Strict Transport Security - force HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // Referrer Policy - control how much referrer information is sent
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          // Content Security Policy - restrict resources that can be loaded
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'",
          },
            {
            // The Permissions-Policy header controls access to browser features
            key: 'Permissions-Policy',
            // The empty parentheses () mean these features are blocked for all origins
            // camera=() - Blocks camera access completely
            // microphone=() - Blocks microphone access completely
            // geolocation=() - Blocks location access completely
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
    ];
  },
  cacheMaxMemorySize: 3000,
  experimental:{
    serverActions: {
      enabled: true,
    },
    serverComponentsExternalPackages:["node/rs/argon2"]
  },
   images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "unsplash.com"
          },
          {
            protocol: "https",
            hostname: "*.public.blob.vercel-storage.com"// Allow all subdomains of vercel-storage.com
          }
        ]
      },
  productionBrowserSourceMaps: false,
  reactProductionProfiling: false,
  reactStrictMode: true,
};

export default nextConfig;
