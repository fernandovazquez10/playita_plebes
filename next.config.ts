import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Genera HTML/CSS/JS estáticos en carpeta out/ (sin servidor Node)
  output: "export",

  // Desactiva la optimización de imágenes de Next.js (incompatible con export estático)
  images: {
    unoptimized: true,
  },

  // Permite el hot-reload (HMR) en dev desde dispositivos en la red local
  allowedDevOrigins: ['192.168.68.58'],

  // Para despliegue en GitHub Pages, descomentar las siguientes líneas
  // reemplazando 'nombre-del-repo' con el nombre real del repositorio:
  // basePath: '/nombre-del-repo',
  // assetPrefix: '/nombre-del-repo/',
};

export default nextConfig;
