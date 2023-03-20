import { gql, useQuery } from "@apollo/client";
import { CaretRight } from "phosphor-react";
import { useState } from "react";
import {
  Container,
  DexEntry,
  Evolution,
  MainInfo,
  Measure,
  Weaknesses,
} from "./style";

interface PokemonInfoProps {
  pokemon: IPokemonData;
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
    speciesnames: {
      genus: string;
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

  const pokemonId = 84;
  const POKEMON_QUERY = gql`
    query getPokemon {
      pokemon: pokemon_v2_pokemon(where: { id: { _eq: ${pokemonId} } }) {
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
        where: { pokemon_v2_pokemonspecies: { id: { _eq: ${pokemonId} } } }
      ) {
        id
        pokemon_v2_pokemonspecies {
          id
          name
        }
      }
      category: pokemon_v2_pokemonspecies(where: { id: { _eq: ${pokemonId}} }) {
        speciesnames: pokemon_v2_pokemonspeciesnames(
          where: { language_id: { _eq: 9 } }
        ) {
          genus
        }
      }
    }
  `;

  useQuery(POKEMON_QUERY, {
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
        weaknesses: finalWeaknesses,
      };

      console.log(data.category);

      setPokemonInfo(newPokemonInfo);
    },
  });

  console.log(pokemonInfo);

  return (
    <Container>
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
        {/* <span>{String(pokemonInfo?.category[0]?.speciesnames) ?? ""}</span> */}
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
        <p>
          To steal the life of its target, it slips into the prey’s shadow and
          silently waits for an opportunity.
        </p>
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
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png"
            alt=""
          />
          <CaretRight size={32} weight="bold" />
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png"
            alt=""
          />
          <CaretRight size={32} weight="bold" />
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"
            alt=""
          />
        </div>
      </Evolution>
    </Container>
  );
}
