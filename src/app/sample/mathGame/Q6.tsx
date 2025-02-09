"use client";

import React, { useState } from "react";
import JumpNextOrPrev from "../components/JumpNextOrPrev";
import Question from "../components/Question";

export default function Q6() {
  const [count, setCount] = useState(0);

  function handleSetCount() {
    setCount(1);
  }

  return (
    <>
      <JumpNextOrPrev />

      <Question
        n={6}
        title="初期値が数字の状態変数"
        p="初期値が0の状態変数を作成してください。また、クリックするとその状態変数が１になるボタンを作成してください"
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
