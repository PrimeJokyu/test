"use client";

import React, { useState } from "react";

export default function ToggleTextButton() {
  const [text, setText] = useState("");

  return (
    <div>
      <div className="border">
        <h1>問1. useStateの使い方</h1>
        <p>
          初期値は何も表示されなくて、クリックされたら「ボタンが押されました」と表示されるようなボタンを作成して下さい
        </p>
      </div>
      <div className="flex justify-start mt-2 space-x-2">
        <button
          onClick={() => setText("ボタンが押されました。")}
          className="bg-green-200 text-black rounded-lg"
        >
          ボタン
        </button>
        <p>{text}</p>
      </div>
    </div>
  );
}
