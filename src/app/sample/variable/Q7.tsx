"use client";

import React from "react";
import JumpNextOrPrev from "../components/JumpNextOrPrev";
import Question from "../components/Question";

export default function Q7() {
  const test = ["aaa", "bbb"];
  return (
    <>
      <JumpNextOrPrev />
      <Question
        n={7}
        title="【応用】変数の種類(配列2)"
        p='①const test = ["aaa", "bbb"]と宣言して下さい。\n
              ②test[1]をdivタグの中に記載して、画面に表示させて下さい。
              \n（存在しない番号を指定したらどうなるかな？）
              '
      />
      {/* ↓↓↓↓↓↓↓答え↓↓↓↓↓↓↓ */}
      <div>{test[1]}</div>
      {/* 存在しない値を表示させる方法 */}
      <div>{String(test[2])}</div>
    </>
  );
}
