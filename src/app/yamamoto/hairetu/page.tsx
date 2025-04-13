"use client";
import React, { useState, useEffect } from "react";

// ポケモンデータの型定義
interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Move {
  move: {
    name: string;
    url: string;
  };
}

interface Pokemon {
  id: number;
  name: string;
  height: number;
  base_experience: number;
  abilities: Ability[];
  moves: Move[];
  sprites: {
    front_default: string;
  };
  cries: {
    latest: string;
  };
  location_area_encounters: string;
}

const PokemonPage: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // ポケモンの詳細情報を取得する関数
  const fetchPokemonData = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/Charizard"
      ); // 例として「ディト」を取得
      const data: Pokemon = await response.json();
      setPokemon(data);
      setLoading(false);
    } catch (err) {
      setError("データの取得に失敗しました");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{pokemon?.name} の詳細</h1>
      {/* front_image の表示 */}
      <div>
        <img
          src={pokemon?.sprites.front_default}
          alt={pokemon?.name}
          style={{ width: "200px" }}
        />
      </div>

      <h2>基本情報</h2>
      <p>
        <strong>ID:</strong> {pokemon?.id}
      </p>
      <p>
        <strong>高さ:</strong> {pokemon?.height || 0 / 10} m
      </p>
      <p>
        <strong>経験値:</strong> {pokemon?.base_experience}
      </p>

      <h3>アビリティ</h3>
      <ul>
        {pokemon?.abilities.map((ability, index) => (
          <li key={index}>
            {ability.ability.name} {ability.is_hidden ? "(隠れ特性)" : ""}
          </li>
        ))}
      </ul>

      <h3>技</h3>
      <ul>
        {pokemon?.moves.slice(0, 5).map((move, index) => (
          <li key={index}>{move.move.name}</li>
        ))}
      </ul>

      <h3>その他の情報</h3>
      <ul>
        <li>
          <a
            href={pokemon?.location_area_encounters}
            target="_blank"
            rel="noopener noreferrer"
          >
            遭遇場所
          </a>
        </li>
        <li>
          <a
            href={pokemon?.cries.latest}
            target="_blank"
            rel="noopener noreferrer"
          >
            最新の鳴き声
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PokemonPage;
