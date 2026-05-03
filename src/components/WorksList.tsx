import {
  Download,
  ExternalLink,
  Laptop,
  Lightbulb,
  MousePointer2,
  MonitorCheck,
} from "lucide-react";
import Image from "next/image";
import { BrandIcon } from "@/components/BrandIcon";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const genres = [
  {
    id: "notes",
    label: "メモする",
    description: "思いついたことを書き出したい時に使うアプリです。",
    icon: Lightbulb,
    projectIds: ["thinkspeed"],
  },
  {
    id: "pc-check",
    label: "PCを確認する",
    description: "自分のPC情報を確認したい時に使うアプリです。",
    icon: MonitorCheck,
    projectIds: ["pc-detail-check"],
  },
];

export function WorksList() {
  return (
    <div className="mt-10 space-y-10">
      {genres.map((genre) => {
        const genreProjects = projects.filter((project) => genre.projectIds.includes(project.id));
        const GenreIcon = genre.icon;

        if (genreProjects.length === 0) {
          return null;
        }

        return (
          <section aria-labelledby={`${genre.id}-heading`} key={genre.id}>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 text-orange-700">
                <GenreIcon aria-hidden="true" className="h-5 w-5" />
              </div>
              <div className="flex gap-3">
                <div>
                  <h2 className="text-xl font-black text-stone-950" id={`${genre.id}-heading`}>
                    {genre.label}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-stone-600">{genre.description}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
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
  const actionIcon = project.demoUrl ? ExternalLink : Download;
  const ActionIcon = actionIcon;
  const UsageIcon = project.usageType === "browser" ? MousePointer2 : Laptop;

  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-5 shadow-[0_10px_28px_rgba(68,64,60,0.08)] transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-[0_14px_36px_rgba(120,53,15,0.12)]">
      <div className="flex gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-orange-100 bg-orange-50 text-orange-700">
          {project.iconImageUrl ? (
            <Image
              src={project.iconImageUrl}
              alt=""
              aria-hidden="true"
              width={56}
              height={56}
              className="h-full w-full object-cover"
            />
          ) : (
            <UsageIcon aria-hidden="true" className="h-7 w-7" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-sm font-bold text-teal-700">{project.type}</p>
              <h3 className="mt-1 text-2xl font-black text-stone-950">{project.title}</h3>
              <p className="mt-2 max-w-2xl leading-7 text-stone-700">{project.friendlySummary}</p>
            </div>
            <ExternalLinkButton
              href={project.demoUrl || project.githubUrl}
              variant="softPrimary"
              ariaLabel={`${project.title} を新しいタブで開きます`}
              className="shrink-0"
            >
              <ActionIcon aria-hidden="true" className="h-4 w-4" />
              {project.primaryActionLabel}
            </ExternalLinkButton>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <ExternalLinkButton
              href={project.githubUrl}
              variant="softSecondary"
              ariaLabel={`${project.title} の開発情報を新しいタブで開きます`}
            >
              <BrandIcon id="github" label="GitHub" />
              {project.secondaryActionLabel}
            </ExternalLinkButton>
          </div>
        </div>
      </div>
    </article>
  );
}
