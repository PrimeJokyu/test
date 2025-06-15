'use client';

import { useState } from 'react';

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked); 
  };
  return (
    <div className="flex justify-center gap-4">
      <div className="w-20 h-20 bg-red-500 rounded-full hover:shadow-red-400 hover:shadow-xl hover:ring-4 ring-red-700 hover:scale-110 active:scale-90" onClick={handleClick}></div>
      <div className="w-20 h-20 bg-yellow-500 rounded-full hover:shadow-yellow-400 hover:shadow-xl hover:scale-110 active:scale-90 hover:ring-4 ring-red-700"></div>
      <div className="w-20 h-20 bg-green-500 rounded-full hover:shadow-green-400 hover:shadow-xl hover:scale-110 active:scale-90 hover:ring-4 ring-red-700"></div>
      {isClicked && <p className="text-red-500 mt-4">RED</p>}
    </div>
  );
}
