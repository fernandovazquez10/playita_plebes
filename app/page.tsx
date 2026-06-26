import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StorySection from "@/components/home/StorySection";
import MapSection from "@/components/home/MapSection";

export const metadata: Metadata = {
  title: "Playita Plebes — Cocina de Autor con Raíces Sinaloenses",
  description:
    "Descubre Playita Plebes: una propuesta de cocina de autor que honra la tradición del mar de Sinaloa, en colaboración con Casa Beltrán. Visítanos en Mazatlán.",
  openGraph: {
    title: "Playita Plebes — Cocina de Autor con Raíces Sinaloenses",
    description:
      "Una propuesta de cocina de autor que honra la tradición del mar de Sinaloa, elevada con técnica y pasión — en colaboración con Casa Beltrán.",
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
        body="Playita Plebes nació de la pasión por los sabores del Pacífico sinaloense. Lo que comenzó como una reunión entre amigos alrededor de una mesa con mariscos frescos, se transformó en una propuesta gastronómica que busca elevar los platillos tradicionales del mar con técnica de cocina de autor y productos de la más alta calidad."
        imageSrc="/inicio/historia.png"
        imageAlt="Platillos de cocina de autor con mariscos sinaloenses"
        imagePosition="left"
      />

      <StorySection
        heading="Tradición y Técnica"
        body="En colaboración con Casa Beltrán, cada platillo es un homenaje a la riqueza culinaria de Sinaloa. Respetamos las recetas que nos enseñó el mar, y las elevamos con ingredientes frescos, presentaciones cuidadas y una experiencia que invita a disfrutar sin prisa. Aquí, cada bocado cuenta una historia."
        imageSrc="/inicio/tradicion.jpg"
        imageAlt="Chef preparando platillos con técnica de autor"
        imagePosition="right"
      />

      <MapSection />
    </main>
  );
}
