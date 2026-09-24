import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Flower2, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/flowers", label: "Flowers" },
  { to: "/plants", label: "Plants" },
  { to: "/tips", label: "Gardening Tips" },
  { to: "/seasons", label: "Seasons" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary transition-transform duration-500 group-hover:rotate-12">
            <Flower2 className="h-5 w-5" strokeWidth={1.6} />
          </span>
          <span className="font-display text-2xl font-semibold tracking-wide text-sage-deep">
            Bloom<span className="text-blush-deep">Nest</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active =
              link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-normal tracking-wide transition-colors duration-300",
                  active
                    ? "bg-secondary text-sage-deep"
                    : "text-foreground/75 hover:bg-blush-soft hover:text-sage-deep"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-sage-deep transition-colors hover:bg-sage-light lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" strokeWidth={1.6} />
          ) : (
            <Menu className="h-5 w-5" strokeWidth={1.6} />
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/70 bg-cream/95 px-4 pb-5 pt-2 lg:hidden">
          {links.map((link) => {
            const active =
              link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-3 text-base transition-colors",
                  active
                    ? "bg-secondary font-medium text-sage-deep"
                    : "text-foreground/80 hover:bg-blush-soft"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
