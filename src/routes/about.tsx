import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Heart, Leaf, Sun, BookOpen } from "lucide-react";
import { images } from "@/lib/garden";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BloomNest" },
      {
        name: "description",
        content:
          "The story behind BloomNest — a soft botanical corner of the web for flower lovers, plant parents and beginner gardeners.",
      },
      { property: "og:title", content: "About — BloomNest" },
      {
        property: "og:description",
        content:
          "The story behind BloomNest — a soft botanical corner of the web for beginner gardeners.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Heart,
    title: "Gentle by nature",
    body: "Soft colours, soft advice. We believe gardening should feel like a walk through a garden, not a chore list.",
  },
  {
    icon: Leaf,
    title: "Beginners first",
    body: "Every guide assumes nothing. Latin names come second; the plain-English care note comes first.",
  },
  {
    icon: Sun,
    title: "Seasonal living",
    body: "The garden teaches patience. We follow the turning year rather than demanding instant perfection.",
  },
] as const;

function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-sage-light/40 via-cream to-cream"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-24">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h1 className="mt-3 font-display text-5xl font-medium leading-tight text-sage-deep sm:text-6xl">
              A nest for everything that blooms
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              BloomNest began with a single windowsill orchid and the
              realisation that most plant advice is written for people who
              already have the answers. We wanted the opposite: a calm, softly
              lit corner of the web where beginners are the point.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Today it gathers flower profiles, plant families, seasonal guides
              and hard-won tips — everything we wish we'd known when the first
              rose bush looked wilted and mysterious. No accounts, no noise.
              Just gardening, gently.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-4xl shadow-lift">
              <img
                src={images.greenhouse}
                alt="A sunlit greenhouse filled with ferns and potted plants"
                width={1024}
                height={1408}
                className="h-[440px] w-full object-cover sm:h-[540px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="eyebrow">What we believe</span>
          <h2 className="mt-3 font-display text-4xl font-medium text-sage-deep">
            Small habits, happy plants
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 120}>
              <article className="h-full rounded-3xl border border-border/70 bg-card p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary text-primary">
                  <value.icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-sage-deep">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-4xl bg-butter/60 px-6 py-14 text-center sm:px-16">
            <BookOpen
              className="mx-auto h-8 w-8 text-sage-deep"
              strokeWidth={1.4}
            />
            <h2 className="mt-5 font-display text-3xl font-medium text-sage-deep">
              Ready to get your hands a little dirty?
            </h2>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                to="/flowers"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-deep hover:shadow-lift"
              >
                Meet the flowers
              </Link>
              <Link
                to="/gallery"
                className="rounded-full border border-sage/40 bg-card px-6 py-3 text-sm font-medium text-sage-deep transition-colors duration-300 hover:bg-cream"
              >
                Wander the gallery
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
