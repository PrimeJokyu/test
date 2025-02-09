import { useState } from "react";

const FortuneApp = () => {
  const fortunes = ["大吉", "中吉", "小吉", "凶"];
  const [result, setResult] = useState<string | null>(null);

  return (
    <div>
      <h2 className="text-xl font-bold">おみくじ</h2>
      <button
        className="bg-yellow-500 text-white px-3 py-1 rounded"
        onClick={() =>
          setResult(fortunes[Math.floor(Math.random() * fortunes.length)])
        }
      >
        おみくじを引く
      </button>
      {result && <p className="mt-2 text-xl">結果: {result}</p>}
    </div>
  );
};

export default FortuneApp;
