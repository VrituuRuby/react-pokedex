import { useContext, useState } from "react";
import { useQuery } from "@apollo/client";

import { PokemonInfoContext } from "../../context/PokemonContext";
import { POKEMON_DETAIL_QUERY } from "../../graphql/queries";
import {
  Container,
  DexEntry,
  Evolution,
  Loader,
  MainInfo,
  Measure,
  Weaknesses,
} from "./style";

import { TbPokeball } from "react-icons/tb";
import { AiOutlineClose, AiOutlineCloseCircle } from "react-icons/ai";

interface PokemonInfoProps {
  pokemonId: number;
}

interface IPokemonData {
  id: number;
  index: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: ComplexType;
  }[];
  weaknesses: {
    name: string;
  }[];
  category: {
    species_names: {
      genus: string;
    }[];
  }[];
  pokedex_entry: {
    flavor_text: {
      english: string;
    }[];
  }[];
  evolution_chain: {
    evolutions: {
      id: number;
    }[];
  }[];
}

interface SimpleType {
  name: string;
}

interface ComplexType {
  name: string;
  weaknesses: { type: SimpleType }[];
  strengths: { type: SimpleType }[];
}

export function Info() {
  const [pokemonInfo, setPokemonInfo] = useState<IPokemonData | null>(
    {} as IPokemonData
  );

  const { selectedPokemonId, setSelectedPokemonId } =
    useContext(PokemonInfoContext);

  const { loading, error } = useQuery(POKEMON_DETAIL_QUERY, {
    variables: {
      pokemonId: selectedPokemonId,
    },
    onCompleted: (data) => {
      let finalWeaknesses: SimpleType[] = [];
      const weaknesses: SimpleType[] = [];
      const strengths: SimpleType[] = [];

      data.pokemon[0].types.map(({ type }: any) => {
        type.weaknesses.map((weakness: any) => weaknesses.push(weakness.type));
        type.strengths.map((strength: any) => strengths.push(strength.type));
      });

      finalWeaknesses = weaknesses.filter(
        (weakness) =>
          !strengths.find((strength) => weakness.name === strength.name)
      );

      const uniqueWeakness = finalWeaknesses.filter(
        (weakness, index, self) =>
          index ===
          self.findIndex((duplicate) => duplicate.name === weakness.name)
      );

      const newPokemonInfo: IPokemonData = {
        ...data.pokemon[0],
        category: data.category,
        pokedex_entry: data.pokedex_entry,
        evolution_chain: data.evolution_chain,
        weaknesses: uniqueWeakness,
      };

      setPokemonInfo(newPokemonInfo);
    },
  });

  return pokemonInfo ? (
    <Container>
      <button className="close-button" onClick={() => setPokemonInfo(null)}>
        <AiOutlineClose size="2rem" />
      </button>
      {loading ? (
        <Loader>
          <TbPokeball size={200} />
        </Loader>
      ) : (
        <>
          <MainInfo>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo?.id}.png`}
              alt="Pokémon Official Artwork"
            />
            <div>
              <h2>{pokemonInfo?.name}</h2>
              <span className="index">
                #{String(pokemonInfo?.id).padStart(3, "0")}
              </span>
            </div>
            <span>{pokemonInfo?.category[0].species_names[0].genus}</span>
            <div className="types">
              {pokemonInfo?.types?.map(({ type }, index) => (
                <span key={index} className={`type ${type.name}`}>
                  {type.name}
                </span>
              ))}
            </div>
          </MainInfo>
          {pokemonInfo?.pokedex_entry[0]?.flavor_text[0]?.english && (
            <DexEntry>
              <h3>POKÉDEX ENTRY</h3>
              <p>{pokemonInfo?.pokedex_entry[0]?.flavor_text[0]?.english}</p>
            </DexEntry>
          )}
          <Measure>
            <div>
              <h3>HEIGHT</h3>
              <span>{pokemonInfo?.height / 10}M</span>
            </div>
            <div>
              <h3>WEIGHT</h3>
              <span>{pokemonInfo?.weight / 10} Kg</span>
            </div>
          </Measure>
          <Weaknesses>
            <h3>WEAKNESSES</h3>
            <div className="types">
              {pokemonInfo?.weaknesses?.map((weakness, index) => (
                <span key={index} className={`type ${weakness.name}`}>
                  {weakness.name}
                </span>
              ))}
            </div>
          </Weaknesses>
          <Evolution>
            <h3>EVOLUTION</h3>
            <div>
              {pokemonInfo?.evolution_chain[0].evolutions.map((evolution) => (
                <button
                  key={evolution.id}
                  onClick={() => setSelectedPokemonId(evolution.id)}
                >
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolution.id}.png`}
                  />
                </button>
              ))}
            </div>
          </Evolution>
        </>
      )}
    </Container>
  ) : null;
}
