"use client";

import React, { useState } from "react";
import Q1 from "./Q1";
import { useSearchParams } from "next/navigation";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q5 from "./Q5";
import Q6 from "./Q6";
import Q7 from "./Q7";

const QuestionList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export default function Variable() {
  const searchParams = useSearchParams();
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  // 例: "name" というクエリパラメータを取得
  const questioNumber = searchParams.get("q") || "";

  const getQuestion = () => {
    switch (questioNumber) {
      case QuestionList[0]:
        return <Q1 />;
      case QuestionList[1]:
        return <Q2 />;
      case QuestionList[2]:
        return <Q3 />;
      case QuestionList[3]:
        return <Q4 />;
      case QuestionList[4]:
        return <Q5 />;
      case QuestionList[5]:
        return <Q6 />;
      case QuestionList[6]:
        return <Q7 />;
      default:
        return (
          <>
            <div className="p-6">
              <h1 className="text-4xl font-bold">カウンター</h1>
              <p className="mt-4 text-2xl">カウント: {count}</p>
              <div className="mt-6">
                <button
                  onClick={increase}
                  className="bg-blue-500 px-4 py-2 mr-4"
                >
                  Increase
                </button>
                <button onClick={decrease} className="bg-red-500 px-4 py-2">
                  Decrease
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h2>
                <strong>練習問題</strong>
              </h2>
              <ol className="flex space-x-2 flex-wrap justify-start">
                {QuestionList.map((q, index) => (
                  <li key={index}>
                    <a
                      href={`/sample/useState?q=${q}`}
                      className="border rounded-lg px-2 py-1"
                    >
                      {q}問目
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </>
        );
    }
  };

  return <div>{getQuestion()}</div>;
}
