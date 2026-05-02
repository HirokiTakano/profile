import type { Metadata } from "next";
import Link from "next/link";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { WorksList } from "@/components/WorksList";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "制作物一覧 | Takano Hiroki",
  description:
    "Takano Hiroki が作成したアプリケーションやツールを、プロフィールとは独立したページで確認できます。",
};

export default function WorksPage() {
  return (
    <>
      <BackgroundEffects />
      <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 border-b border-slate-800 pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Link
                className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-100"
                href="/"
              >
                Takano Hiroki
              </Link>
              <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">制作物一覧</h1>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                ここでは、作成したアプリケーションやツールをまとめています。気になるものがあれば、そのまま開いて試せます。
              </p>
            </div>
            <div className="rounded-lg border border-cyan-300/25 bg-cyan-300/10 px-5 py-4">
              <p className="text-sm font-semibold text-cyan-200">公開中の制作物</p>
              <p className="mt-1 text-3xl font-black text-white">{projects.length}件</p>
            </div>
          </div>
          <WorksList />
        </div>
      </main>
    </>
  );
}
