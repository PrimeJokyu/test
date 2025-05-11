'use client';

import { useState } from 'react';

const hands = ['グー', 'チョキ', 'パー'] as const;
type Hand = typeof hands[number];

const handEmojis: Record<Hand, string> = {
  グー: '✊',
  チョキ: '✌️',
  パー: '🖐️',
};

export default function Home() {
  const [playerHand, setPlayerHand] = useState<Hand | null>(null);
  const [computerHand, setComputerHand] = useState<Hand | null>(null);
  const [result, setResult] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const playJanken = async (playerChoice: Hand) => {
    setIsPlaying(true);
    setResult('');
    setPlayerHand(null);
    setComputerHand(null);
    setShowCountdown(true);
    setCountdown(3);

    // カウントダウン演出（3, 2, 1）
    for (let i = 3; i > 0; i--) {
      setCountdown(i);
      await new Promise((res) => setTimeout(res, 500));
    }

    setShowCountdown(false);

    const compChoice = hands[Math.floor(Math.random() * hands.length)];
    setPlayerHand(playerChoice);
    setComputerHand(compChoice);
    setResult(getResult(playerChoice, compChoice));
    setIsPlaying(false);
  };

  const getResult = (player: Hand, computer: Hand) => {
    if (player === computer) return 'あいこ 🤝';
    if (
      (player === 'グー' && computer === 'チョキ') ||
      (player === 'チョキ' && computer === 'パー') ||
      (player === 'パー' && computer === 'グー')
    ) {
      return '🎉 あなたの勝ち！';
    }
    return '😢 あなたの負け...';
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-200 bg-blue-200 ext-center p-6">
      <h1 className="text-5xl font-extrabold mb-8 text-pink-700">じゃんけんバトル ✊✌️🖐️</h1>

      <div className="space-x-6 mb-8">
        {hands.map((hand) => (
          <button
            key={hand}
            onClick={() => playJanken(hand)}
            disabled={isPlaying}
            className={`transition transform hover:scale-110 bg-white border-2 border-pink-400 text-4xl px-4 py-2 rounded-full shadow-md ${
              isPlaying ? 'opacity-50 cursor-not-allowed' : 'hover:bg-pink-100'
            }`}
          >
            {handEmojis[hand]}
          </button>
        ))}
      </div>

      {showCountdown && (
        <p className="text-3xl font-semibold text-gray-700 animate-pulse mb-6">
          じゃーんけーん... {countdown === 1 ? 'ぽん！' : countdown}
        </p>
      )}

      {playerHand && computerHand && !showCountdown && (
        <div className="text-2xl font-bold mt-6 bg-white p-4 rounded shadow-lg">
          <p>あなた: {handEmojis[playerHand]}（{playerHand}）</p>
          <p>コンピューター: {handEmojis[computerHand]}（{computerHand}）</p>
          <p className="mt-4 text-3xl text-red-600">{result}</p>
        </div>
      )}
    </main>
  );
}
