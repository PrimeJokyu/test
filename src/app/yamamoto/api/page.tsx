"use client";
import { useState } from "react";
import { effects } from "./data";

interface A {
  name: string;
  type: string;
  Compatibility: string;
}

const Pokemon = () => {
  const [poke, setPoke] = useState<A>();
  const [pika, setPika] = useState<A>();
  const [pikat, setPikat] = useState<A>();
  const [effect, setEffect] = useState<string>("相性");
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
      <div style={{ backgroundColor: "red", padding: "1px", margin: "1px" }}>
        {pikatyuu.name}
      </div>
      <button onClick={() => setPoke(pikatyuu)}>タイプ</button>
      <div>{poke?.type}</div>
      <button onClick={Compatibility}>相性</button>
      <div>{pika?.Compatibility}</div>
      <button onClick={() => setEffect(effects.electric.water)}>電気→水{effect}</button>
      <div>
      <button onClick={() => setEffect(effects.electric.ground)}>電気→岩{effect}</button>
      </div>

      <div id="box" style={{padding:"10px"}}>背景色が変わります</div>
    </div>
  );
};
export default Pokemon;
