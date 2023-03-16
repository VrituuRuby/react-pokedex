import { Container } from "./style";

export function Header() {
  return (
    <Container>
      <div>
        <h1>React JS Pokédex</h1>
        <nav>
          <a
            target="_blank"
            href="https://www.figma.com/file/QgQ7jZmtF7eYlKIO5re0YH/PokeJS?node-id=1%3A7&t=WOTWqwn7YDepEgE5-1"
          >
            Figma
          </a>
          <a href="">Github</a>
        </nav>
      </div>
    </Container>
  );
}
