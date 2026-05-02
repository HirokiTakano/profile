export type Project = {
  id: string;
  title: string;
  type: string;
  status: "published";
  description: string;
  userDescription: string;
  userBenefit: string;
  technicalSummary: string;
  githubUrl?: string;
  demoUrl?: string | null;
  tags: string[];
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
};

export const projects: Project[] = [
  {
    id: "thinkspeed",
    title: "ThinkSpeed",
    type: "Web アプリ / OSS",
    status: "published",
    description:
      "素早いアイデア記録、構造化された箇条書き、キーボード中心の作業を支援する軽量アウトライナーです。",
    userDescription:
      "考えをすばやく書き出し、あとから見返しやすい形に整理できるメモツールです。",
    userBenefit: "アイデア整理、文章の下書き、作業メモに使えます。",
    technicalSummary: "TypeScript で構築した、キーボード操作を重視した OSS Web アプリです。",
    githubUrl: "https://github.com/HirokiTakano/ThinkSpeed",
    demoUrl: "https://main.d3fxprpy7h64o7.amplifyapp.com/",
    tags: ["アウトライナー", "生産性", "OSS", "TypeScript"],
    primaryActionLabel: "アプリを開く",
    secondaryActionLabel: "GitHub を見る",
  },
  {
    id: "pc-detail-check",
    title: "PCDetailCheck",
    type: "ユーティリティツール",
    status: "published",
    description:
      "PC の詳細情報を確認し、利用者が自分のコンピューター情報を共有しやすくするためのシンプルなツールです。",
    userDescription:
      "PC の情報を確認し、サポート時や相談時に必要な情報を共有しやすくするためのツールです。",
    userBenefit: "自分のPC情報を調べたい時や、相手に状況を伝えたい時に役立ちます。",
    technicalSummary: "Windows 向けのユーティリティとして、GitHub Release から配布しています。",
    githubUrl: "https://github.com/HirokiTakano/PCDetailCheck",
    demoUrl: null,
    tags: ["Windows", "ユーティリティ", "PC 確認", "GitHub リリース"],
    primaryActionLabel: "GitHub からダウンロード",
    secondaryActionLabel: "リポジトリを見る",
  },
];
