"use client";
import { useState } from "react";
import { effects } from "./data";

export type Effectiveness = "効果ばつぐん" | "効果いまひとつ" | "無効";

export type Effects = typeof effects;

// 攻撃側タイプの文字列リテラル型
export type AttackType = keyof Effects;

// 防御側タイプの文字列リテラル型（攻撃タイプごとに違うがここではユニオンで）
export type DefenseType = keyof Effects[AttackType];

// 効果の型（effectsの中の値）
export type Effect = Effects[AttackType][DefenseType];

// 例: 使い方
const denkiEffect = effects["でんき"];
console.log(denkiEffect["みず"]); // 効果ばつぐん

interface A {
  name: string;
  type: string;
  Compatibility: string;
}
const Pokemon = () => {
  const [poke, setPoke] = useState<A>();
  const [pika, setPika] = useState<A>();
  const [effect, setEffect] = useState<string>("相性");

   const [text, setText] = useState<Effectiveness>('');
  const type = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
    const [test, setTest] = useState('');
  const type2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTest(e.target.value);
  };

  const pikatyuu = {
    name: "ピカチュウ",
    type: "electric",
    Compatibility: "good",
  };
  const Compatibility = () => {
    setPika(pikatyuu);
  };
  return (
    <div>
      <div
        id="box"
        className=" bg-yellow-300 hover:opacity-50 transition-opacity duration-300 w-[90px] h-[25px]"
        style={{padding: "2px", margin: "0px",}}
      >
        {pikatyuu.name}
      </div>
      <button onClick={() => setPoke(pikatyuu)}>タイプ</button>
      <div>{poke?.type}</div>
      <button onClick={Compatibility}>相性</button>
      <div>{pika?.Compatibility}</div>
      <button onClick={() => setEffect(effects.でんき.みず)}>
        電気→水{effect}
      </button>
      <div>
        <button onClick={() => setEffect(effects.でんき.じめん)}>
          電気→地面{effect}
        </button>
      </div>

      {text === "水" && <p>{effects.でんき.みず}</p>}
       <div>
      <input
        type="text"
        value={text}
        onChange={type}
        placeholder="タイプを入力してください"
        className="border: p-2 double red;"
      />
      
    </div >
    <input
        type="text"
        value={test}
        onChange={type2}
        placeholder="タイプを入力してください"
        className="border: p-2 double red;"
      />
       結果: {effects[text]?.[test] ?? "情報が見つかりません"}

      <button onClick={() => console.log("https://pokeapi.co/api/v2/pokemon/pikachu/")}>ボタン</button>
    </div>
  );
};
export default Pokemon;