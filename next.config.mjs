/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [{
      hostname: "i.pravatar.cc",
      pathname: "/**",
      protocol: "https",
      port: ''
    }, {
      hostname: "images.unsplash.com",
      pathname: "/**",
      protocol: "https",
      port: ''
    }]
  }
};

export default nextConfig;
