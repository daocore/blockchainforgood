/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // removeConsole: {
    //   exclude: ['error'],
    // },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'beta.moledao.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'a.moledao.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
