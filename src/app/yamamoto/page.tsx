"use client";
import { useState } from "react";

export default function Home() {
  // ユーザーの回答を管理するためのstate
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);  // 結果の表示

  // 正解のインデックス（0ベース）
  const correctAnswers = [1, 2];

  // 選択肢を選んだときに呼ばれる
  const handleSelect = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  // クイズの結果を評価する関数
  const checkResults = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        score++;
      }
    });
    setResult(`あなたの得点は ${score} / ${objArray.length} です。`);
  };

  // クイズの質問データ
  const objArray = [
    {
      title: "配列とは何ですか",
      ans: 1,
      options: [
        "順番のないデータの集まり",
        "順番のある要素の集まり",
        "変数",
      ],
    },
    {
      title: "定数はどのように宣言しますか",
      ans: 2,
      options: [
        "let 名前 = 値",
        "var 名前 = 値",
        "const 名前 = 値",
      ],
    },
  ];

  return (
    <div className="h-full">
      <div>
        {objArray.map((obj, index) => (
          <div key={index} className="mb-4">
            <div>{obj.title} 選択肢:</div>
            <select
              onChange={(e) => handleSelect(index, parseInt(e.target.value))}
              value={answers[index] || ""}
            >
              <option value="">選択してください</option>
              {obj.options.map((opt, optIndex) => (
                <option key={optIndex} value={optIndex}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <button onClick={checkResults} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
        結果を確認
      </button>

      {result && (
        <div className="mt-4 text-lg font-bold text-green-500">
          {result}
        </div>
      )}
    </div>
  );
}
