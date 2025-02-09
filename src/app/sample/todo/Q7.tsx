"use client";

import React, { useState } from "react";
import JumpNextOrPrev from "../components/JumpNextOrPrev";
import Question from "../components/Question";

export default function Q7() {
  const [count, setCount] = useState(0);

  function handleSetCount() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <JumpNextOrPrev />

      <Question
        n={7}
        title="状態変数の変更"
        p="ボタンをクリックすると表示されている変数が+1されるような仕組みを作成してください"
      />
      <div className="flex justify-start mt-2 space-x-2">
        <button
          onClick={handleSetCount}
          className="bg-green-200 text-black rounded-lg"
        >
          ボタン
        </button>
        <p>{count}</p>
      </div>
    </>
  );
}
