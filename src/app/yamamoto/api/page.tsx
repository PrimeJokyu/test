"use client";
import { useState } from "react";
import { effects } from "./data";
interface A {
  name: string;
  type: string;
}

const getEffectResult = (attackType: string, defenseType: string) => {
  if (!attackType || !defenseType) {
    return "攻撃タイプと防御タイプの両方を入力してください。";
  }
  if (!(attackType in effects)) {
    return "攻撃タイプが無効です。";
  }
  const attack = effects[attackType as keyof typeof effects];
  if (!(defenseType in attack)) {
    return "防御タイプが無効です。";
  }
  return attack[defenseType as keyof typeof attack];
};

const Pokemon = () => {
  const [poke, setPoke] = useState<A>();
  
const [number, setNumber] = useState("");
const [imageUrl, setImageUrl] = useState("");
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  setNumber(value);
  if (value && !isNaN(Number(value))) {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${value}.png`;
    setImageUrl(url);
  } else {
    setImageUrl(""); // 無効な入力のとき画像を消す
  }
};


  const [attackType, setAttackType] = useState<string>("");
  const type = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttackType(e.target.value);
  };
  const [defenseType, setDefenseType] = useState<string>("");
  const type2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDefenseType(e.target.value);
  };

  const pikatyuu = {
    name: "ピカチュウ",
    type: "electric",
  };
  const z = "3";
  return (
    <div>
      <div
        id="box"
        className=" bg-yellow-300 hover:opacity-50 transition-opacity duration-300 w-[90px] h-[25px]"
        style={{ padding: "2px", margin: "0px" }}
      >
        {pikatyuu.name}
      </div>
      <button onClick={() => setPoke(pikatyuu)}>タイプ</button>
      <div>{poke?.type}</div>
      <div>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          alt="Pikachu"
          width={96}
          height={96}
        />
      </div>
      {attackType === "水" && <p>{effects.でんき.みず}</p>}
      <div>
        <input
          type="text"
          value={attackType}
          onChange={type}
          placeholder="タイプを入力してください"
          className="border p-2 border-red-500"
        />
      </div>
      <input
        type="text"
        value={defenseType}
        onChange={type2}
        placeholder="タイプを入力してください"
        className="border p-2 border-red-500"
      />
      <div>結果: {getEffectResult(attackType, defenseType)}</div>
      <button
        onClick={() =>
          console.log("https://pokeapi.co/api/v2/pokemon/pikachu/")
        }
      >
        a
      </button>

      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>ポケモン画像 自動表示</h1>
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
    </div>
  );
};
export default Pokemon;
