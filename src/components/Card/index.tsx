import { useContext, useState } from "react";
import { PokemonInfoContext } from "../../context/PokemonContext";
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

export function Card({ pokemon }: CardProps) {
  const { setSelectedPokemonId } = useContext(PokemonInfoContext);

  return pokemon ? (
    <Container onClick={() => setSelectedPokemonId(pokemon.id)}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt=""
      />
      <strong>#{String(pokemon?.id).padStart(4, "0")}</strong>
      <span className="name">{pokemon?.name}</span>
      <div>
        {pokemon.types?.map((type, index) => (
          <span key={index} className={`type ${type.type.name}`}>
            {type.type.name}
          </span>
        ))}
      </div>
    </Container>
  ) : (
    <p>Loading...</p>
  );
}
