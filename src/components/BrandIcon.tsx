import Image from "next/image";
import { cn } from "@/lib/utils";

const iconSources: Record<string, string> = {
  github: "https://github.githubassets.com/favicons/favicon.svg",
  youtube: "https://www.youtube.com/favicon.ico",
  zenn: "/brands/zenn-logo-only.svg",
  x: "https://x.com/favicon.ico",
};

type BrandIconProps = {
  id: string;
  label: string;
  className?: string;
};

export function BrandIcon({ id, label, className }: BrandIconProps) {
  const src = iconSources[id];

  if (!src) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex h-5 w-5 items-center justify-center rounded-sm bg-slate-800 text-[10px] font-black text-white",
          className,
        )}
      >
        {label.slice(0, 1)}
      </span>
    );
  }

  return (
    <Image
      alt=""
      aria-hidden="true"
      className={cn("h-5 w-5 object-contain", className)}
      height={20}
      src={src}
      unoptimized
      width={20}
    />
  );
}
