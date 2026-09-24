import { createFileRoute } from "@tanstack/react-router";
import { Camera } from "lucide-react";
import { galleryItems } from "@/lib/garden";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — BloomNest" },
      {
        name: "description",
        content:
          "A masonry garden gallery — roses, tulips, lavender, sunflowers and quiet greenhouse corners captured in soft light.",
      },
      { property: "og:title", content: "Gallery — BloomNest" },
      {
        property: "og:description",
        content:
          "A masonry garden gallery captured in soft, botanical light.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Moments from the garden</span>
        <h1 className="mt-3 font-display text-5xl font-medium text-sage-deep sm:text-6xl">
          A gallery of quiet mornings
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Collected from borders, windowsills and greenhouse corners — proof
          that beauty grows in every corner we tend.
        </p>
      </Reveal>

      <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {galleryItems.map((item, i) => (
          <Reveal
            key={item.caption}
            delay={(i % 3) * 110}
            className="break-inside-avoid"
          >
            <figure className="group relative overflow-hidden rounded-3xl shadow-soft transition-shadow duration-300 hover:shadow-lift">
              <img
                src={item.image}
                alt={item.sub}
                width={1024}
                height={1280}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${item.height}`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-sage-deep/70 to-transparent px-5 pb-4 pt-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div>
                  <p className="font-display text-lg font-medium text-cream">
                    {item.caption}
                  </p>
                  <p className="text-xs text-cream/85">{item.sub}</p>
                </div>
                <Camera
                  className="h-4 w-4 shrink-0 text-cream/80"
                  strokeWidth={1.6}
                />
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
