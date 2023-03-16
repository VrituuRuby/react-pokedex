import { Container } from "./style";

interface CardProps {
  index: number;
}

export function Card({ index }: CardProps) {
  return (
    <Container>
      <img
        src="https://media.tenor.com/y5KVwUHOv-0AAAAd/rei-rei-plush.gif"
        alt=""
      />
      <strong>#{String(index).padStart(3, "0")}</strong>
      <span className="name">Nome</span>
      <div>
        <span className="type electric">electric</span>
        <span className="type fighting">fighting</span>
      </div>
    </Container>
  );
}
