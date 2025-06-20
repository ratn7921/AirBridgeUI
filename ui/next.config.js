const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    if (!API_URL) {
      throw new Error("NEXT_PUBLIC_API_URL is not defined");
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
