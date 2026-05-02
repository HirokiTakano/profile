import { CalendarDays } from "lucide-react";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import type { Article } from "@/data/articles";

type ArticleCardProps = {
  article: Article;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded-lg border border-slate-700 bg-slate-900/65 p-5">
      <h3 className="text-xl font-bold text-white">{article.title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{article.description}</p>
      <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
        <CalendarDays aria-hidden="true" className="h-4 w-4" />
        {article.publishedAt}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span className="rounded-md bg-slate-950 px-2.5 py-1 text-xs text-slate-300" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <ExternalLinkButton href={article.url}>Zenn で読む</ExternalLinkButton>
      </div>
    </article>
  );
}
