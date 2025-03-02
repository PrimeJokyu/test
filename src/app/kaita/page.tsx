"use client";

export default function Home() {
  function kaita() {
    console.log("a");
  }
  return (
    <div className="h-full">
      <button onClick={kaita}>aaa</button>
    </div>
  );
}
