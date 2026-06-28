import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Genera HTML/CSS/JS estáticos en carpeta out/ (sin servidor Node)
  output: "export",

  // Desactiva la optimización de imágenes de Next.js (incompatible con export estático)
  images: {
    unoptimized: true,
  },

  // Con dominio propio el sitio se sirve en la raíz, no necesita basePath.
  // BASE_PATH vacío hace que assetPath() deje las rutas tal cual.
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },

  // Permite el hot-reload (HMR) en dev desde dispositivos en la red local
  allowedDevOrigins: ['192.168.68.58'],
};

export default nextConfig;
