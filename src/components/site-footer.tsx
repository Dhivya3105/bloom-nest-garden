import { Link } from "@tanstack/react-router";
import { Flower2 } from "lucide-react";

const columns = [
  {
    heading: "Explore",
    links: [
      { to: "/flowers", label: "Flowers" },
      { to: "/plants", label: "Plants" },
      { to: "/gallery", label: "Gallery" },
    ],
  },
  {
    heading: "Learn",
    links: [
      { to: "/tips", label: "Gardening Tips" },
      { to: "/seasons", label: "Seasons" },
      { to: "/about", label: "About" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
              <Flower2 className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <span className="font-display text-2xl font-semibold text-sage-deep">
              Bloom<span className="text-blush-deep">Nest</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A quiet corner of the internet for flower lovers, plant parents and
            beginner gardeners — bringing nature into every space, one pot at a
            time.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.heading}>
            <h3 className="eyebrow">{column.heading}</h3>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.to + link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground/75 transition-colors hover:text-blush-deep"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/70">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs tracking-wide text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} BloomNest · Grown with patience and
          morning light
        </p>
      </div>
    </footer>
  );
}
