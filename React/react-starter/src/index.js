import React from "react";
import ReactDOM from "react-dom";
import MyHello from "./App";

const info = {
  title: "今日は寒い",
  isbn: "WGS-JST-001",
  price: 1000,
  published: "WING",
};

ReactDOM.render(
  <React.StrictMode>
    <MyHello info={info}>今日は寒い。</MyHello>
  </React.StrictMode>,
  document.getElementById("root")
);
