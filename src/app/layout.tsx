import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Takano Hiroki | ポートフォリオ",
  description:
    "Takano Hiroki のプロフィール、制作物、技術記事、今後の発信をまとめたポートフォリオサイトです。",
  openGraph: {
    title: "Takano Hiroki | ポートフォリオ",
    description:
      "Takano Hiroki のプロフィール、制作物、技術記事、今後の YouTube 発信をまとめて見られます。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
