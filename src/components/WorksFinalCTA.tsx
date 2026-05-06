import Link from "next/link";

export function WorksFinalCTA() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-teal-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2rem] border border-orange-100 bg-white p-8 shadow-[0_24px_70px_rgba(249,115,22,0.10)] md:p-12">
          <h2 className="max-w-3xl text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
            まずは無料で、PC作業を少し楽にしてみる。
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-700">
            CleaPasでは、日常のPC作業で使える小さな便利ツールを公開しています。気になるツールから試してみてください。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-orange-500 px-5 py-3 text-sm font-black text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-white"
              href="#tools"
            >
              無料でツールを試す
            </a>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:border-teal-500 hover:bg-teal-50 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-white"
              href="/"
            >
              プロフィールを見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
