import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Sun, FlowerIcon, Sprout, Droplets } from "lucide-react";
import { plantCategories } from "@/lib/garden";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/plants")({
  head: () => ({
    meta: [
      { title: "Plants — BloomNest" },
      {
        name: "description",
        content:
          "Plant categories with simple care basics — foliage plants, succulents and cacti, flowering houseplants, and kitchen herbs.",
      },
      { property: "og:title", content: "Plants — BloomNest" },
      {
        property: "og:description",
        content:
          "Light, water and humidity basics for foliage plants, succulents, flowering houseplants and herbs.",
      },
    ],
  }),
  component: PlantsPage,
});

const icons = {
  leaf: Leaf,
  sun: Sun,
  flower: FlowerIcon,
  sprout: Sprout,
} as const;

function PlantsPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-sage-light/40 via-cream to-cream"
        />
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Green companions</span>
            <h1 className="mt-3 font-display text-5xl font-medium text-sage-deep sm:text-6xl">
              Find your plant, learn its language
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Plants aren't demanding — they're just specific. These four
              families cover most of what you'll meet at a nursery, with the
              care notes that actually matter.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4 pb-20 sm:px-6 lg:px-8">
        {plantCategories.map((category, i) => {
          const Icon = icons[category.icon];
          const reversed = i % 2 === 1;
          return (
            <Reveal key={category.name} delay={80}>
              <article
                className={`grid items-center gap-8 rounded-4xl border border-border/70 bg-card p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift sm:p-10 lg:grid-cols-[1.2fr_1fr] ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h2 className="font-display text-3xl font-semibold text-sage-deep">
                        {category.name}
                      </h2>
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {category.examples}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <dl className="grid gap-3 rounded-3xl bg-secondary/40 p-6">
                  {category.care.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="flex items-center gap-2 text-sm font-medium text-sage-deep">
                        <Droplets
                          className="h-3.5 w-3.5 shrink-0 text-primary"
                          strokeWidth={1.8}
                        />
                        {row.label}
                      </dt>
                      <dd className="text-right text-sm text-foreground/80">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          );
        })}
      </section>
    </div>
  );
}
