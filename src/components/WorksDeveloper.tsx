import Link from "next/link";
import { profile } from "@/data/profile";

export function WorksDeveloper() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <p className="text-sm font-black text-teal-700">Developer</p>
        <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
          開発者について
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-700">
          CleaPasは、インフラエンジニアのTakano Hirokiが開発している便利ツール集です。日常のPC作業で感じる小さな不便を、できるだけ簡単に解決できる形にすることを目指しています。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-orange-500 px-5 py-3 text-sm font-black text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-white"
            href="/"
          >
            プロフィールを見る
          </Link>
          {profile.xUrl ? (
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:border-teal-500 hover:bg-teal-50 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-white"
              href={profile.xUrl}
              rel="noreferrer"
              target="_blank"
            >
              Xで更新を見る
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
