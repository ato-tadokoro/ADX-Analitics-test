# ADX-Analytics-test

チラシからの流入を ADX Analytics と GA4 で確認するためのテストページです。

## 公開方法

GitHub Pages の設定で公開元をリポジトリ直下にすると、`index.html` が表示されます。

## 計測確認

ページ表示時と、`data-track` 属性が付いたリンク・ボタンのクリック時に、`window.dataLayer` とブラウザコンソールへテストイベントを送信します。

GA4 や ADX のタグは、`index.html` の `<head>` 内に追加する想定です。
