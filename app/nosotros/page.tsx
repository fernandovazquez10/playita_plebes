import type { Metadata } from "next";
import Image from "next/image";
import chefsData from "@/data/chefs.json";
import type { Chef } from "@/types";

export const metadata: Metadata = {
  title: "Nosotros — Playita Plebes × Casa Beltrán",
  description:
    "Conoce a los chefs detrás de Playita Plebes: talento sinaloense que eleva los mariscos del Pacífico con técnica de cocina de autor.",
  openGraph: {
    title: "Nosotros — Playita Plebes × Casa Beltrán",
    description:
      "Conoce a los chefs detrás de Playita Plebes: talento sinaloense que eleva los mariscos del Pacífico con técnica de cocina de autor.",
    images: [
      {
        url: "/og-chefs.jpg",
        width: 1200,
        height: 630,
        alt: "Los chefs de Playita Plebes — talento sinaloense",
      },
    ],
    type: "website",
    locale: "es_MX",
    siteName: "Playita Plebes",
  },
};

export default function NosotrosPage() {
  const chefs = chefsData as Chef[];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-16 text-center font-display text-4xl text-dark-navy sm:text-5xl">
        Nuestros Chefs
      </h1>

      <div className="mx-auto max-w-6xl space-y-24">
        {chefs.map((chef, index) => {
          const imageLeft = index % 2 === 0;
          return (
            <article
              key={chef.id}
              className={`flex flex-col gap-8 md:items-center ${
                imageLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Chef image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl md:w-1/2">
                <Image
                  src={chef.imageUrl}
                  alt={chef.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Chef info */}
              <div className="flex flex-col justify-center md:w-1/2">
                <h2 className="font-display text-3xl text-brand-teal lg:text-4xl">
                  {chef.name}
                </h2>
                <p className="mt-4 font-body text-base leading-relaxed text-dark-navy/80 lg:text-lg">
                  {chef.bio}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
