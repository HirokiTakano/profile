import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WorksFeatureStrip } from "@/components/WorksFeatureStrip";
import { WorksHero } from "@/components/WorksHero";
import { WorksList } from "@/components/WorksList";
import { WorksNews } from "@/components/WorksNews";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "日常で使える便利ツール | Takano Hiroki",
  description: "ちょっと面倒をツールに任せてみよう",
  icons: {
    icon: "/brand/Logo_Cleapas_mark_01.png",
    apple: "/brand/Logo_Cleapas_mark_01.png",
  },
};

export default function WorksPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eefbfb] px-6 py-8 text-slate-900">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-cyan-200/45 blur-3xl" />
        <div className="absolute right-[-100px] top-[240px] h-96 w-96 rounded-full bg-teal-200/50 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[35%] h-96 w-96 rounded-full bg-lime-100/60 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto w-[80%]">
        <header className="mb-6 flex items-center justify-start">
          <div className="h-24 w-24 overflow-hidden">
            <Image
              src="/brand/Logo_Cleapas_mark_01.png"
              alt="CleaPas"
              width={160}
              height={160}
              className="h-auto w-24"
              priority
            />
          </div>
        </header>
        <WorksHero />
        <WorksFeatureStrip />
        <WorksList />
        <WorksNews />
        <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-cyan-100 pt-6 text-sm text-slate-500">
          <p>PC向け便利ツールを少しずつ追加しています。</p>
          <div className="flex items-center gap-5">
            {profile.xUrl ? (
              <a
                className="font-bold text-slate-600 underline-offset-4 transition hover:text-cyan-700 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#eefbfb]"
                href={profile.xUrl}
                rel="noreferrer"
                target="_blank"
              >
                X
              </a>
            ) : null}
            {profile.youtubeUrl ? (
              <a
                className="font-bold text-slate-600 underline-offset-4 transition hover:text-cyan-700 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#eefbfb]"
                href={profile.youtubeUrl}
                rel="noreferrer"
                target="_blank"
              >
                YouTube
              </a>
            ) : (
              <Link
                className="font-bold text-slate-600 underline-offset-4 transition hover:text-cyan-700 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#eefbfb]"
                href="/#youtube"
              >
                YouTube
              </Link>
            )}
            <Link
              className="font-bold text-slate-600 underline-offset-4 transition hover:text-cyan-700 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#eefbfb]"
              href="/"
            >
              プロフィール
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
