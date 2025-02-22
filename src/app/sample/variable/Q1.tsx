"use client";

import React from "react";
import Question from "../components/Question";
import JumpNextOrPrev from "../components/JumpNextOrPrev";

export default function Q1() {
  return (
    <>
      <JumpNextOrPrev />
      <Question
        n={1}
        title="変数宣言"
        p='
          変数を宣言して、画面上に表示してください\n
          ①変数は以下のように宣言します。\n
          const 変数名  = 値;\n
          例) const test = 1;"
        '
      />
    </>
  );
}
