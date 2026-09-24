import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Sun,
  CalendarDays,
  ArrowRight,
  Sprout,
  Leaf,
  FlowerIcon,
} from "lucide-react";
import { flowers, images, seasons } from "@/lib/garden";
import { Reveal } from "@/components/reveal";
import { FlowerCard } from "@/components/flower-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "BloomNest — Bring Nature Into Your Space",
      },
      {
        name: "description",
        content:
          "Flowers, plants and beginner-friendly gardening guidance. Explore blooms, plant care, seasonal tips and a garden gallery.",
      },
      {
        property: "og:title",
        content: "BloomNest — Bring Nature Into Your Space",
      },
      {
        property: "og:description",
        content:
          "Flowers, plants and beginner-friendly gardening guidance, wrapped in a soft botanical corner of the web.",
      },
      {
        property: "og:image",
        content:
          "https://id-preview--a0ddecf4-ab4f-492f-b133-8b6891b12a44.lovable.app/__l5e/assets-v1/a0ddecf4-ab4f-492f-b133-8b6891b12a44/image-gen/9a08f1f1-d13e-4227-827d-cc7a30fbd4c0/hero-garden.jpg",
      },
      {
        name: "twitter:image",
        content:
          "https://id-preview--a0ddecf4-ab4f-492f-b133-8b6891b12a44.lovable.app/__l5e/assets-v1/a0ddecf4-ab4f-492f-b133-8b6891b12a44/image-gen/9a08f1f1-d13e-4227-827d-cc7a30fbd4c0/hero-garden.jpg",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = flowers.filter((f) =>
    ["Rose", "Tulip", "Lavender"].includes(f.name)
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-blush-soft via-cream to-cream"
        />
        <div
          aria-hidden
          className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-butter/60 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-sage-light/50 blur-3xl"
        />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="animate-bloom">
            <span className="eyebrow">A garden for every home</span>
            <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] text-sage-deep sm:text-6xl lg:text-7xl">
              Bring Nature{" "}
              <em className="font-normal italic text-blush-deep">
                Into Your Space
              </em>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Flowers, plants and gentle gardening wisdom — everything you need
              to grow something beautiful, whether it's a windowsill orchid or
              a border of roses.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/flowers"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-deep hover:shadow-lift"
              >
                Explore Flowers
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </Link>
              <span className="text-sm text-muted-foreground">
                No experience needed — just curiosity.
              </span>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/70 pt-8">
              {[
                { value: "6+", label: "Flower guides" },
                { value: "4", label: "Plant families" },
                { value: "4", label: "Seasons mapped" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-3xl font-semibold text-primary">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-bloom [animation-delay:150ms]">
            <div className="overflow-hidden rounded-4xl shadow-lift">
              <img
                src={images.heroGarden}
                alt="A garden border of roses and peonies in soft morning light"
                width={1920}
                height={1088}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>
            <div className="animate-float absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl bg-card px-5 py-4 shadow-soft sm:flex lg:-left-10">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-blush-soft text-blush-deep">
                <Sun className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-sm font-medium">Morning light</p>
                <p className="text-xs text-muted-foreground">
                  Best time to water and wander
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll find */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: FlowerIcon,
              title: "Flower profiles",
              body: "Sun, water and bloom-season notes for six garden favourites.",
              to: "/flowers",
            },
            {
              icon: Leaf,
              title: "Plant care, simplified",
              body: "Light, humidity and watering basics for four plant families.",
              to: "/plants",
            },
            {
              icon: Sprout,
              title: "Seasonal wisdom",
              body: "Know what to plant, prune and dream about all year round.",
              to: "/seasons",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <Link
                to={item.to}
                className="group block h-full rounded-3xl border border-border/70 bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-blush hover:shadow-lift"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-primary transition-colors duration-300 group-hover:bg-blush-soft group-hover:text-blush-deep">
                  <item.icon className="h-5.5 w-5.5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-sage-deep">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured flowers */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">In bloom now</span>
            <h2 className="mt-3 font-display text-4xl font-medium text-sage-deep">
              Beloved flowers, gently explained
            </h2>
          </div>
          <Link
            to="/flowers"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-blush-deep transition-colors hover:text-sage-deep"
          >
            View all flowers
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((flower, i) => (
            <Reveal key={flower.name} delay={i * 130}>
              <FlowerCard flower={flower} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Seasons strip */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <span className="eyebrow">Through the year</span>
            <h2 className="mt-3 font-display text-4xl font-medium text-sage-deep">
              A garden has four quiet rhythms
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {seasons.map((season, i) => (
              <Reveal key={season.name} delay={i * 110}>
                <Link
                  to="/seasons"
                  className="group block h-full rounded-3xl bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <p className="font-display text-2xl font-semibold text-sage-deep">
                    {season.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {season.months}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {season.headline}
                  </p>
                  <p className="mt-5 flex items-center gap-1.5 text-sm font-medium text-blush-deep">
                    <CalendarDays className="h-4 w-4" strokeWidth={1.6} />
                    {season.blooms.slice(0, 2).join(" · ")}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-butter/70 px-6 py-16 text-center sm:px-16">
            <div
              aria-hidden
              className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-blush-soft/80 blur-2xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-sage-light/70 blur-2xl"
            />
            <h2 className="relative font-display text-4xl font-medium text-sage-deep sm:text-5xl">
              Start with a single pot
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
              Our beginner tips cover watering, light and everything the garden
              books forget to mention.
            </p>
            <Link
              to="/tips"
              className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage-deep hover:shadow-lift"
            >
              Read Gardening Tips
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.8}
              />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
