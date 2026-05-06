const faqs = [
  {
    question: "無料で使えますか？",
    answer:
      "現在公開しているツールは、まず無料で試せるものを中心に掲載しています。将来的に追加機能やPro版を用意する可能性があります。",
  },
  {
    question: "登録は必要ですか？",
    answer:
      "ブラウザで使えるツールは、登録不要で使い始められることを重視しています。ツールごとの仕様は、各ツールの案内をご確認ください。",
  },
  {
    question: "PCDetailCheckはどこから入手できますか？",
    answer:
      "PCDetailCheckはGitHub Releasesのダウンロードページから入手できます。今後、より分かりやすいダウンロード案内も整備していく予定です。",
  },
  {
    question: "商用利用できますか？",
    answer:
      "利用条件はツールごとに異なる場合があります。詳しくは各ツールのGitHubリポジトリやライセンス情報をご確認ください。",
  },
  {
    question: "有料版はありますか？",
    answer:
      "現時点では無料で試せるツールを中心に公開しています。今後、便利な追加機能やPro版を検討する可能性があります。",
  },
  {
    question: "要望や改善案は送れますか？",
    answer:
      "今後、要望を受け取る導線を整備していく予定です。現時点では、開発者のXやGitHubから情報を確認できます。",
  },
];

export function WorksFAQ() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
          よくある質問
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6" key={faq.question}>
              <h3 className="text-xl font-black leading-8 text-slate-950">Q. {faq.question}</h3>
              <p className="mt-3 leading-8 text-slate-600">A. {faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
