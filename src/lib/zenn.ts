import { XMLParser } from "fast-xml-parser";
import type { Article } from "@/data/articles";
import { profile } from "@/data/profile";

const ZENN_FEED_REVALIDATE_SECONDS = 60 * 30;
const ZENN_FEED_URL = `${profile.zennUrl.replace(/\/$/, "")}/feed`;

type ZennFeedItem = {
  title?: string;
  link?: string;
  description?: string;
  pubDate?: string;
  category?: string | string[];
};

type ZennFeed = {
  rss?: {
    channel?: {
      item?: ZennFeedItem | ZennFeedItem[];
    };
  };
};

const parser = new XMLParser({
  ignoreAttributes: false,
  trimValues: true,
});

function toArray<T>(value: T | T[] | undefined): T[] {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
}

function toPublishedDate(pubDate: string | undefined) {
  if (!pubDate) {
    return "";
  }

  const date = new Date(pubDate);

  if (Number.isNaN(date.getTime())) {
    return pubDate;
  }

  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function toPlainText(value: string | undefined) {
  if (!value) {
    return "Zenn に投稿した技術記事です。";
  }

  const text = value
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= 140) {
    return text;
  }

  return `${text.slice(0, 140)}...`;
}

export async function getZennArticles(): Promise<Article[]> {
  try {
    const response = await fetch(ZENN_FEED_URL, {
      next: { revalidate: ZENN_FEED_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return [];
    }

    const xml = await response.text();
    const feed = parser.parse(xml) as ZennFeed;
    const items = toArray(feed.rss?.channel?.item);

    return items.map((item, index) => {
      const url = item.link ?? "";
      const tags = toArray(item.category).filter(Boolean);

      return {
        id: url || `zenn-${index}`,
        title: item.title ?? "無題の記事",
        description: toPlainText(item.description),
        url,
        publishedAt: toPublishedDate(item.pubDate),
        tags,
      };
    });
  } catch {
    return [];
  }
}
