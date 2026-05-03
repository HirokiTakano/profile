import type { Metadata } from "next";
import Link from "next/link";
import { Layers3 } from "lucide-react";
import { WorksList } from "@/components/WorksList";

export const metadata: Metadata = {
  title: "日常で使える便利ツール | Takano Hiroki",
  description:
    "メモ、PC確認、作業補助など、難しい知識がなくても使いやすい便利ツールをまとめています。",
};

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-[#fff8ef] px-4 py-8 text-stone-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="rounded-[2rem] border border-orange-100 bg-[#fffdf9] px-8 py-8 shadow-[0_18px_50px_rgba(120,53,15,0.08)]">
          <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-bold text-orange-800">
            <Layers3 aria-hidden="true" className="h-4 w-4" />
            便利ツール一覧
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight text-stone-950">
            日常で使える便利ツール
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-stone-700">
            メモやPC確認など、目的に合わせてすぐ開ける小さなアプリをまとめています。
          </p>
        </header>
        <WorksList />
        <footer className="mt-12 border-t border-orange-100 pt-6 text-right">
          <Link
            className="text-sm font-medium text-stone-500 underline-offset-4 transition hover:text-teal-700 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-[#fff8ef]"
            href="/"
          >
            運営者プロフィール
          </Link>
        </footer>
      </div>
    </main>
  );
}
