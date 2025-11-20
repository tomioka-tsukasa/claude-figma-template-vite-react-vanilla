# レスポンシブスタイルガイド

## 概要

`src/styles/responsive.css.ts`はプロジェクトのレスポンシブデザインの基盤となるユーティリティです。Vanilla Extractを使用して、さまざまなデバイスサイズに最適化されたスタイルを簡単に定義できます。

## デザインサイズ・メディアクエリサイズ

プロジェクトで設定されているデザインサイズやメディアクエリのサイズは `/src/styles/responsive.config.ts` を参照してください。

デザインサイズとは、Figmaでそれぞれの端末がどのサイズでデザインされているかを示すサイズで `rvw()` メソッドの計算で使用されています。（実際のメソッドは `/src/styles/responsive.css.ts` で定義されている）

メディアクエリの定義は `/src/styles/responsive.css.ts` このファイルの `mediaQueries` オブジェクトで定義されています。

## 主な機能

### `rvw` - レスポンシブな値を生成

ビューポートの幅に応じて値を計算します。異なるデバイスごとに最適な値を設定できます。**フォントサイズやマージンなどのレイアウトの実装には必ず`rvw`を使用してください。**

```typescript
// 使用例
const sampleClass = style([
  {
    // 通常のスタイル
    position: 'relative',
  },
  rvw.fontSize(16, 14, 15), // PC:16, SP:14, タブレット:15の値
  rvw.margin(20, 10),       // PC:20, SP:10の値
  rvw.padding(30),          // 全デバイス共通:30の値
])
```

### デバイス別スタイル

特定のデバイスにのみ適用するスタイルを定義できます。

```typescript
// 使用例
export const sampleClass = style([
  {
    // 通常のスタイル
    position: 'relative',
  },
  rvw.width(10, 10, 10),
  sp([
    {
      // 通常のスタイル
      backgroundColor: 'red',
    },
    rvw.width(0, 100, 0),
  ]),
  tablet([
    {
      // 通常のスタイル
      backgroundColor: 'blue',
    },
    rvw.width(0, 0, 500),
  ]),
  pc([
    {
      // 通常のスタイル
      backgroundColor: 'green',
    },
    rvw.width(1000, 0, 0),
  ]),
])
```

上記の例の場合、SPのメディアクエリでは `rvw.width(0, 100, 0)` の `100` の値が適用されます。
→ `rvw.width(10, 10, 10)` よりも優先される。

### ホバーエフェクト

ホバー対応デバイスのみにエフェクトを適用します。

```typescript
// 使用例
const sampleClass = style([
  {
    backgroundColor: 'blue',
  },
  hover({
    backgroundColor: 'darkblue',
  }),
])
```
