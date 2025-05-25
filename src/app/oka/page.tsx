"use client";

import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(Array(9).fill(false));

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
              className="w-32 h-32 bg-red-500 rounded-full flex items-center justify-center text-white text-6xl cursor-pointer"
              onClick={() => toggleCircle(index)}
            >
              {isClicked ? "×" : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
