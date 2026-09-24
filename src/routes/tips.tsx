import { createFileRoute } from "@tanstack/react-router";
import { gardeningTips } from "@/lib/garden";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/tips")({
  head: () => ({
    meta: [
      { title: "Gardening Tips — BloomNest" },
      {
        name: "description",
        content:
          "Beginner-friendly gardening tips: soil, light, watering, feeding, deadheading, mulch, pests and keeping a garden journal.",
      },
      { property: "og:title", content: "Gardening Tips — BloomNest" },
      {
        property: "og:description",
        content:
          "Eight gentle lessons that turn a curious beginner into a confident gardener.",
      },
    ],
  }),
  component: TipsPage,
});

function TipsPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-butter/50 via-cream to-cream"
        />
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">For first-time gardeners</span>
            <h1 className="mt-3 font-display text-5xl font-medium text-sage-deep sm:text-6xl">
              Eight gentle lessons from the garden
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Nobody is born with a green thumb — it's just a handful of habits,
              practised among plants. Read them in order, or jump to the one
              your plants are asking for.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {gardeningTips.map((tip, i) => (
            <Reveal key={tip.title} delay={(i % 2) * 120}>
              <article className="group flex h-full gap-5 rounded-3xl border border-border/70 bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-blush hover:shadow-lift">
                <span className="font-display text-4xl font-semibold leading-none text-blush/70 transition-colors duration-300 group-hover:text-blush-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-sage-deep">
                    {tip.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {tip.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <p className="mx-auto max-w-md font-display text-2xl italic text-sage-deep">
            "A garden is never finished — it is only ever becoming."
          </p>
        </Reveal>
      </section>
    </div>
  );
}
