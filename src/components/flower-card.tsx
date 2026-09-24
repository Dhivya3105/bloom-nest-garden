import type { Flower } from "@/lib/garden";
import { Droplets, Sun, CalendarDays } from "lucide-react";

export function FlowerCard({ flower }: { flower: Flower }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative overflow-hidden">
        <img
          src={flower.image}
          alt={`${flower.name} flower`}
          width={1024}
          height={1280}
          loading="lazy"
          className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-medium tracking-wide text-sage-deep backdrop-blur-sm">
          {flower.difficulty}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-semibold text-sage-deep">
          {flower.name}
        </h3>
        <p className="mt-0.5 text-xs italic tracking-wide text-muted-foreground">
          {flower.latin}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {flower.description}
        </p>
        <ul className="mt-5 space-y-2 border-t border-border/70 pt-4 text-sm text-foreground/80">
          <li className="flex items-center gap-2.5">
            <Sun className="h-4 w-4 shrink-0 text-butter-deep" strokeWidth={1.6} />
            {flower.sun}
          </li>
          <li className="flex items-center gap-2.5">
            <Droplets
              className="h-4 w-4 shrink-0 text-primary"
              strokeWidth={1.6}
            />
            {flower.water}
          </li>
          <li className="flex items-center gap-2.5">
            <CalendarDays
              className="h-4 w-4 shrink-0 text-blush-deep"
              strokeWidth={1.6}
            />
            Blooms {flower.bloom.toLowerCase()}
          </li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {flower.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary/70 px-3 py-1 text-xs tracking-wide text-sage-deep"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
