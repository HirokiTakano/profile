import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  ExternalLink,
  Github,
  Laptop,
  MousePointer2,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

export function WorksList() {
  return (
    <section className="mt-12" id="tools">
      <div className="mb-6 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-950">公開中の便利ツール</h2>
          <p className="mt-2 leading-7 text-slate-700">
            いま使えるPC向けツールをまとめています。
          </p>
        </div>
        <p className="shrink-0 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-bold text-cyan-800">
          公開中 {projects.length}件
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ActionIcon = project.demoUrl ? ExternalLink : Download;
  const UsageIcon = project.usageType === "browser" ? MousePointer2 : Laptop;
  const primaryHref = project.demoUrl || project.githubUrl || "#";
  const githubHref = project.githubUrl || "#";

  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-cyan-100 bg-white p-6 shadow-[0_14px_36px_rgba(8,102,138,0.08)] transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_22px_52px_rgba(8,102,138,0.14)]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-cyan-700 via-teal-500 to-lime-300"
      />

      <div className="flex items-start gap-5">
        <div className="flex h-[88px] w-[88px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-700">
          {project.iconImageUrl ? (
            <Image
              src={project.iconImageUrl}
              alt=""
              aria-hidden="true"
              width={88}
              height={88}
              className="h-full w-full object-cover"
            />
          ) : (
            <UsageIcon aria-hidden="true" className="h-11 w-11" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-black text-cyan-800">{project.type}</p>
            {project.latestNote ? (
              <p className="inline-flex items-center gap-1 text-sm font-bold text-slate-500">
                <Sparkles aria-hidden="true" className="h-4 w-4 text-teal-700" />
                {project.latestNote}
              </p>
            ) : null}
          </div>
          <h3 className="mt-1 text-2xl font-black text-slate-950">{project.title}</h3>
        </div>
        <span className="shrink-0 rounded-full border border-teal-100 bg-teal-50 px-3 py-1 text-xs font-black text-teal-800">
          {project.updatedAtLabel}
        </span>
      </div>

      <div className="mt-4 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-4">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-800">
          このツールでできること
        </p>
        <p className="mt-2 font-bold leading-7 text-slate-800">{project.primaryBenefit}</p>
      </div>

      <div className="mt-5">
        <h4 className="flex items-center gap-2 text-sm font-black text-slate-950">
          <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-cyan-700" />
          こんな時に使えます
        </h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.useCases.slice(0, 3).map((useCase) => (
            <span
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-bold text-slate-700"
              key={useCase}
            >
              {useCase}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <a
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-cyan-700 bg-cyan-700 px-5 py-3 text-sm font-black text-white shadow-[0_12px_26px_rgba(8,145,178,0.22)] transition hover:-translate-y-0.5 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-white"
          href={primaryHref}
          rel="noreferrer"
          target="_blank"
        >
          <ActionIcon aria-hidden="true" className="h-4 w-4" />
          {project.primaryActionLabel}
        </a>
        <a
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-600 transition hover:-translate-y-0.5 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-white"
          href={githubHref}
          rel="noreferrer"
          target="_blank"
        >
          <Github aria-hidden="true" className="h-4 w-4" />
          開発情報
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
