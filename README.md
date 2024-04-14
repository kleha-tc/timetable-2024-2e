# 2024年度2年Eコースポータルサイト

本Webページは、2024年度の2年Eコース内で、時間割その他情報の共有を行うことを目的として作成した。  

## フォークして使う人へ

本サイトの変更用のガイドは[こちら](./how-to-edit.md)より確認できるので参考にしてください。

## 技術選定

以下のものを今回は採用した。

### Next.js

フロントエンドフレームワークには、Next.jsを採用した。  
これは、現在国内で最も使われているフロントエンドフレームワークであり、特段設定せずとも動かせるため採用した。  
このため、本WebページはReactを用いて開発している。

### Tailwindcss

CSSフレームワークとしてTailwindcssを採用した。  
これは、CSSのプロパティに対応したclassを設定することでスタイリングが容易にできるというものである。

### MUI/Material

UIフレームワークにはMUI/Materialを採用した。  
これは、ReactベースのMaterial UIコンポーネントである。

## ルーティング

今回は、Next.jsのApp Routerを利用した。  
そのため、ページを構成するファイルは`@/App`ディレクトリにある。  
App Routerを使用する場合、ページ名に対応したディレクトリを作成し、そこに`page.tsx`というファイルを用意しなければならない。  
なお、今回はTypeScriptを採用したため、`tsx`ファイルを採用した。
また、App Routerを利用する場合、コンポーネントは既定でサーバーコンポーネントになるので、クライアントコンポーネントにする場合は`'use client'`とファイルの先頭に書く必要がある。

## JSX

Reactには、`JSX`という記法があり、これを利用することで、JavaScript/TypeScript上でHTMLを記述することができる。  
JSX記法はJavaScriptとTypeScriptに対応しており、拡張子はそれぞれ`.jsx`と`.tsx`である。
