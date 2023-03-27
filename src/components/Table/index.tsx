import { useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { POKEMON_QUERY, POKEMON_QUERY_BY_NAME } from "../../graphql/queries";
import useDebounce from "../../hooks/useDebouce";
import { Card } from "../Card";
import { Container } from "./style";
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
  const [displaySearch, setDisplaySearch] = useState("");
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [offset, setOffset] = useState(1);

  function onChangeSearch() {}

  useQuery(POKEMON_QUERY, {
    variables: {
      offset: offset * 12,
      name: displaySearch,
    },
    onCompleted: (data) => {
      setPokemonList([...data.pokemons]);
    },
  });

  const handleLoadMorePokemon = () => {
    setOffset(offset + 1);
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Pesquise um pokemon"
        onChange={(e) => setDisplaySearch(e.target.value)}
        value={displaySearch}
      />
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
