"use client";

import React from "react";
import JumpNextOrPrev from "../components/JumpNextOrPrev";
import Question from "../components/Question";

export default function Q6() {
  const test = ["aaa"];
  return (
    <>
      <JumpNextOrPrev />

      <Question
        n={6}
        title="【応用】変数の種類(配列)"
        p='
        配列は、順番を持った変数の集まりです。配列[順番]でその番号の値を取り出すことができます。\n
        まとめて値を扱いたい場合や、順番に表示させたい場合などに便利です。
        ①const test = ["aaa"]と宣言して下さい。\n
        ③test[0]をdivタグの中に記載して、画面に表示させて下さい。
        '
      />
      {/* ↓↓↓↓↓↓↓答え↓↓↓↓↓↓↓ */}
      <div>{test[0]}</div>
    </>
  );
}
