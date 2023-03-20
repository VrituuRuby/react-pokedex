import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Card } from "../Card";
import { Container } from "./style";

interface IPokemonData {
  url: string;
}

interface IPokemon {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
}

export function Table() {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [offset, setOffset] = useState(0);

  const POKEMON_QUERY = gql`
    query getPokemons {
      pokemons: pokemon_v2_pokemon(limit: 12, offset: ${12 * offset}) {
        id
        name
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
          }
        }
      }
    }
  `;

  useQuery(POKEMON_QUERY, {
    onCompleted: (data) => {
      setPokemonList((oldData) => [...oldData, ...data.pokemons]);
    },
  });

  const handleLoadMorePokemon = () => {
    setOffset(offset + 1);
  };

  return (
    <Container>
      <input type="text" placeholder="Pesquise um pokemon" />
      <div>
        {pokemonList &&
          pokemonList?.map((pokemon: IPokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        <div className="load-more">
          <button onClick={() => handleLoadMorePokemon()}>
            LOAD MORE POKÉMON
          </button>
        </div>
      </div>
    </Container>
  );
}
