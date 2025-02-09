"use client";

import React, { useState } from "react";
import JumpNextOrPrev from "../components/JumpNextOrPrev";
import Question from "../components/Question";

export default function Q5() {
  const [text, setText] = useState("");

  function testFuc() {
    setText("test");
  }

  return (
    <>
      <JumpNextOrPrev />

      <Question
        n={5}
        title="関数の宣言"
        p="関数を作成して、ボタンをクリックしたらその関数が実行されるようにしてください"
      />
      <div className="flex justify-start mt-2 space-x-2">
        <button
          onClick={testFuc}
          className="bg-green-200 text-black rounded-lg"
        >
          ボタン
        </button>
        <p>{text}</p>
      </div>
    </>
  );
}
