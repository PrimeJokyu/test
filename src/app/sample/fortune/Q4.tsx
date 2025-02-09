"use client";

import React, { useState } from "react";
import JumpNextOrPrev from "../components/JumpNextOrPrev";
import Question from "../components/Question";

export default function Q4() {
  const [text, setText] = useState("");

  return (
    <>
      <JumpNextOrPrev />

      <Question
        n={4}
        title="useStateの使い方"
        p="初期値は何も表示されなくて、クリックされたら「ボタンが押されました」と表示されるようなボタンを作成して下さい"
      />
      <div className="flex justify-start mt-2 space-x-2">
        <button
          onClick={() => setText("ボタンが押されました。")}
          className="bg-green-200 text-black rounded-lg"
        >
          ボタン
        </button>
        <p>{text}</p>
      </div>
    </>
  );
}
