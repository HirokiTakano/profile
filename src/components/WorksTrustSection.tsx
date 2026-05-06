import { BookOpenText, CircleDollarSign, Github, HeartHandshake, ShieldCheck, UserRoundCheck } from "lucide-react";

const trustItems = [
  {
    title: "無料で試せる",
    description: "公開中のツールは、まず無料で試せるものを中心に掲載しています。",
    icon: CircleDollarSign,
  },
  {
    title: "登録不要で始めやすい",
    description: "ブラウザで使えるツールは、面倒な登録なしで使い始められることを重視します。",
    icon: UserRoundCheck,
  },
  {
    title: "使い方を分かりやすく案内",
    description: "PCに詳しくない人でも迷いにくい説明を増やしていきます。",
    icon: BookOpenText,
  },
  {
    title: "開発情報を公開",
    description: "各ツールの開発情報はGitHubから確認できます。",
    icon: Github,
  },
  {
    title: "PC初心者にも配慮",
    description: "専門用語をできるだけ減らし、目的から選べる構成にします。",
    icon: HeartHandshake,
  },
  {
    title: "継続的に改善",
    description: "使いやすさを高めるため、公開後も改善を続けます。",
    icon: ShieldCheck,
  },
];

export function WorksTrustSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
            安心して使えるように
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            CleaPasでは、ツールを初めて使う人にも分かりやすい説明と、使い始めやすい導線を重視しています。
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6" key={item.title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-sm">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            );
          })}
        </div>
        <p className="mt-8 rounded-3xl border border-teal-100 bg-teal-50 p-5 leading-8 text-slate-700">
          取得する情報や使い方の説明を、今後さらに分かりやすく整備していきます。
        </p>
      </div>
    </section>
  );
}
