export const effects = {
  electric: {
    water: "good",       // 電気 → 水：効果ばつぐん
    electric: "bad",     // 電気 → 電気：効果いまひとつ
    ground: "none",      // 電気 → 地面：無効
    flying: "good",      // 電気 → ひこう：効果ばつぐん
  },
  fire: {
    grass: "good",
    water: "bad",
    fire: "bad",
    bug: "good",
    rock: "bad",
  },
  water: {
    fire: "good",
    water: "bad",
    electric: "bad",
    ground: "good",
    grass: "bad",
  },
  grass: {
    water: "good",
    fire: "bad",
    flying: "bad",
    rock: "good",
  },
  ground: {
    electric: "good",
    fire: "good",
    flying: "none",   // 地面 → ひこう：当たらない
    grass: "bad",
  },
};

console.log(effects.electric)