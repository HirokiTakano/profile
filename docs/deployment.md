# デプロイ方針

このサイトは GitHub に push した内容を AWS Amplify Hosting で公開する前提です。

## 方針

- Next.js App Router をそのまま Amplify Hosting にデプロイする
- 静的 export は使わない
- Zenn 記事は RSS フィードから取得する
- Zenn の新規記事は ISR により定期的に反映する

## Amplify の設定

リポジトリ直下の `amplify.yml` を使用します。

重要な設定:

```yaml
artifacts:
  baseDirectory: .next
```

このサイトは Zenn RSS を `fetch` し、30分ごとに再検証します。そのため、`out` ディレクトリを使う完全静的サイトではなく、Next.js の `.next` 出力を Amplify Hosting compute で扱う構成にしています。

## デプロイ手順

1. GitHub にこのリポジトリを push する
2. AWS Amplify Console で新しいアプリを作成する
3. GitHub リポジトリと公開ブランチを接続する
4. Amplify が `amplify.yml` を読み込むことを確認する
5. Build command が `npm run build`、Artifacts base directory が `.next` になっていることを確認する
6. デプロイする

## Zenn 記事の反映

Zenn URL は `src/data/profile.ts` の `profile.zennUrl` で管理しています。

現在の URL:

```ts
zennUrl: "https://zenn.dev/hiroki_infra"
```

記事一覧は `src/lib/zenn.ts` で `https://zenn.dev/hiroki_infra/feed` から取得します。新しい記事を投稿すると、Amplify 上では最大30分程度でサイトに反映されます。

## 主要ディレクトリ

```text
src/app/          Next.js App Router
src/components/   UI コンポーネント
src/data/         プロフィール、制作物、手動データ
src/lib/          外部データ取得、共通処理
public/           公開静的ファイル
docs/             運用・デプロイメモ
```

## プロフィールアイコン画像

トップに表示する自分のアイコン画像は `public/profile/icon.png` に配置します。

サイト側では `src/data/profile.ts` の `profile.avatarImageUrl` で画像パスを管理しています。

```ts
avatarImageUrl: "/profile/icon.png",
```

`public/profile/icon.png` が存在する場合はトップの名前付近に画像を表示します。画像が未配置、または読み込みに失敗した場合は初期アイコンを表示します。

## 資格バッジ画像

資格カードは `src/data/profile.ts` の `certifications` で管理しています。

バッジ画像を本番サイトに反映する場合:

1. 画像を `public/certifications/` に追加する
2. 対象資格の `badgeImageUrl` に `/certifications/<画像名>` を指定する

例:

```ts
{
  id: "aws-clf",
  name: "AWS Certified Cloud Practitioner",
  shortName: "AWS CLF",
  category: "aws",
  badgeImageUrl: "/certifications/aws-clf.png",
}
```

表示確認だけをしたい場合は、URL に `?edit=badges` を付けて開くとブラウザ内でバッジ画像を一時設定できます。
