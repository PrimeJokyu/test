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

    </div>
  );
};
export default Pokemon;
