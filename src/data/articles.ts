export type Article = {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  tags: string[];
};

export const articles: Article[] = [];
