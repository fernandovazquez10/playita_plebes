import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StorySection from "@/components/home/StorySection";
import MapSection from "@/components/home/MapSection";

export const metadata: Metadata = {
  title: {
    absolute: "Playita Plebes — Desde el mar hasta tu mesa",
  },
  description:
    "Playita Plebes acerca la auténtica comida de mar al corazón de la Ciudad de México. Mariscos frescos, desayunos y bebidas con sabor de la costa.",
  openGraph: {
    title: "Playita Plebes — Desde el mar hasta tu mesa",
    description:
      "Acercamos la auténtica comida de mar al corazón de la Ciudad de México. Mariscos frescos con el sabor de la costa.",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Playita Plebes — Cocina de autor con raíces sinaloenses",
      },
    ],
    type: "website",
    locale: "es_MX",
    siteName: "Playita Plebes",
  },
};

export default function Home() {
  return (
    <main className="bg-brand-cream">
      <HeroSection ctaHref="/menu" />

      <StorySection
        heading="Nuestra Historia"
        body="Playita Plebes nace con una misión clara: acercar la auténtica comida de mar al corazón de la Ciudad de México. Inspirados por el recorrido de nuestro chef por las costas del país, donde aprendió el arte de los mariscos de manos de las cocineras de la región. Hoy ofrecemos un amplio menú que trae el sabor del Pacífico a la capital."
        imageSrc="/inicio/historia.png"
        imageAlt="Mariscos frescos preparados al estilo de la costa"
        imagePosition="left"
      />

      <StorySection
        heading="Tradición y Técnica"
        body='Cada platillo es el encuentro entre la tradición costera y la técnica refinada en cocinas de alto nivel. Respetamos las recetas que nos enseñó el mar y las elevamos con ingredientes de la más alta calidad. aquí "cada bocado cuenta una historia que viaja desde el Pacífico hasta tu mesa."'
        imageSrc="/inicio/tradicion.jpg"
        imageAlt="Chef preparando platillos con técnica de autor"
        imagePosition="right"
      />

      <MapSection />
    </main>
  );
}
