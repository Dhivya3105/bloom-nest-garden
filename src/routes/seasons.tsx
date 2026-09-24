import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, FlowerIcon, ClipboardList } from "lucide-react";
import { seasons } from "@/lib/garden";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/seasons")({
  head: () => ({
    meta: [
      { title: "Seasons — BloomNest" },
      {
        name: "description",
        content:
          "A seasonal flower guide: what blooms in spring, summer, autumn and winter, and the gentle tasks each season asks of you.",
      },
      { property: "og:title", content: "Seasons — BloomNest" },
      {
        property: "og:description",
        content:
          "What blooms in spring, summer, autumn and winter — and the gentle tasks each season asks of you.",
      },
    ],
  }),
  component: SeasonsPage,
});

const accentStyles = {
  blush: "bg-blush-soft text-blush-deep",
  butter: "bg-butter text-butter-deep",
  sage: "bg-sage-light text-sage-deep",
  "sage-deep": "bg-sage-light text-sage-deep",
} as const;

function SeasonsPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-blush-soft/70 via-cream to-cream"
        />
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">The turning year</span>
            <h1 className="mt-3 font-display text-5xl font-medium text-sage-deep sm:text-6xl">
              Every season has something to offer
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Gardening is easier when you stop fighting the calendar and let
              it lead. Here is what each season blooms — and quietly asks of
              you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-4 pb-20 sm:px-6 lg:px-8">
        {seasons.map((season, i) => (
          <Reveal key={season.name} delay={60}>
            <article className="grid gap-8 rounded-4xl border border-border/70 bg-card p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift sm:p-10 lg:grid-cols-[1fr_1.3fr]">
              <div>
                <span
                  className={cn(
                    "inline-block rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em]",
                    accentStyles[season.accent]
                  )}
                >
                  {season.months}
                </span>
                <h2 className="mt-5 font-display text-4xl font-semibold text-sage-deep">
                  {season.name}
                </h2>
                <p className="mt-2 font-display text-xl italic text-blush-deep">
                  {season.headline}
                </p>
                <h3 className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  <FlowerIcon className="h-4 w-4 text-blush-deep" strokeWidth={1.6} />
                  In bloom
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {season.blooms.map((bloom) => (
                    <span
                      key={bloom}
                      className="rounded-full bg-blush-soft px-3.5 py-1.5 text-sm text-blush-deep"
                    >
                      {bloom}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-secondary/40 p-7">
                <h3 className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  <CalendarDays className="h-4 w-4 text-primary" strokeWidth={1.6} />
                  The season's tasks
                </h3>
                <ul className="mt-4 space-y-3.5">
                  {season.tasks.map((task, j) => (
                    <li key={task} className="flex items-start gap-3.5">
                      <span className="mt-0.5 font-display text-lg font-semibold leading-none text-primary/60">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/85">
                        {task}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal>
          <p className="mx-auto flex max-w-lg items-start gap-3 rounded-3xl bg-butter/50 p-6 text-sm leading-relaxed text-foreground/80">
            <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-butter-deep" strokeWidth={1.6} />
            Seasons shift by region — treat these guides as a rhythm rather
            than a rule, and adjust a few weeks either way for your climate.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
