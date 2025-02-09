"use client"

import { useState } from "react";

export default function Home() {
  const test = "a"
  const[counter,setCounter]=useState(0)
  function log(){
    console.log(test);
  }
  return <div className="h-full">
  <button className="bg-blue-500" onClick={()=>setCounter(1+counter)}>+1</button>
  <button className="bg-red-500" onClick={()=>setCounter(1-counter)}>-1</button>
  <button className="bg-blue-500" onClick={()=>setCounter(2*counter)}>*2</button>
  <button className="bg-red-500" onClick={()=>setCounter(2/counter)}>/2</button>
  <button className="bg-blue-500" onClick={()=>setCounter(0)}>0</button>
  
  
  {counter}</div>;
  
}
