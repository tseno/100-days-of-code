import React from "react";
import ReactDOM from "react-dom";
import MyArticle from "./MyArticle";

const articles = [
  {
    url: "https://www.atmarkit.co.jp/ait/series/9383/",
    title: "Angular TIPS",
    description: "人気のJavaScriptフレームワーク「Angular」の目的別リファレンス",
    isNew: true,
  },
  {
    url: "https://www.atmarkit.co.jp/ait/series/9384/",
    title: "Angular TIPS2",
    description: "人気のJavaScriptフレームワーク「Angular」の目的別リファレンス2",
    isNew: true,
  },
];

ReactDOM.render(
  <dl>
    {articles.map((article) => (
      <MyArticle {...article} key={article.url}></MyArticle>
    ))}
  </dl>,
  document.getElementById("root")
);
