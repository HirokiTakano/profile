import { PlayCircle } from "lucide-react";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import { SectionTitle } from "@/components/SectionTitle";
import { VideoCard } from "@/components/VideoCard";
import { profile } from "@/data/profile";
import { videos } from "@/data/videos";

const categories = [
  "AWS / クラウド学習",
  "インフラエンジニアリング",
  "CLI / 自動化",
  "OSS 開発",
  "ツール制作の過程",
];

export function YouTubeSection() {
  return (
    <section id="youtube" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="YouTube"
          title="動画発信は準備中"
          description="学習ログ、ツール制作、インフラ実践をつなげた動画を今後追加していきます。"
        />
        {videos.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-lg border border-amber-300/25 bg-amber-300/10 p-7">
              <PlayCircle aria-hidden="true" className="h-11 w-11 text-amber-300" />
              <h3 className="mt-5 text-2xl font-bold text-white">YouTube は準備中です。</h3>
              <p className="mt-4 leading-7 text-slate-300">
                クラウド、インフラ、OSS 開発、学習ログに関する動画をここに掲載していきます。
              </p>
              <div className="mt-7">
                <ExternalLinkButton href={profile.youtubeUrl}>YouTube チャンネルを開く</ExternalLinkButton>
              </div>
            </div>
            <div className="rounded-lg border border-slate-700/80 bg-slate-900/65 p-7">
              <h3 className="text-xl font-bold text-white">動画テーマ</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {categories.map((category) => (
                  <div
                    className="rounded-md border border-slate-700 bg-slate-950/65 px-4 py-3 text-sm text-slate-200"
                    key={category}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
