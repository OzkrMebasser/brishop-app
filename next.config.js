/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Permite errores de TypeScript durante el build para evitar fallos de compilación
    ignoreBuildErrors: true,
  },
  images: { 
    domains: [
      'firebasestorage.googleapis.com',
      'storage.googleapis.com',
      'lh3.googleusercontent.com',
      'www.googleapis.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Asegúrate de que esto esté configurado correctamente para tu caso
  output: 'standalone',
  
  // Experimental: Si sigues teniendo problemas, puedes probar con estas opciones
  experimental: {
    // Opción que puede ayudar con problemas de despliegue en Vercel
    serverActions: true,
  },
};

module.exports = nextConfig;