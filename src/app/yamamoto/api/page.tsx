"use client";
import { useState } from "react";
import { effects } from "./data";

interface A {
  name: string;
  type: string;
  Compatibility: string;
  Compatibilitygud: string;
}

const Pokemon = () => {
  const [poke, setPoke] = useState<A>();
  const [pika, setPika] = useState<A>();
  const [pikat, setPikat] = useState<A>();
  const [effect, setEffect] = useState<string>("none");
  const pikatyuu = {
    name: "ピカチュウ",
    type: "electric",
    Compatibility: "good",
    Compatibilitygud: "水",
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
      <button onClick={() => setEffect(effects.electric.water)}>{effect}</button>
      <div>{pikat?.Compatibilitygud}</div>
    </div>
  );
};
export default Pokemon;
