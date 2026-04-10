/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  //https://i.ibb.co.com/PBkQBDG/email.webp


  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
