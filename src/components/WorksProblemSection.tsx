import { FileQuestion, HelpCircle, Hourglass, MonitorCog, NotebookPen } from "lucide-react";

const problems = [
  { title: "メモを取っても、あとから整理しづらい", icon: NotebookPen },
  { title: "PCスペックを聞かれても、どこを見ればいいか分からない", icon: MonitorCog },
  { title: "トラブル相談時に、相手へPC情報をうまく伝えられない", icon: HelpCircle },
  { title: "小さな作業に毎回時間を取られる", icon: Hourglass },
  { title: "無料で気軽に使えるツールを探している", icon: FileQuestion },
];

export function WorksProblemSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
          こんなPC作業で時間を取られていませんか？
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          CleaPasは、日常の中で何度も発生する小さな手間を減らすために作られています。
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => {
          const Icon = problem.icon;

          return (
            <article
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              key={problem.title}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                <Icon aria-hidden="true" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-black leading-8 text-slate-900">{problem.title}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}
