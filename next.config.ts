import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nocodestartup.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'e7.pngegg.com',
        port: '',
        pathname: '/**',
      },
      // Para futuras imágenes de proyectos
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      // Para GitHub avatars si usas GitHub API
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      // Para imágenes de proyectos en GitHub
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      // Amazon S3 bucket para imágenes de perfil y proyectos
      {
        protocol: 'https',
        hostname: 'personal-website-s3-bucket.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;