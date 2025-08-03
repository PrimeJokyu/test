"use client";
import { useState } from "react";
import { effects } from "./data";
const Pokemon = () => {

const [types, setTypes] = useState<string[]>([]);

const [number, setNumber] = useState("");
const [imageUrl, setImageUrl] = useState("");
const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  setNumber(value);

  if (value && !isNaN(Number(value))) {
    // 画像URL設定
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${value}.png`;
    setImageUrl(url);

    // タイプ取得
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
      const data = await res.json();
      const typeNames = data.types.map((t: any) => t.type.name);
      setTypes(typeNames);
    } catch (error) {
      console.error("タイプ取得失敗:", error);
      setTypes([]);
    }
  } else {
    setImageUrl("");
    setTypes([]);
  }
};

  return (
    <div>
      <div >
        <h1>ポケモン図鑑</h1>
        <input
          type="number"
          value={number}
          onChange={handleChange}
          placeholder="ポケモン番号を入力 (例: 25)"
          style={{ padding: "8px", fontSize: "16px", width: "200px" }}
        />

        <br />
        <br />

        {imageUrl && (
          <img
            src={imageUrl}
            alt={`ポケモン番号 ${number}`}
            width={120}
            height={120}
          />
        )}
      </div>
      {types.length > 0 && (
  <div>
    <h3>タイプ:</h3>
    <ul>
      {types.map((type) => (
        <li key={type}>{type}</li>
      ))}
    </ul>
  </div>
)}

    </div>
  );
};
export default Pokemon;
