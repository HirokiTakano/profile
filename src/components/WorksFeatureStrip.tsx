import { HeartHandshake, Zap } from "lucide-react";

const features = [
  {
    title: "すぐ使える",
    description:
      "ブラウザで使えるツールや、ダウンロードして使えるPC向けツールをまとめています。",
    icon: Zap,
    iconClassName: "bg-cyan-50 text-cyan-700",
  },
  {
    title: "楽できる",
    description: "誰でもボタン1つで楽できるツールを提供しています。",
    icon: HeartHandshake,
    iconClassName: "bg-teal-50 text-teal-700",
  },
];

export function WorksFeatureStrip() {
  return (
    <section className="mt-8 grid gap-4 lg:grid-cols-2">
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <article
            className="rounded-3xl border border-cyan-100 bg-white/90 p-6 shadow-[0_12px_34px_rgba(8,102,138,0.07)]"
            key={feature.title}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.iconClassName}`}
            >
              <Icon aria-hidden="true" className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-xl font-black text-slate-950">{feature.title}</h2>
            <p className="mt-2 leading-7 text-slate-700">{feature.description}</p>
          </article>
        );
      })}
    </section>
  );
}
