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
        title="ボタンの作成"
        p="クリックしたら何かしら起きるボタンを作成してください"
      />
      <div className="flex justify-start mt-2 space-x-2">
        <button
          onClick={() => console.log("logを出力します")}
          className="bg-green-200 text-black rounded-lg"
        >
          ボタン
        </button>
      </div>
    </>
  );
}
