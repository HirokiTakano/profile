import { Code2, MousePointer2 } from "lucide-react";
import { BrandIcon } from "@/components/BrandIcon";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import { projects } from "@/data/projects";

export function WorksList() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project) => (
        <article
          className="rounded-lg border border-slate-700/80 bg-slate-900/75 p-6 transition hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-slate-900"
          key={project.id}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              <MousePointer2 aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">{project.title}</h2>
              <p className="mt-2 text-sm font-semibold text-cyan-200">{project.type}</p>
            </div>
          </div>
          <p className="mt-5 leading-7 text-slate-300">{project.userDescription}</p>
          <p className="mt-4 rounded-lg border border-slate-700 bg-slate-950/65 p-4 leading-7 text-slate-200">
            {project.userBenefit}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <ExternalLinkButton
              href={project.demoUrl || project.githubUrl}
              variant="primary"
              ariaLabel={`${project.title} を新しいタブで開きます`}
            >
              {project.primaryActionLabel}
            </ExternalLinkButton>
            <ExternalLinkButton href={project.githubUrl}>
              <BrandIcon id="github" label="GitHub" />
              {project.secondaryActionLabel}
            </ExternalLinkButton>
          </div>
          <details className="mt-5 rounded-lg border border-slate-700 bg-slate-950/45 p-4">
            <summary className="flex cursor-pointer items-center gap-2 text-sm font-bold text-slate-200">
              <Code2 aria-hidden="true" className="h-4 w-4 text-violet-200" />
              技術メモを見る
            </summary>
            <p className="mt-4 leading-7 text-slate-300">{project.technicalSummary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </details>
        </article>
      ))}
    </div>
  );
}
