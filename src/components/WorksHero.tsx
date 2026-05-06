import { ArrowDown, CheckCircle2, MousePointerClick } from "lucide-react";
import Image from "next/image";

export function WorksHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-teal-50">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 text-sm font-black text-orange-700 shadow-sm">
            <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
            CleaPas | PC作業を楽にする便利ツール集
          </p>
          <h1 className="mt-6 text-5xl font-black leading-tight tracking-normal text-slate-950 md:text-6xl">
            PC作業の「面倒」を、少しずつ減らす。
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-700">
            CleaPasは、メモ・PC確認・作業整理など、日常のPC作業をかんたんにする小さな便利ツール集です。インストール不要で使えるWebツールから、Windows向けの確認ツールまで、必要な作業をすぐ始められるようにまとめています。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-3 text-sm font-black text-white shadow-[0_14px_30px_rgba(249,115,22,0.22)] transition hover:-translate-y-0.5 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-orange-50"
              href="#tools"
            >
              無料でツールを試す
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-orange-50"
              href="#about"
            >
              CleaPasについて見る
            </a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-[0_24px_70px_rgba(15,118,110,0.12)]">
          <Image
            src="/brand/cleapas-logo-horizontal.png"
            alt="CleaPasロゴ"
            width={640}
            height={366}
            className="mx-auto h-auto w-full max-w-[440px]"
            priority
          />
          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="font-black text-slate-950">今日使えるツール</p>
              <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-black text-teal-700">
                登録不要で始めやすい
              </span>
            </div>
            <div className="mt-5 grid gap-3">
              {[
                ["ThinkSpeed", "考えをすばやく書き出す"],
                ["PCDetailCheck", "PC情報をかんたん確認"],
              ].map(([title, description]) => (
                <div className="rounded-2xl border border-slate-200 bg-white p-4" key={title}>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                      <MousePointerClick aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-black text-slate-950">{title}</p>
                      <p className="mt-1 text-sm font-bold text-slate-500">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
