/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    urlImports: [
      'https://cdn.skypack.dev', 
      'https://framer.com/',
      'https://esm.sh',
      'http://localhost:3000',
      'https://gist.githack.com/',
      'https://framer.github.io/'
    ],
  },
}

module.exports = nextConfig
