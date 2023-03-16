import { Card } from "../Card";
import { Container } from "./style";

export function Table() {
  return (
    <Container>
      <input type="text" placeholder="Pesquise um pokemon" />
      <div>
        {Array.from({ length: 12 }).map((_, index) => (
          <Card key={index} index={index + 1} />
        ))}
        <div className="load-more">
          <button>LOAD MORE POKÉMON</button>
        </div>
      </div>
    </Container>
  );
}
