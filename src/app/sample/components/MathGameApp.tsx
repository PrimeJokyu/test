import { useState } from "react";

const MathGameApp = () => {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  const checkAnswer = () => {
    if (parseInt(answer) === num1 + num2) {
      setMessage("正解！");
      setNum1(Math.floor(Math.random() * 10));
      setNum2(Math.floor(Math.random() * 10));
      setAnswer("");
    } else {
      setMessage("違うよ、もう一度！");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold">計算ゲーム</h2>
      <p>
        {num1} + {num2} = ?
      </p>
      <input
        className="border p-1 w-full mb-2"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        type="number"
        placeholder="答えを入力"
      />
      <button
        className="bg-purple-500 text-white px-3 py-1 rounded"
        onClick={checkAnswer}
      >
        答える
      </button>
      {message && <p className="mt-2 text-lg">{message}</p>}
    </div>
  );
};

export default MathGameApp;
