import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ExternalLinkButtonProps = {
  href?: string | null;
  children: ReactNode;
  variant?: "primary" | "secondary" | "warmPrimary" | "warmSecondary";
  ariaLabel?: string;
  className?: string;
};

export function ExternalLinkButton({
  href,
  children,
  variant = "secondary",
  ariaLabel,
  className,
}: ExternalLinkButtonProps) {
  const variantClasses = {
    primary: "border-sky-300/70 bg-sky-300 text-slate-950 shadow-glow hover:bg-cyan-200",
    secondary:
      "border-slate-600 bg-slate-900/70 text-slate-100 hover:border-cyan-300/70 hover:bg-slate-800",
    warmPrimary:
      "border-orange-600 bg-orange-600 text-white shadow-none hover:border-orange-700 hover:bg-orange-700 focus:ring-orange-300 focus:ring-offset-white",
    warmSecondary:
      "border-stone-300 bg-white text-stone-800 shadow-none hover:border-teal-500 hover:bg-teal-50 focus:ring-teal-300 focus:ring-offset-white",
  };

  const classes = cn(
    "inline-flex min-h-10 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950",
    variantClasses[variant],
    !href && "cursor-not-allowed border-slate-700 bg-slate-900/40 text-slate-500 shadow-none",
    className,
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
