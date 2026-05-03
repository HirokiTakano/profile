import { BadgeCheck, MapPin, Sparkles } from "lucide-react";
import { CertificationGrid } from "@/components/CertificationGrid";
import { SectionTitle } from "@/components/SectionTitle";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import { profile, skills } from "@/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="プロフィール"
          title="技術領域と保有資格"
          description="制作物、技術発信、保有資格を通して、どのような領域で活動しているかをまとめています。"
        />
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-lg border border-slate-700/70 bg-slate-900/70 p-6 shadow-glow">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              プロフィール
            </p>
            <h3 className="mt-4 text-3xl font-bold text-white">{profile.name}</h3>
            <p className="mt-2 text-lg font-semibold text-sky-200">{profile.role}</p>
            <p className="mt-4 flex items-center gap-2 text-slate-300">
              <MapPin aria-hidden="true" className="h-4 w-4 text-cyan-300" />
              {profile.location}
            </p>
            <div className="mt-6 grid gap-3">
              <div className="rounded-lg border border-cyan-300/25 bg-cyan-300/10 p-4">
                <p className="text-sm font-semibold text-cyan-200">公開中の制作物</p>
                <p className="mt-1 text-2xl font-black text-white">2件</p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <ExternalLinkButton href={profile.githubUrl}>GitHub</ExternalLinkButton>
              <ExternalLinkButton href={profile.zennUrl}>Zenn</ExternalLinkButton>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="rounded-lg border border-slate-700/70 bg-slate-900/60 p-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                <Sparkles aria-hidden="true" className="h-5 w-5 text-violet-300" />
                技術領域
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    className="rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-200"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-slate-700/70 bg-slate-900/60 p-6">
              <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                <BadgeCheck aria-hidden="true" className="h-5 w-5 text-cyan-300" />
                保有資格
              </h3>
              <div className="mt-5">
                <CertificationGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
