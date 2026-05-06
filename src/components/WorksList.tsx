import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  ExternalLink,
  Github,
  Laptop,
  MousePointer2,
} from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

export function WorksList() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20" id="tools">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
          まず使ってほしいツール
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          CleaPasでは、PC作業の小さな不便を減らすためのツールを順次公開しています。
        </p>
      </div>

      <div className="grid gap-6">
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
  const isTeal = project.accent === "teal";
  const accentClasses = isTeal
    ? {
        line: "from-teal-600 via-teal-500 to-emerald-300",
        icon: "border-teal-100 bg-teal-50 text-teal-700",
        label: "bg-teal-50 text-teal-700",
        panel: "border-teal-100 bg-teal-50/70",
        cta: "bg-teal-600 hover:bg-teal-700 focus:ring-teal-300 shadow-[0_12px_26px_rgba(15,118,110,0.22)]",
      }
    : {
        line: "from-orange-500 via-amber-400 to-orange-200",
        icon: "border-orange-100 bg-orange-50 text-orange-600",
        label: "bg-orange-50 text-orange-700",
        panel: "border-orange-100 bg-orange-50/70",
        cta: "bg-orange-500 hover:bg-orange-600 focus:ring-orange-300 shadow-[0_12px_26px_rgba(249,115,22,0.22)]",
      };

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_16px_46px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_62px_rgba(15,23,42,0.10)] md:p-8">
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accentClasses.line}`}
      />

      <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
        <div className={`rounded-3xl border p-5 ${accentClasses.panel}`}>
          <div className="flex items-center justify-center rounded-3xl bg-white p-5 shadow-sm">
            {project.iconImageUrl ? (
              <Image
                src={project.iconImageUrl}
                alt={`${project.title}のアイコン`}
                width={220}
                height={220}
                className="h-44 w-44 object-contain"
              />
            ) : (
              <UsageIcon aria-hidden="true" className="h-24 w-24" />
            )}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.friendlyLabels.map((label) => (
              <span
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-bold text-slate-700"
                key={label}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className={`inline-flex rounded-full px-3 py-1.5 text-sm font-black ${accentClasses.label}`}>
            {project.friendlyCategory}
          </span>
          <h3 className="mt-4 text-3xl font-black tracking-normal text-slate-950">
            {project.title}
          </h3>
          <p className="mt-3 text-xl font-black leading-8 text-slate-800">
            {project.primaryBenefit}
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">{project.description}</p>

          <div className="mt-6">
            <h4 className="flex items-center gap-2 text-sm font-black text-slate-950">
              <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-teal-700" />
              使える場面
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.useCases.map((useCase) => (
                <span
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-bold text-slate-700"
                  key={useCase}
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white ${accentClasses.cta}`}
              href={primaryHref}
              rel="noreferrer"
              target="_blank"
            >
              <ActionIcon aria-hidden="true" className="h-4 w-4" />
              {project.primaryActionLabel}
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 transition hover:-translate-y-0.5 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-white"
              href={githubHref}
              rel="noreferrer"
              target="_blank"
            >
              <Github aria-hidden="true" className="h-4 w-4" />
              {project.secondaryActionLabel}
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
