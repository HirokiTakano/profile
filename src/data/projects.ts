export type Project = {
  id: string;
  title: string;
  type: string;
  status: "published";
  description: string;
  userBenefit: string;
  technicalSummary: string;
  iconImageUrl?: string;
  githubUrl?: string;
  demoUrl?: string | null;
  tags: string[];
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  friendlyCategory: string;
  primaryBenefit: string;
  targetUsers: string[];
  useCases: string[];
  difficultyLabel: string;
  availabilityLabel: string;
  usageType: "browser" | "download" | "external";
  friendlyLabels: string[];
  featured?: boolean;
  latestNote?: string;
  updatedAtLabel?: string;
  accent: "orange" | "teal";
};

export const projects: Project[] = [
  {
    id: "thinkspeed",
    title: "ThinkSpeed",
    type: "メモアプリ",
    status: "published",
    description:
      "素早いアイデア記録、構造化された箇条書き、キーボード中心の作業を支援する軽量アウトライナーです。",
    userBenefit: "アイデア整理、文章の下書き、作業メモに使えます。",
    technicalSummary: "TypeScript で構築した、キーボード操作を重視した OSS Web アプリです。",
    iconImageUrl: "/projects/thinkspeed.png",
    githubUrl: "https://github.com/HirokiTakano/ThinkSpeed",
    demoUrl: "https://main.d3fxprpy7h64o7.amplifyapp.com/",
    tags: ["アウトライナー", "生産性", "OSS", "TypeScript"],
    primaryActionLabel: "ブラウザで使ってみる",
    secondaryActionLabel: "開発情報を見る",
    friendlyCategory: "メモ・思考整理",
    primaryBenefit: "アイデア整理、文章の下書き、作業メモに使えます。",
    targetUsers: ["考えを整理したい人", "文章を書く前にメモしたい人", "作業メモを残したい人"],
    useCases: ["アイデア出し", "文章の下書き", "タスク整理"],
    difficultyLabel: "初心者向け",
    availabilityLabel: "ブラウザで使える",
    usageType: "browser",
    friendlyLabels: ["インストール不要", "無料で試せる", "メモ・アイデア整理"],
    featured: true,
    latestNote: "アイデア整理に使えるメモツール",
    updatedAtLabel: "ブラウザで公開中",
    accent: "teal",
  },
  {
    id: "pc-detail-check",
    title: "PCDetailCheck",
    type: "PC確認ツール",
    status: "published",
    description:
      "PC の詳細情報を確認し、利用者が自分のコンピューター情報を共有しやすくするためのシンプルなツールです。",
    userBenefit: "自分のPC情報を調べたい時や、相手に状況を伝えたい時に役立ちます。",
    technicalSummary: "Windows 向けのユーティリティとして、GitHub Release から配布しています。",
    iconImageUrl: "/projects/pcdetailcheck.png",
    githubUrl: "https://github.com/HirokiTakano/PCDetailCheck",
    demoUrl: "https://github.com/HirokiTakano/PCDetailCheck/releases",
    tags: ["Windows", "ユーティリティ", "PC 確認", "GitHub リリース"],
    primaryActionLabel: "ダウンロードページを見る",
    secondaryActionLabel: "開発情報を見る",
    friendlyCategory: "PC確認・サポート",
    primaryBenefit: "PCに詳しくなくても、必要な情報を確認しやすくなります。",
    targetUsers: ["PC情報を聞かれて困った人", "サポートに相談したい人", "自分のPC環境を確認したい人"],
    useCases: ["PCスペック確認", "トラブル相談", "サポート時の情報共有"],
    difficultyLabel: "かんたん",
    availabilityLabel: "Windows向け",
    usageType: "download",
    friendlyLabels: ["ダウンロードして使う", "サポート時に便利", "PC情報確認"],
    featured: true,
    latestNote: "PC情報を確認したい時に便利",
    updatedAtLabel: "Windows向け",
    accent: "orange",
  },
];
