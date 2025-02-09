"use client";

import Q1 from "./Q1";
import { useSearchParams } from "next/navigation";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q5 from "./Q5";
import Q6 from "./Q6";
import Q7 from "./Q7";
import Q8 from "./Q8";
import Q9 from "./Q9";
import FortuneApp from "../components/FortuneApp";

const QuestionList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export default function ToggleTextButton() {
  const searchParams = useSearchParams();

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
      case QuestionList[7]:
        return <Q8 />;
      case QuestionList[8]:
        return <Q9 />;
      default:
        return (
          <>
            <div className="p-6">
              <h1 className="text-4xl font-bold">簡単メモ帳アプリ</h1>
            </div>

            <FortuneApp />

            <div className="mt-8">
              <h2>
                <strong>練習問題</strong>
              </h2>
              <ol className="flex space-x-2 flex-wrap justify-start">
                {QuestionList.map((q, index) => (
                  <li key={index}>
                    <a
                      href={`/sample/mathGame?q=${q}`}
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
