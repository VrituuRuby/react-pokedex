import { gql } from "@apollo/client";

export const POKEMON_QUERY = gql`
  query getPokemons($offset: Int!, $name: String) {
    pokemons: pokemon_v2_pokemon(
      limit: $offset
      where: { is_default: { _eq: true }, name: { _iregex: $name } }
    ) {
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

export const POKEMON_QUERY_BY_NAME = gql`
  query getPokemons($name: String!) {
    pokemons: pokemon_v2_pokemon(
      limit: 12
      where: { is_default: { _eq: true }, name: { _iregex: $name } }
    ) {
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

export const POKEMON_DETAIL_QUERY = gql`
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
