import { useEffect, useState } from "react";
import { api } from "../../api";
import { Container } from "./style";

interface CardProps {
  url: string;
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

export function Card({ url }: CardProps) {
  const [pokemonData, setPokemonData] = useState({} as IPokemonData);

  useEffect(() => {
    const loadPokemonData = async () => {
      const response = await api.get(url);
      setPokemonData(response.data);
    };

    loadPokemonData();
  }, []);

  console.log(pokemonData?.name);

  return pokemonData ? (
    <Container>
      <img
        src={pokemonData?.sprites?.other?.["official-artwork"]?.front_default}
        alt=""
      />
      <strong>#{String(pokemonData.id).padStart(3, "0")}</strong>
      <span className="name">{pokemonData.name}</span>
      <div>
        {pokemonData.types?.map((type, index) => (
          <span key={index} className={`type ${type.type.name}`}>
            {type.type.name}
          </span>
        ))}
      </div>
    </Container>
  ) : null;
}
