import Image from "next/image";
import {
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Globe2,
  MousePointer2,
  Sparkles,
  Wrench,
} from "lucide-react";
import { BrandIcon } from "@/components/BrandIcon";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const genres = [
  {
    id: "web-app",
    label: "Webアプリ",
    description: "インストールなしで開ける、日々の作業に使いやすいアプリです。",
    icon: Globe2,
    projectIds: ["thinkspeed"],
  },
  {
    id: "utility",
    label: "ユーティリティ",
    description: "PC確認や共有など、特定の困りごとを短時間で解決するツールです。",
    icon: Wrench,
    projectIds: ["pc-detail-check"],
  },
];

const projectVisuals: Record<string, string> = {
  thinkspeed: "/projects/thinkspeed.png",
};

const projectHighlights: Record<string, string[]> = {
  thinkspeed: ["ブラウザで利用可能", "考えをすばやく整理", "文章作成や作業メモに便利"],
  "pc-detail-check": ["Windows向け", "PC情報を確認", "相談やサポート時に共有しやすい"],
};

export function WorksList() {
  return (
    <div className="mt-10 space-y-12">
      {genres.map((genre) => {
        const genreProjects = projects.filter((project) => genre.projectIds.includes(project.id));
        const GenreIcon = genre.icon;

        if (genreProjects.length === 0) {
          return null;
        }

        return (
          <section aria-labelledby={`${genre.id}-heading`} key={genre.id}>
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-orange-200 bg-white text-orange-700">
                  <GenreIcon aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-stone-950" id={`${genre.id}-heading`}>
                    {genre.label}
                  </h2>
                  <p className="mt-1 leading-7 text-stone-700">{genre.description}</p>
                </div>
              </div>
              <div className="w-fit rounded-md border border-stone-200 bg-white px-3 py-1.5 text-sm font-bold text-stone-700">
                {genreProjects.length}件
              </div>
            </div>

            <div className="grid gap-5 xl:grid-cols-2">
              {genreProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const visual = projectVisuals[project.id];
  const highlights = projectHighlights[project.id] || project.tags.slice(0, 3);
  const actionIcon = project.demoUrl ? ExternalLink : Download;
  const ActionIcon = actionIcon;

  return (
    <article className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-[0_16px_45px_rgba(68,64,60,0.10)] transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_22px_60px_rgba(120,53,15,0.15)]">
      <div className="grid min-h-full lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-stone-200 bg-stone-100 lg:border-b-0 lg:border-r">
          {visual ? (
            <Image
              alt={`${project.title} の画面`}
              className="h-full min-h-56 w-full object-cover object-left-top"
              height={520}
              src={visual}
              width={720}
            />
          ) : (
            <div className="flex h-full min-h-56 items-center justify-center bg-gradient-to-br from-amber-100 to-teal-50 px-6 text-center">
              <div>
                <Sparkles aria-hidden="true" className="mx-auto h-9 w-9 text-orange-700" />
                <p className="mt-3 text-lg font-black text-stone-900">{project.title}</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-orange-200 bg-orange-50 text-orange-700">
              <MousePointer2 aria-hidden="true" className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-teal-700">{project.type}</p>
              <h3 className="mt-1 text-2xl font-black text-stone-950">{project.title}</h3>
            </div>
          </div>

          <p className="mt-5 leading-8 text-stone-700">{project.userDescription}</p>

          <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-black text-amber-900">こんな時に便利</p>
            <p className="mt-2 leading-7 text-stone-800">{project.userBenefit}</p>
          </div>

          <ul className="mt-5 grid gap-2">
            {highlights.map((highlight) => (
              <li
                className="flex items-center gap-2 text-sm font-semibold text-stone-700"
                key={highlight}
              >
                <CheckCircle2 aria-hidden="true" className="h-4 w-4 shrink-0 text-teal-700" />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <ExternalLinkButton
              href={project.demoUrl || project.githubUrl}
              variant="warmPrimary"
              ariaLabel={`${project.title} を新しいタブで開きます`}
            >
              <ActionIcon aria-hidden="true" className="h-4 w-4" />
              {project.primaryActionLabel}
            </ExternalLinkButton>
            <ExternalLinkButton href={project.githubUrl} variant="warmSecondary">
              <BrandIcon id="github" label="GitHub" />
              {project.secondaryActionLabel}
            </ExternalLinkButton>
          </div>

          <details className="mt-5 rounded-lg border border-stone-200 bg-stone-50 p-4">
            <summary className="flex cursor-pointer items-center gap-2 text-sm font-bold text-stone-700">
              <Code2 aria-hidden="true" className="h-4 w-4 text-teal-700" />
              技術メモを見る
            </summary>
            <p className="mt-4 leading-7 text-stone-700">{project.technicalSummary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  className="rounded-md border border-stone-200 bg-white px-2.5 py-1 text-xs font-medium text-stone-600"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </details>
        </div>
      </div>
    </article>
  );
}
