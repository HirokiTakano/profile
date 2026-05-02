"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { ExternalChannelsPanel } from "@/components/ExternalChannelsPanel";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100svh-88px)] scroll-mt-28 items-center px-4 py-14 sm:px-6 lg:px-8"
    >
      <motion.div
        className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            <Layers aria-hidden="true" className="h-4 w-4" />
            考える / 作る / 共有する
          </div>
          <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-lg font-semibold text-sky-200 md:text-2xl">
            {profile.shortRole}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            {profile.heroSummary}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-cyan-300/70 bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              href="/works"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Layers aria-hidden="true" className="h-4 w-4" />
              制作物を見る
            </a>
          </div>
        </div>
        <ExternalChannelsPanel />
      </motion.div>
    </section>
  );
}
