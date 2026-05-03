import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Layers3, MousePointerClick, Wrench } from "lucide-react";
import { WorksList } from "@/components/WorksList";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "制作物一覧 | Takano Hiroki",
  description:
    "Takano Hiroki が作成したアプリケーションやツールを、プロフィールとは独立したページで確認できます。",
};

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-[#fff8ef] px-4 py-8 text-stone-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="border-b border-orange-200 pb-8">
          <Link
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 transition hover:text-teal-900"
            href="/"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            プロフィールへ戻る
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-md border border-orange-200 bg-white px-3 py-1.5 text-sm font-bold text-orange-800">
                <Layers3 aria-hidden="true" className="h-4 w-4" />
                便利ツールカタログ
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-stone-950 md:text-6xl">
                目的に合うツールを選んで、すぐ使う
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-9 text-stone-700">
                メモ、PC確認、作業補助など、日常で使いやすいアプリケーションをジャンル別にまとめています。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-orange-200 bg-white p-4">
                <MousePointerClick aria-hidden="true" className="h-5 w-5 text-orange-700" />
                <p className="mt-3 text-3xl font-black text-stone-950">{projects.length}</p>
                <p className="mt-1 text-sm font-bold text-stone-600">公開中のツール</p>
              </div>
              <div className="rounded-lg border border-teal-200 bg-white p-4">
                <Wrench aria-hidden="true" className="h-5 w-5 text-teal-700" />
                <p className="mt-3 text-3xl font-black text-stone-950">2</p>
                <p className="mt-1 text-sm font-bold text-stone-600">ジャンル</p>
              </div>
            </div>
          </div>
        </header>

        <WorksList />
      </div>
    </main>
  );
}
