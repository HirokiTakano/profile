import type { Metadata } from "next";
import { WorksAboutSection } from "@/components/WorksAboutSection";
import { WorksDeveloper } from "@/components/WorksDeveloper";
import { WorksFAQ } from "@/components/WorksFAQ";
import { WorksFinalCTA } from "@/components/WorksFinalCTA";
import { WorksHero } from "@/components/WorksHero";
import { WorksHowToUse } from "@/components/WorksHowToUse";
import { WorksList } from "@/components/WorksList";
import { WorksProblemSection } from "@/components/WorksProblemSection";
import { WorksRoadmap } from "@/components/WorksRoadmap";
import { WorksTrustSection } from "@/components/WorksTrustSection";

export const metadata: Metadata = {
  title: "CleaPas | PC作業の面倒を減らす便利ツール集",
  description:
    "CleaPasは、メモ・PC確認・作業整理など、日常のPC作業をかんたんにする便利ツール集です。無料で試せるWebツールやWindows向けツールを公開しています。",
  icons: {
    icon: "/brand/Logo_Cleapas_mark_01.png",
    apple: "/brand/Logo_Cleapas_mark_01.png",
  },
};

export default function WorksPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf3] text-slate-900">
      <WorksHero />
      <WorksProblemSection />
      <WorksAboutSection />
      <WorksList />
      <WorksHowToUse />
      <WorksTrustSection />
      <WorksRoadmap />
      <WorksFAQ />
      <WorksDeveloper />
      <WorksFinalCTA />
    </main>
  );
}
