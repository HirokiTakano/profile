const roadmapItems = [
  "ファイル整理を助けるツール",
  "テキスト変換・文章整理ツール",
  "PC作業チェックツール",
  "作業メモ補助ツール",
  "有料版・Pro機能の検討",
];

export function WorksRoadmap() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
          今後追加していきたいこと
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          CleaPasでは、日常のPC作業を楽にする小さなツールを継続的に追加していく予定です。
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {roadmapItems.map((item, index) => (
          <article
            className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm"
            key={item}
          >
            <p className="text-sm font-black text-orange-600">
              {index === roadmapItems.length - 1 ? "検討中" : "追加予定"}
            </p>
            <h3 className="mt-3 text-lg font-black leading-7 text-slate-950">{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
