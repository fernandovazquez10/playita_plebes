import Image from "next/image";
import type { Chef } from "@/types";

interface ChefCardProps {
  chef: Chef;
}

export default function ChefCard({ chef }: ChefCardProps) {
  return (
    <article className="overflow-hidden rounded-lg bg-brand-cream shadow-sm">
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={chef.imageUrl}
          alt={chef.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="font-display text-lg text-dark-navy sm:text-xl">
          {chef.name}
        </h3>
        <p className="mt-2 font-body text-sm leading-relaxed text-neutral-500 sm:text-base">
          {chef.bio}
        </p>
      </div>
    </article>
  );
}
