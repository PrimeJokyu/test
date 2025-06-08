"use client";
import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState<(boolean | null)[]>(Array(9).fill(null));
  const [turn, setTurn] = useState(true); // true = ○, false = ×
  const [winner, setWinner] = useState<boolean | "draw" | null>(null);

  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // 横
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // 縦
    [0, 4, 8], [2, 4, 6]            // 斜め
  ];

  const checkWinner = (board: (boolean | null)[]): boolean | "draw" | null => {
    for (const [a, b, c] of lines) {
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return board.every(cell => cell !== null) ? "draw" : null;
  };

  const handleClick = (index: number) => {
    if (clicked[index] !== null || winner !== null) return;
    const newClicked = [...clicked];
    newClicked[index] = turn;
    setClicked(newClicked);
    const result = checkWinner(newClicked);
    if (result) setWinner(result);
    else setTurn(!turn);
  };

  const resetGame = () => {
    setClicked(Array(9).fill(null));
    setWinner(null);
    setTurn(true);
  };

  const renderCell = (value: boolean | null) => {
    if (value === true) {
      return <div className="w-20 h-20 rounded-full border-8 border-blue-500" />;
    }
    if (value === false) {
      return (
        <>
          <div className="absolute w-20 h-1 bg-red-500 rotate-45" />
          <div className="absolute w-20 h-1 bg-red-500 -rotate-45" />
        </>
      );
    }
    return null;
  };

  const status =
    winner === true ? "○の勝ち！" :
    winner === false ? "×の勝ち！" :
    winner === "draw" ? "引き分け！" :
    `現在のターン：${turn ? "○" : "×"}`;

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-100 min-h-screen">
      <div className="text-2xl font-bold">{status}</div>

      <div className="grid grid-cols-3 gap-0 border-4 border-black">
        {clicked.map((cell, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className="w-32 h-32 border-2 border-black bg-white flex items-center justify-center relative cursor-pointer"
          >
            {renderCell(cell)}
          </div>
        ))}
      </div>

      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={resetGame}
      >
        リセット
      </button>
    </div>
  );
}

// タップされたら〇×を交互に表示する
// ターンを表示する
