import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  ctaHref: string; // "/menu"
}

export default function HeroSection({ ctaHref }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center bg-dark-navy px-4 py-10 sm:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl text-center">
        <h1 className="mb-6 font-display text-3xl font-bold tracking-tight text-brand-cream sm:text-4xl lg:text-5xl">
          Playita Plebes
        </h1>

        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/5] overflow-hidden rounded-lg">
          <Image
            src="/inicio/banner.png"
            alt="Playita Plebes banner"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <p className="mt-6 font-body text-lg leading-relaxed text-brand-cream/90 sm:text-xl lg:text-2xl">
          Cocina de autor con raíces sinaloenses
        </p>

        <p className="mt-4 font-body text-base leading-relaxed text-neutral-200 sm:text-lg">
          Una propuesta que honra la tradición del mar de Sinaloa, elevada con
          técnica y pasión — en colaboración con Casa Beltrán.
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
