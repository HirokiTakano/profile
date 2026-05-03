import { Megaphone } from "lucide-react";

const newsItems = [
  {
    registeredAt: "20260504",
    title: "便利ツールサイトの開設",
  },
];

function formatRegisteredAt(value: string) {
  const year = value.slice(0, 4);
  const month = Number(value.slice(4, 6));
  const day = Number(value.slice(6, 8));

  return `${year}年${month}月${day}日`;
}

export function WorksNews() {
  return (
    <section className="mt-10 rounded-[2rem] border border-cyan-100 bg-white/90 p-8 shadow-[0_16px_46px_rgba(8,102,138,0.08)]">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-700">
          <Megaphone aria-hidden="true" className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-2xl font-black text-slate-950">お知らせ</h2>
          <p className="mt-1 text-sm font-bold text-slate-500">登録日とお知らせ内容を掲載します。</p>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-cyan-100 bg-white">
        {newsItems.map((item) => (
          <article
            className="grid gap-3 border-b border-cyan-50 p-5 last:border-b-0 md:grid-cols-[140px_1fr] md:items-center"
            key={`${item.registeredAt}-${item.title}`}
          >
            <time
              className="text-sm font-black text-cyan-800"
              dateTime={`${item.registeredAt.slice(0, 4)}-${item.registeredAt.slice(4, 6)}-${item.registeredAt.slice(6, 8)}`}
            >
              {formatRegisteredAt(item.registeredAt)}
            </time>
            <p className="font-bold leading-7 text-slate-800">{item.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
