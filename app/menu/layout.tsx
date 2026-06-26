import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menú",
  description:
    "Explora nuestro menú de mariscos, desayunos y bebidas. Sabores del mar en el corazón de la Ciudad de México.",
  openGraph: {
    title: "Menú | Playita Plebes",
    description:
      "Mariscos, desayunos y bebidas. Sabores del mar en el corazón de la Ciudad de México.",
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
