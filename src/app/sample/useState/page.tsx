"use client";

import React, { useState } from "react";

export default function ToggleTextButton() {
  const [text, setText] = useState("初期テキスト");

  return (
    <div>
      <h1>状態変数を使ってテキストを切り替える</h1>
      <div className="flex justify-start mt-2 space-x-2">
        <p>{text}</p>
        <button
          onClick={() => setText("切り替えた後")}
          className="bg-green-200 text-black rounded-lg"
        >
          テキスト切り替え
        </button>
      </div>
    </div>
  );
}
