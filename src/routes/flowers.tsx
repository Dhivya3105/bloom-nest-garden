import { createFileRoute } from "@tanstack/react-router";
import { flowers } from "@/lib/garden";
import { FlowerCard } from "@/components/flower-card";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/flowers")({
  head: () => ({
    meta: [
      { title: "Flowers — BloomNest" },
      {
        name: "description",
        content:
          "Care guides for roses, sunflowers, tulips, hibiscus, orchids and lavender — sun, water and bloom seasons explained simply.",
      },
      { property: "og:title", content: "Flowers — BloomNest" },
      {
        property: "og:description",
        content:
          "Care guides for six beloved flowers: sun, water and bloom seasons explained simply.",
      },
    ],
  }),
  component: FlowersPage,
});

function FlowersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">The flower library</span>
        <h1 className="mt-3 font-display text-5xl font-medium text-sage-deep sm:text-6xl">
          Six flowers worth knowing
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Each card carries the three things that matter most — how much sun it
          wants, how often to water, and when it blooms. Start with one and let
          the collection grow.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {flowers.map((flower, i) => (
          <Reveal key={flower.name} delay={(i % 3) * 130}>
            <FlowerCard flower={flower} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
