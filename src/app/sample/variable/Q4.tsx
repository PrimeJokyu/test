"use client";

import React from "react";
import JumpNextOrPrev from "../components/JumpNextOrPrev";
import Question from "../components/Question";

export default function Q4() {
  const test = "aaaa";
  return (
    <>
      <JumpNextOrPrev />

      <Question
        n={4}
        title="変数の表示"
        p="
          変数を表示させましょう。
          ①まずは変数を宣言(作成)しましょう。
          ②return()の中のdivタグの中に{}を書きます。
          ③{}の中に変数名を書きます。
          赤線になってなかったらOK!
        "
      />
      {/* ↓↓↓↓↓↓↓答え↓↓↓↓↓↓↓ */}

      <div>{test}</div>
    </>
  );
}
