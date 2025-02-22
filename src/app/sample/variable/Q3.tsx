"use client";

import React from "react";
import JumpNextOrPrev from "../components/JumpNextOrPrev";
import Question from "../components/Question";

export default function Q3() {
  return (
    <>
      <JumpNextOrPrev />

      <Question
        n={3}
        title="何も見ずに変数を宣言してみよう"
        p="何も見ずに変数を作成してみましょう。\nここまでできたら先生に確認してもらいましょう"
      />
    </>
  );
}
