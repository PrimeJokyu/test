"use client";

import { useState } from "react";

export default function Home() {
  const [count,setCount] = useState(0)
  function  increment() {
   setCount(count +1)
  }
  function  decrement() {
    setCount(count -1)
   }
  return (
    <div className="h-full">{count}
      <button className="select-none border p-2 ml-2 bg-red-500 rounded-lg" onClick={increment}>+</button>
      <button className="select-none border p-2 ml-2 bg-blue-500 rounded-lg" onClick={decrement}>-</button>
    </div>
    
  );
}
