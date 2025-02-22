"use client";

import React from "react";
import JumpNextOrPrev from "../components/JumpNextOrPrev";
import Question from "../components/Question";

export default function Q2() {
  return (
    <>
      <JumpNextOrPrev />

      <Question
        n={2}
        title="変数の種類(string)"
        p='変数には種類があります。\n文字を変数として入力するには以下のように書く必要があります。\nconst test = "aaa";\n""で囲む必要があります。'
      />
      <div className="flex justify-start mt-2 space-x-2">
        「const test = {'"aaa"'};」を「return()」のカッコの<strong>上</strong>
        に書きましょう。
      </div>
    </>
  );
}
