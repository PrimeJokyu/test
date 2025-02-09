import { useState } from "react";

const MemoApp = () => {
  const [memo, setMemo] = useState("");
  const [memos, setMemos] = useState<string[]>([]);

  const addMemo = () => {
    if (memo.trim()) {
      setMemos([...memos, memo]);
      setMemo("");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold">メモ帳</h2>
      <input
        className="border p-1 w-full mb-2"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        placeholder="メモを入力"
      />
      <button
        className="bg-green-500 text-white px-3 py-1 rounded"
        onClick={addMemo}
      >
        追加
      </button>
      <ul className="mt-2">
        {memos.map((item, index) => (
          <li key={index} className="border-b p-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoApp;
