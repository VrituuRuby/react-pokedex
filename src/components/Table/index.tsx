import { useEffect, useState } from "react";
import { api } from "../../api";
import { Card } from "../Card";
import { Container } from "./style";

interface IPokemonData {
  url: string;
}

export function Table() {
  const [offset, setOffset] = useState(1);
  const [pokemonData, setPokemonData] = useState<IPokemonData[]>([]);

  useEffect(() => {
    const getInitialPokemonData = async () => {
      const response = await api.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=12`
      );
      setPokemonData(response.data.results);
    };
    getInitialPokemonData();
  }, []);

  const handleLoadMorePokemon = async () => {
    setOffset(offset + 1);
    const newBatchResponse = await api.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=12&offset=${12 * offset}`
    );

    const newArray = [...pokemonData, ...newBatchResponse.data.results];

    setPokemonData(newArray);
    console.log(pokemonData);
  };

  return (
    <Container>
      <input type="text" placeholder="Pesquise um pokemon" />
      <div>
        {pokemonData
          ? pokemonData.map((result, index) => (
              <Card key={index} url={result.url} />
            ))
          : ""}
        <div className="load-more">
          <button onClick={() => handleLoadMorePokemon()}>
            LOAD MORE POKÉMON
          </button>
        </div>
      </div>
    </Container>
  );
}
