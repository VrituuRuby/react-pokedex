import { useEffect, useState } from "react";
import { client } from "../../api";
import { Container } from "./style";

interface CardProps {
  pokemon: {
    name: string;
    id: number;
    types: {
      type: {
        name: string;
      };
    }[];
  };
}

interface IPokemonData {
  id: number;
  index: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

export function Card({ pokemon }: CardProps) {
  const [pokemonData, setPokemonData] = useState({} as IPokemonData);

  useEffect(() => {
    const loadPokemonData = async () => {};

    loadPokemonData();
  }, []);

  return pokemonData ? (
    <Container>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt=""
      />
      <strong>#{String(pokemon?.id).padStart(3, "0")}</strong>
      <span className="name">{pokemon?.name}</span>
      <div>
        {pokemon.types?.map((type, index) => (
          <span key={index} className={`type ${type.type.name}`}>
            {type.type.name}
          </span>
        ))}
      </div>
    </Container>
  ) : null;
}
