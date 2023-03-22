import { gql, useQuery } from "@apollo/client";
import { CaretRight } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { PokemonInfoContext } from "../../context/PokemonContext";
import {
  Container,
  DexEntry,
  Evolution,
  Loader,
  MainInfo,
  Measure,
  Weaknesses,
} from "./style";

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
  const [pokemonInfo, setPokemonInfo] = useState<IPokemonData>(
    {} as IPokemonData
  );

  const { selectedPokemonId } = useContext(PokemonInfoContext);

  const POKEMON_QUERY = gql`
    query getPokemon($pokemonId: Int!) {
      pokemon: pokemon_v2_pokemon(where: { id: { _eq: $pokemonId } }) {
        id
        name
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
            weaknesses: pokemonV2TypeefficaciesByTargetTypeId(
              where: { damage_factor: { _gt: 100 } }
            ) {
              damage_factor
              type: pokemon_v2_type {
                name
              }
            }
            strengths: pokemonV2TypeefficaciesByTargetTypeId(
              where: { damage_factor: { _lt: 100 } }
            ) {
              damage_factor
              type: pokemon_v2_type {
                name
              }
            }
          }
        }
        weight
        height
      }
      evolution_chain: pokemon_v2_evolutionchain(
        where: { pokemon_v2_pokemonspecies: { id: { _eq: $pokemonId } } }
      ) {
        id
        evolutions: pokemon_v2_pokemonspecies {
          id
          name
        }
      }
      category: pokemon_v2_pokemonspecies(where: { id: { _eq: $pokemonId } }) {
        species_names: pokemon_v2_pokemonspeciesnames(
          where: { language_id: { _eq: 9 } }
        ) {
          genus
        }
      }
      pokedex_entry: pokemon_v2_pokemonspecies(
        where: { id: { _eq: $pokemonId } }
      ) {
        flavor_text: pokemon_v2_pokemonspeciesflavortexts(
          where: { language_id: { _eq: 9 } }
          limit: 1
        ) {
          english: flavor_text
        }
      }
    }
  `;

  const { loading, error } = useQuery(POKEMON_QUERY, {
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

      console.log(data);

      finalWeaknesses = weaknesses.filter(
        (weakness) =>
          !strengths.find((strength) => weakness.name === strength.name)
      );

      const newPokemonInfo: IPokemonData = {
        ...data.pokemon[0],
        category: data.category,
        pokedex_entry: data.pokedex_entry,
        evolution_chain: data.evolution_chain,
        weaknesses: finalWeaknesses,
      };

      console.log(data);

      setPokemonInfo(newPokemonInfo);
    },
  });

  return (
    <Container>
      {loading ? (
        <Loader>Loading</Loader>
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
                #{String(pokemonInfo.id).padStart(3, "0")}
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
          <DexEntry>
            <h3>POKÉDEX ENTRY</h3>
            <p>{pokemonInfo.pokedex_entry[0].flavor_text[0].english}</p>
          </DexEntry>
          <Measure>
            <div>
              <h3>HEIGHT</h3>
              <span>{pokemonInfo.height / 10}M</span>
            </div>
            <div>
              <h3>WEIGHT</h3>
              <span>{pokemonInfo.weight / 10} Kg</span>
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
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolution.id}.png`}
                />
              ))}
            </div>
          </Evolution>
        </>
      )}
    </Container>
  );
}
