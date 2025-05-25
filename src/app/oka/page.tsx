"use client";

import { statSync } from "fs";
import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(Array(9).fill(null));

  const checkStatus = (status: boolean | null) => {
    if (status === null) {
      return "";
    }
    return status ? "×" : "";
  };

  const toggleCircle = (index: number) => {
    const newClicked = [...clicked];
    newClicked[index] = !newClicked[index];
    setClicked(newClicked);
  };

  return (
    <div className="flex justify-center">
      {/* flexでアイテムを3列に並べる */}
      <div className="flex flex-wrap gap-4 p-4 max-w-[460px] border">
        {clicked.map((isClicked, index) => (
          <div key={index} className="border">
            <div
              key={index}
              className={`w-32 h-32 ${
                isClicked === false ? "bg-red-500" : "text-black text-[270px]"
              } rounded-full flex items-center justify-center text-white cursor-pointer`}
              onClick={() => toggleCircle(index)}
            >
              {checkStatus(isClicked)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// タップされたら〇×を交互に表示する
// ターンを表示する
