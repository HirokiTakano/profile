export type Video = {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl?: string;
  publishedAt?: string;
  tags: string[];
};

export const videos: Video[] = [];
