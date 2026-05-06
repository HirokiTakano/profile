import { BadgeCheck, MousePointerClick, Send } from "lucide-react";

const values = [
  {
    title: "かんたん",
    description: "専門知識がなくても使いやすいように、操作と説明をできるだけシンプルにします。",
    icon: BadgeCheck,
  },
  {
    title: "すぐ使える",
    description:
      "ブラウザで使えるツールや、ダウンロードしてすぐ使えるPC向けツールを中心に提供します。",
    icon: MousePointerClick,
  },
  {
    title: "伝えやすい",
    description: "メモの整理やPC情報の確認など、人に説明しづらい作業を分かりやすくします。",
    icon: Send,
  },
];

export function WorksAboutSection() {
  return (
    <section className="bg-white py-20" id="about">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-black text-teal-700">About CleaPas</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
            CleaPasとは
          </h2>
          <p className="mt-5 text-lg leading-9 text-slate-700">
            CleaPasは、日常のPC作業を少し楽にするための便利ツール集です。難しい設定や専門知識がなくても、必要な作業をすぐ始められることを重視しています。
          </p>
        </div>
        <div className="grid gap-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                className="rounded-3xl border border-orange-100 bg-amber-50/50 p-6"
                key={value.title}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-sm">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-950">{value.title}</h3>
                    <p className="mt-2 leading-7 text-slate-700">{value.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
