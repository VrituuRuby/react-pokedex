import { Container } from "./style";

export function Info() {
  return (
    <Container>
      <div>
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
      </div>
      <div>
        <h3>POKÉDEX ENTRY</h3>
        <p>
          To steal the life of its target, it slips into the prey’s shadow and
          silently waits for an opportunity.
        </p>
      </div>
    </Container>
  );
}
