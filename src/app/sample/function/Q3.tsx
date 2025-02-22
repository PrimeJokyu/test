"use client";

import React, { useState } from "react";
import JumpNextOrPrev from "../components/JumpNextOrPrev";
import Question from "../components/Question";

export default function Q3() {
  //以下の1行を追加することでエラーメッセージを表示させないようにすることができる
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [text, setText] = useState("ここに初期値を設定します"); // setTextは使われていないので、普通に書けばエラーメッセージが表示される

  return (
    <>
      <JumpNextOrPrev />

      <Question
        n={3}
        title="useStateの初期値"
        p="状態変数（state変数）を画面上に表示させてください"
      />
      <div className="flex justify-start mt-2 space-x-2">
        <p>{text}</p>
      </div>
    </>
  );
}
