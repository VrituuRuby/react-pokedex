import { ChangeEvent, useState } from "react";
import { useQuery } from "@apollo/client";

import { POKEMON_QUERY } from "../../graphql/queries";
import useDebounce from "../../hooks/useDebouce";
import { Card } from "../Card";

import { Container, EmptyState, InputField, Loader } from "./style";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { TbPokeball } from "react-icons/tb";
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

  const { loading } = useQuery(POKEMON_QUERY, {
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
        <AiOutlineSearch size={30} />
        <input
          type="text"
          onChange={onChangeSearch}
          value={displaySearch}
          placeholder="Search a pokemon name"
        />
        <button onClick={handleCleanInput}>
          <AiOutlineClose size={25} fontWeight={800} />
        </button>
      </InputField>
      <div className="table">
        {loading && displaySearch ? (
          <Loader>
            <TbPokeball size="80px" />
          </Loader>
        ) : pokemonList.length > 0 ? (
          pokemonList?.map((pokemon: IPokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))
        ) : (
          <EmptyState>
            <p>None matches your search!</p>
          </EmptyState>
        )}
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
