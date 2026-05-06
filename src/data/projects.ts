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
    type: "メモ・思考整理",
    status: "published",
    description:
      "アイデア出し、文章の下書き、作業メモをキーボード中心で素早く残せます。思いついた内容をすぐに書き出し、あとから整理したい人に向いています。",
    userBenefit: "考えをすばやく書き出して、あとから整理できます。",
    technicalSummary: "TypeScript で構築した、キーボード操作を重視した OSS Web アプリです。",
    iconImageUrl: "/projects/thinkspeed.png",
    githubUrl: "https://github.com/HirokiTakano/ThinkSpeed",
    demoUrl: "https://main.d3fxprpy7h64o7.amplifyapp.com/",
    tags: ["アウトライナー", "生産性", "OSS", "TypeScript"],
    primaryActionLabel: "ThinkSpeedを無料で使う",
    secondaryActionLabel: "開発情報を見る",
    friendlyCategory: "メモ・思考整理",
    primaryBenefit: "考えをすばやく書き出して、あとから整理できるメモツール",
    targetUsers: ["考えを整理したい人", "文章を書く前にメモしたい人", "作業メモを残したい人"],
    useCases: ["アイデア出し", "文章の下書き", "タスク整理", "作業メモ"],
    difficultyLabel: "初心者向け",
    availabilityLabel: "ブラウザで使える",
    usageType: "browser",
    friendlyLabels: ["ブラウザで使える", "インストール不要", "無料で試せる"],
    featured: true,
    latestNote: "アイデア整理に使えるメモツール",
    updatedAtLabel: "ブラウザで公開中",
    accent: "teal",
  },
  {
    id: "pc-detail-check",
    title: "PCDetailCheck",
    type: "PC確認・サポート",
    status: "published",
    description:
      "PCスペック確認やトラブル相談時に、必要な情報をまとめて確認できます。PCに詳しくない人でも、自分の環境を確認しやすくするためのツールです。",
    userBenefit: "PC情報をかんたんに確認して、相手に伝えやすくします。",
    technicalSummary: "Windows 向けのユーティリティとして、GitHub Release から配布しています。",
    iconImageUrl: "/projects/pcdetailcheck.png",
    githubUrl: "https://github.com/HirokiTakano/PCDetailCheck",
    demoUrl: "https://github.com/HirokiTakano/PCDetailCheck/releases",
    tags: ["Windows", "ユーティリティ", "PC 確認", "GitHub リリース"],
    primaryActionLabel: "Windows版をダウンロードする",
    secondaryActionLabel: "開発情報を見る",
    friendlyCategory: "PC確認・サポート",
    primaryBenefit: "PC情報をかんたんに確認して、相手に伝えやすくするWindowsツール",
    targetUsers: ["PC情報を聞かれて困った人", "サポートに相談したい人", "自分のPC環境を確認したい人"],
    useCases: ["PCスペック確認", "トラブル相談", "サポート時の情報共有", "自分のPC環境確認"],
    difficultyLabel: "かんたん",
    availabilityLabel: "Windows向け",
    usageType: "download",
    friendlyLabels: ["Windows向け", "PC情報確認", "サポート相談に便利"],
    featured: true,
    latestNote: "PC情報を確認したい時に便利",
    updatedAtLabel: "Windows向け",
    accent: "orange",
  },
];
