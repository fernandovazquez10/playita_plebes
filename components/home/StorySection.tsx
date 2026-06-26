import FadeInImage from "@/components/ui/FadeInImage";

interface StorySectionProps {
  heading: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

export default function StorySection({
  heading,
  body,
  imageSrc,
  imageAlt,
  imagePosition,
}: StorySectionProps) {
  return (
    <section className="bg-brand-cream px-4 py-16 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-6xl flex-col gap-8 md:items-center ${
          imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg md:w-1/2">
          <FadeInImage
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center md:w-1/2">
          <h2 className="font-display text-3xl text-dark-navy lg:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-dark-navy/80 lg:text-lg">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
