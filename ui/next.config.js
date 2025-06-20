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
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (!API_URL) {
      throw new Error("Environment variable NEXT_PUBLIC_API_URL is not defined.");
    }

    return [
      {
        source: '/api/upload',
        destination: `${API_URL}/upload`,
      },
      {
        source: '/api/download/:port',
        destination: `${API_URL}/download/:port`,
      },
    ];
  },
};

module.exports = nextConfig;

