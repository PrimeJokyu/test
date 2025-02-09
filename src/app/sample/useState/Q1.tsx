"use client";

import React from "react";
import Question from "../components/Question";
import JumpNextOrPrev from "../components/JumpNextOrPrev";

export default function Q1() {
  const hogeHoge = "hogeHoge";
  return (
    <>
      <JumpNextOrPrev />
      <Question
        n={1}
        title="変数の初期値"
        p="変数を宣言して、画面上に表示してください"
      />
      <div className="flex justify-start mt-2 space-x-2">
        <p>{hogeHoge}</p>
      </div>
    </>
  );
}
