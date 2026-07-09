"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

interface HeroSectionProps {
  ctaHref: string; // "/menu"
}

export default function HeroSection({ ctaHref }: HeroSectionProps) {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-10 sm:py-20 sm:px-6 lg:px-8 bg-dark-navy">
      {/* Todo el hero aparece junto cuando el fondo termina de cargar */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-out ${
          bgLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Imagen de fondo */}
        <Image
          src={assetPath("/inicio/hero-bg.jpg")}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
          onLoad={() => setBgLoaded(true)}
        />
        {/* Overlay degradado para legibilidad del texto */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-dark-navy/40 via-dark-navy/60 to-dark-navy/90"
          aria-hidden="true"
        />
      </div>

      <div
        className={`relative z-10 mx-auto w-full max-w-3xl text-center transition-opacity duration-700 ease-out ${
          bgLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={assetPath("/logo.png")}
          alt="Playita Plebes logo"
          width={400}
          height={400}
          className="mx-auto h-48 w-auto sm:h-64 lg:h-80"
          priority
        />

        <p className="mt-6 font-body text-lg italic leading-relaxed text-brand-cream/90 sm:text-xl lg:text-2xl">
          &quot;Desde el mar hasta tu mesa&quot;
        </p>

        <p className="mt-4 font-body text-base leading-relaxed text-neutral-200 sm:text-lg">
          Llevamos los sabores frescos de la cocina del mar hasta el corazón de la capital.
          <br />
          Mariscos preparados con tradición, ingredientes de la más alta calidad
          <br />
          y el inconfundible sazón costero en cada platillo.
        </p>

        <Link
          href={ctaHref}
          className="mt-10 inline-block rounded-full bg-brand-teal px-8 py-3 font-body text-sm font-medium text-dark-navy transition-colors hover:bg-brand-teal/90 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 focus:ring-offset-dark-navy sm:text-base"
        >
          Ver Menú
        </Link>
      </div>
    </section>
  );
}
