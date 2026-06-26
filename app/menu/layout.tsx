import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menú — Playita Plebes",
  description:
    "Explora nuestro menú de mariscos sinaloenses, desayunos y bebidas. Cocina de autor × Casa Beltrán.",
  openGraph: {
    title: "Menú — Playita Plebes",
    description:
      "Mariscos, desayunos y bebidas. Cocina de autor con raíces sinaloenses en colaboración con Casa Beltrán.",
    images: [
      {
        url: "/og-menu.jpg",
        width: 1200,
        height: 630,
        alt: "Menú de mariscos, desayunos y bebidas de Playita Plebes",
      },
    ],
    type: "website",
    locale: "es_MX",
    siteName: "Playita Plebes",
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
