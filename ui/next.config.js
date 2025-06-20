// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   async rewrites() {
//     return [
//       {
//         source: '/api/upload',
//         destination: 'http://localhost:8080/upload',
//       },
//       {
//         source: '/api/download/:port',
//         destination: 'http://localhost:8080/download/:port',
//       },
//     ];
//   },
// }

// module.exports = nextConfig





/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/upload',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/upload`,
      },
      {
        source: '/api/download/:port',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/download/:port`,
      },
    ];
  },
};

module.exports = nextConfig;
