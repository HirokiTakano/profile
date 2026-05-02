import { Play } from "lucide-react";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import type { Video } from "@/data/videos";

type VideoCardProps = {
  video: Video;
};

export function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="rounded-lg border border-slate-700 bg-slate-900/65 p-5">
      <div className="flex aspect-video items-center justify-center rounded-md border border-slate-700 bg-slate-950">
        <Play aria-hidden="true" className="h-10 w-10 text-cyan-300" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-white">{video.title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{video.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {video.tags.map((tag) => (
          <span className="rounded-md bg-slate-950 px-2.5 py-1 text-xs text-slate-300" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <ExternalLinkButton href={video.url}>YouTube で見る</ExternalLinkButton>
      </div>
    </article>
  );
}
