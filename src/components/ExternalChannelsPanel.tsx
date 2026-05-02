import { ArrowUpRight } from "lucide-react";
import { BrandIcon } from "@/components/BrandIcon";
import { socialLinks } from "@/data/profile";

export function ExternalChannelsPanel() {
  return (
    <div id="links" className="relative scroll-mt-28">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-400/20 via-cyan-400/10 to-violet-400/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-lg border border-slate-700/80 bg-slate-900/80 p-5 shadow-violetGlow">
        <div className="border-b border-slate-700/70 pb-4">
          <p className="text-sm font-semibold text-cyan-300">リンク</p>
          <h2 className="mt-1 text-2xl font-black text-white">外部チャンネル</h2>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {socialLinks.map((link) => {
            const content = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-slate-600 bg-white">
                  <BrandIcon className="h-7 w-7" id={link.id} label={link.label} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold text-white">{link.label}</span>
                  <span className="mt-1 block text-sm leading-5 text-slate-300">
                    {link.description}
                  </span>
                </span>
                {link.url ? (
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-cyan-200 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                ) : null}
              </>
            );

            if (!link.url) {
              return (
                <div
                  className="flex min-h-24 items-center gap-3 rounded-lg border border-slate-700 bg-slate-950/55 p-4"
                  key={link.id}
                >
                  {content}
                </div>
              );
            }

            return (
              <a
                aria-label={`${link.label} を新しいタブで開きます`}
                className="group flex min-h-24 items-center gap-3 rounded-lg border border-slate-700 bg-slate-950/55 p-4 transition hover:-translate-y-0.5 hover:border-cyan-300/70 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                href={link.url}
                key={link.id}
                rel="noopener noreferrer"
                target="_blank"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
