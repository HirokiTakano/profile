import { BookOpen } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import { SectionTitle } from "@/components/SectionTitle";
import { articles } from "@/data/articles";
import { profile } from "@/data/profile";
import { getZennArticles } from "@/lib/zenn";

export async function ZennSection() {
  const zennArticles = await getZennArticles();
  const articleList = zennArticles.length > 0 ? zennArticles : articles;

  return (
    <section id="zenn" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Zenn"
          title="技術記事"
          description="クラウド、インフラ、自動化、OSS 開発の学習メモや技術記事をまとめる場所です。"
        />
        {articleList.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {articleList.map((article) => (
              <ArticleCard article={article} key={article.id} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-3xl rounded-lg border border-slate-700/80 bg-slate-900/70 p-8 text-center">
            <BookOpen aria-hidden="true" className="mx-auto h-10 w-10 text-cyan-300" />
            <h3 className="mt-5 text-2xl font-bold text-white">記事は準備中です。</h3>
            <p className="mt-4 leading-7 text-slate-300">
              技術記事や学習メモは、公開できる状態になったものから追加していきます。
            </p>
            <div className="mt-7">
              <ExternalLinkButton href={profile.zennUrl} variant="primary">
                Zenn を開く
              </ExternalLinkButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
