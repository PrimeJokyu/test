"use client";
import React, { useState } from "react";

const CounterPage: React.FC = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">Counter</h1>
      <p className="mt-4 text-2xl">Count: {count}</p>
      <div className="mt-6">
        <button onClick={increase} className="bg-blue-500 px-4 py-2 mr-4">
          Increase
        </button>
        <button onClick={decrease} className="bg-red-500 px-4 py-2">
          Decrease
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
