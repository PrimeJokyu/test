"use client";

import React, { useState } from "react";
import JumpNextOrPrev from "../components/JumpNextOrPrev";
import Question from "../components/Question";

export default function Q8() {
  const [count, setCount] = useState(0);

  function handleAddCount() {
    setCount((prev) => prev + 1); // setCount(count + 1);
  }
  function handleRemoveCount() {
    setCount((prev) => prev - 1); // setCount(count + 1);
  }

  return (
    <>
      <JumpNextOrPrev />

      <Question
        n={8}
        title="カウンターの作成"
        p="状態変数を作成して表示し、その変数を+1するボタンと-1するボタンを作成してください"
      />

      <p>カウント：{count}</p>
      <div className="flex justify-start mt-2 space-x-2">
        <button
          onClick={handleRemoveCount}
          className="bg-red-200 px-3 py-2 text-center text-black rounded-lg"
        >
          -1
        </button>
        <button
          onClick={handleAddCount}
          className="bg-blue-200 px-3 py-2 text-center text-black rounded-lg"
        >
          +1
        </button>
      </div>
    </>
  );
}
