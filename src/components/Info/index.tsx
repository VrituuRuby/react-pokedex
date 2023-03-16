import { CaretRight } from "phosphor-react";
import {
  Container,
  DexEntry,
  Evolution,
  MainInfo,
  Measure,
  Types,
  Weaknesses,
} from "./style";

export function Info() {
  return (
    <Container>
      <MainInfo>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"
          alt=""
        />
        <div>
          <h2>Gengar</h2>
          <span className="index">#094</span>
        </div>
        <span>SHADOW POKÉMON</span>
        <div className="types">
          <span className="type ghost">ghost</span>
          <span className="type poison">poison</span>
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
          <span>1.5M</span>
        </div>
        <div>
          <h3>WEIGHT</h3>
          <span>40.5 Kg</span>
        </div>
      </Measure>
      <Weaknesses>
        <h3>WEAKNESSES</h3>
        <Types className="types">
          <span className="type ghost">ghost</span>
          <span className="type dark">dark</span>
          <span className="type psychic">psychic</span>
          <span className="type ground">ground</span>
        </Types>
      </Weaknesses>
      <Evolution>
        <h3>EVOLUTION</h3>
        <div>
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png"
            alt=""
          />
          <CaretRight size={24} weight="bold" />
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png"
            alt=""
          />
          <CaretRight size={24} weight="bold" />
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"
            alt=""
          />
        </div>
      </Evolution>
    </Container>
  );
}
