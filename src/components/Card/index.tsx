import { Lifebuoy } from "phosphor-react";
import { useEffect, useState } from "react";
import { Container } from "./style";

interface CardProps {
  index: number;
}

export function Card({ index }: CardProps) {
  return (
    <Container>
      <div className="card-border"></div>
      <div className="content">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png"
          alt=""
        />
        <strong>#{String(index).padStart(3, "0")}</strong>
        <span className="name">Nome</span>
        <div>
          <span className="type electric">electric</span>
          <span className="type fighting">fighting</span>
        </div>
      </div>
    </Container>
  );
}
