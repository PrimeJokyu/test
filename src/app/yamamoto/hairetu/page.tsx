"use client";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const obj = {a:"a",b:"b"};
  const obj1 = {a:"c",b:"d"};
  const array = [obj,obj1];

  const getDitto = async () =>  {
    const res =await axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
     console.log(res.data)
  }

  return (
    <div className="space-x-2 h-full">
      <button onClick={getDitto}>botan</button>
    </div>
  );
}
