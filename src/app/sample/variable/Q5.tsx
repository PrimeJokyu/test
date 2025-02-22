"use client";

import React from "react";
import JumpNextOrPrev from "../components/JumpNextOrPrev";
import Question from "../components/Question";

export default function Q5() {
  const test = true;
  return (
    <>
      <JumpNextOrPrev />

      <Question
        n={5}
        title="変数の種類(真偽値)"
        p="
        真偽値は true もしくは false です。\n
        主に条件でしようします。
        ①const test1 = trueと宣言して下さい。\n
        ②test1をdivタグの中に記載して、画面に表示させて下さい。（どうなるか予想してみよう！）
        "
      />
      {/* ↓↓↓↓↓↓↓答え↓↓↓↓↓↓↓ */}
      <div>{test.toString()}</div>
    </>
  );
}
