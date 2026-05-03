import { ArrowDown, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function WorksHero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-cyan-100 bg-white/95 px-10 py-10 shadow-[0_24px_70px_rgba(8,102,138,0.10)]">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-800">
            <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
            日常の小さな不便を解決するPCツール集
          </p>
          <h1 className="mt-6 text-5xl font-black leading-tight text-slate-950">
            日常で使える便利ツール
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-9 text-slate-700">
            PC確認、メモ、作業の整理など、少し面倒なことを楽にする小さなツールをまとめています。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-700 bg-cyan-700 px-5 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(8,145,178,0.25)] transition hover:-translate-y-0.5 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-white"
              href="#tools"
            >
              ツールを見る
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-start">
          <Image
            src="/brand/cleapas-logo-horizontal.png"
            alt="CleaPas"
            width={640}
            height={366}
            className="h-auto w-full max-w-[728px] drop-shadow-[0_18px_34px_rgba(8,102,138,0.14)]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
