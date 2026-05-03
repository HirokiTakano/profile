export type SocialLink = {
  id: string;
  label: string;
  url: string | null;
  status: "active" | "preparing";
  description: string;
};

export type Certification = {
  id: string;
  name: string;
  shortName: string;
  category: "aws" | "it";
  badgeImageUrl?: string;
};

export const profile = {
  name: "Takano Hiroki",
  role: "インフラエンジニア",
  shortRole: "インフラエンジニア",
  location: "日本",
  avatarImageUrl: "/profile/icon.png",
  heroSummary:
    "思考整理、情報共有、日々の技術作業を少し速くする軽量なツールを作っています。",
  githubUrl: "https://github.com/HirokiTakano",
  zennUrl: "https://zenn.dev/hiroki_infra",
  youtubeUrl: null,
  xUrl: "https://x.com/hiroki_takano12",
};

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/HirokiTakano",
    status: "active",
    description: "コード、OSS、制作物のリポジトリ",
  },
  {
    id: "youtube",
    label: "YouTube",
    url: null,
    status: "preparing",
    description: "クラウド・インフラ・開発ログの動画発信",
  },
  {
    id: "zenn",
    label: "Zenn",
    url: "https://zenn.dev/hiroki_infra",
    status: "active",
    description: "技術記事、学習メモ、アウトプット",
  },
  {
    id: "x",
    label: "X",
    url: "https://x.com/hiroki_takano12",
    status: "active",
    description: "日々の学習や制作の短い発信",
  },
];

export const skills = [
  "クラウド / AWS",
  "Linux",
  "インフラ",
  "自動化",
  "Codex",
];

export const certifications: Certification[] = [
  {
    id: "aws-clf",
    name: "AWS Certified Cloud Practitioner",
    shortName: "AWS CLF",
    category: "aws",
    badgeImageUrl: "/certifications/aws-clf.png",
  },
  {
    id: "aws-aif",
    name: "AWS Certified AI Practitioner",
    shortName: "AWS AIF",
    category: "aws",
    badgeImageUrl: "/certifications/aws-aif.png",
  },
  {
    id: "it-passport",
    name: "ITパスポート",
    shortName: "IT Passport",
    category: "it",
    badgeImageUrl: "/certifications/ITpass.png",
  },
];
