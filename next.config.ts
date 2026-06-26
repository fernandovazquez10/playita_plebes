import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "playita_plebes";

const nextConfig: NextConfig = {
  // Genera HTML/CSS/JS estáticos en carpeta out/ (sin servidor Node)
  output: "export",

  // Desactiva la optimización de imágenes de Next.js (incompatible con export estático)
  images: {
    unoptimized: true,
  },

  // En producción (GitHub Pages) el sitio se sirve en /playita_plebes/
  // En desarrollo local se sirve en la raíz.
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,

  // Expone el basePath al cliente para prefijar manualmente las imágenes
  // (next/image con unoptimized no lo hace automáticamente).
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
  },

  // Permite el hot-reload (HMR) en dev desde dispositivos en la red local
  allowedDevOrigins: ['192.168.68.58'],
};

export default nextConfig;
