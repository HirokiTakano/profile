const steps = [
  {
    title: "使いたいツールを選ぶ",
    description: "メモ、PC確認、作業整理など、目的に合うツールを選びます。",
  },
  {
    title: "ブラウザで開く、またはダウンロードする",
    description:
      "Webツールはブラウザでそのまま利用できます。Windows向けツールはダウンロードページから入手できます。",
  },
  {
    title: "日常の作業に使う",
    description: "メモの整理、PC情報の確認、トラブル相談時の情報共有などに活用できます。",
  },
];

export function WorksHowToUse() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
          使い方はシンプルです
        </h2>
      </div>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {steps.map((step, index) => (
          <article
            className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            key={step.title}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl font-black text-white">
              {index + 1}
            </div>
            <h3 className="mt-6 text-xl font-black text-slate-950">{step.title}</h3>
            <p className="mt-3 leading-8 text-slate-600">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
