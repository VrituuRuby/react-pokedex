import { ChangeEvent, useState } from "react";
import { useQuery } from "@apollo/client";

import { POKEMON_QUERY } from "../../graphql/queries";
import useDebounce from "../../hooks/useDebouce";
import { Card } from "../Card";

import { Container, InputField } from "./style";
import { AiOutlineClose } from "react-icons/ai";
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
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [offset, setOffset] = useState(1);
  const setDebounced = useDebounce(setDebouncedSearch, 500);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    setDisplaySearch(event.target.value);
    setDebounced(event.target.value);
  }

  function handleCleanInput() {
    setDisplaySearch("");
    setDebounced("");
  }

  useQuery(POKEMON_QUERY, {
    variables: {
      offset: offset * 12,
      name: debouncedSearch,
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
      <InputField>
        <input type="text" onChange={onChangeSearch} value={displaySearch} />
        <button onClick={handleCleanInput}>
          <AiOutlineClose size={25} fontWeight={800} />
        </button>
      </InputField>
      <div className="table">
        {pokemonList &&
          pokemonList?.map((pokemon: IPokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        {displaySearch === "" && (
          <div className="load-more">
            <button onClick={() => handleLoadMorePokemon()}>
              LOAD MORE POKÉMON
            </button>
          </div>
        )}
      </div>
    </Container>
  );
}
