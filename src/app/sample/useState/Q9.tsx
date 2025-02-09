"use client";

import React, { useState } from "react";
import JumpNextOrPrev from "../components/JumpNextOrPrev";
import Question from "../components/Question";

export default function Q9() {
  const [count, setCount] = useState(0);

  function handleAddCount() {
    setCount((prev) => prev + 1); // setCount(count + 1);
  }

  function handleRemoveCount() {
    if (count <= 0) {
      return;
    }
    setCount((prev) => prev - 1); // setCount(count + 1);
  }

  return (
    <>
      <JumpNextOrPrev isEnd />
      <Question
        n={9}
        title="【応用】条件付きカウンターの作成"
        p={`0以下にはならないカウンターを作成してみよう（Q8の回答を再利用して回答してOK。）<br/>
        ただし、条件分岐は以下のように記載してください。<br/>（条件式の部分には、関数を何もせずに実行する条件を入れます。例：count > 5）<br/>if(条件式){<br/>  return // これ以降の処理では何もしない<br/>}`}
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
