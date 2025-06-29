"use client";
import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState<(boolean | null)[]>(
    Array(9).fill(null)
  );
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState<boolean | "draw" | null>(null);
  const [winLine, setWinLine] = useState<number[] | null>(null);
  const [scores, setScores] = useState({ o: 0, x: 0 });

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board: (boolean | null)[]) => {
    for (const [a, b, c] of lines) {
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        return { winner: board[a], line: [a, b, c] };
      }
    }
    if (board.every((c) => c !== null)) return { winner: "draw", line: [] };
    return null;
  };

  const playSound = (file: string) => {
    const audio = new Audio(`/sounds/${file}`);
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => console.warn("Audio再生エラー:", err));
    }
  };

  const handleClick = (index: number) => {
    if (clicked[index] !== null || winner !== null) return;
    playSound("click.mp3");
    const newClicked = [...clicked];
    newClicked[index] = turn;
    setClicked(newClicked);

    const result = checkWinner(newClicked);
    if (result) {
      setWinner(!!result.winner);
      setWinLine(result.line);
      if (!!result.winner) {
        setScores((p) => ({ ...p, o: p.o + 1 }));
        playSound("win.mp3");
      } else if (result.winner === false) {
        setScores((p) => ({ ...p, x: p.x + 1 }));
        playSound("win.mp3");
      } else {
        playSound("draw.mp3");
      }
    } else {
      setTurn(!turn);
    }
  };

  const resetGame = () => {
    setClicked(Array(9).fill(null));
    setWinner(null);
    setWinLine(null);
    setTurn(true);
  };

  const renderCell = (value: boolean | null) => {
    if (value === true)
      return (
        <div className="w-20 h-20 rounded-full border-8 border-blue-500" />
      );
    if (value === false)
      return (
        <>
          <div className="absolute w-20 h-1 bg-red-500 rotate-45" />
          <div className="absolute w-20 h-1 bg-red-500 -rotate-45" />
        </>
      );
    return null;
  };

  const status =
    winner === true
      ? "○の勝ち！"
      : winner === false
      ? "×の勝ち！"
      : winner === "draw"
      ? "引き分け！"
      : `現在のターン：${turn ? "○" : "×"}`;

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-100 min-h-screen">
      <div className="text-2xl font-bold">{status}</div>
      <div className="text-lg flex gap-6">
        <div>○: {scores.o}</div>
        <div>×: {scores.x}</div>
      </div>
      <div className="grid grid-cols-3 border-4 border-black">
        {clicked.map((cell, i) => (
          <div
            key={i}
            onClick={() => handleClick(i)}
            className={`w-32 h-32 border-2 border-black bg-white flex items-center justify-center relative cursor-pointer ${
              winLine?.includes(i) ? "bg-yellow-200" : ""
            }`}
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
