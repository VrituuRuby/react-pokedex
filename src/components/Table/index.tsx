import { useEffect, useState } from "react";
import { Card } from "../Card";
import { Container } from "./style";

export function Table() {
  const [scrollOffset, setScrollOffset] = useState(0);

  const updateScroll = (event: any) => {
    setScrollOffset(event.target.scrollTop);
  };

  useEffect(() => {
    console.log("API FETCH");
  }, []);

  return (
    <Container>
      <input type="text" placeholder="Pesquise um pokemon" />
      <div onScroll={(e) => updateScroll(e)}>
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
