/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // removeConsole: {
    //   exclude: ['error'],
    // },
  },
  output: "standalone",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'beta.moledao.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.moledao.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
