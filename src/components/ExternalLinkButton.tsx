import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ExternalLinkButtonProps = {
  href?: string | null;
  children: ReactNode;
  variant?: "primary" | "secondary";
  ariaLabel?: string;
};

export function ExternalLinkButton({
  href,
  children,
  variant = "secondary",
  ariaLabel,
}: ExternalLinkButtonProps) {
  const classes = cn(
    "inline-flex min-h-10 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950",
    variant === "primary"
      ? "border-sky-300/70 bg-sky-300 text-slate-950 shadow-glow hover:bg-cyan-200"
      : "border-slate-600 bg-slate-900/70 text-slate-100 hover:border-cyan-300/70 hover:bg-slate-800",
    !href && "cursor-not-allowed border-slate-700 bg-slate-900/40 text-slate-500 shadow-none",
  );

  if (!href) {
    return (
      <span aria-disabled="true" className={classes}>
        {children}
      </span>
    );
  }

  return (
    <a
      aria-label={ariaLabel}
      className={classes}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}
