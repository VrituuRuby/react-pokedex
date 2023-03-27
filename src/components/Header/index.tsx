import { Container } from "./style";

import { FiFigma } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

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
            <FiFigma size={24} />
            Figma
          </a>
          <a target="_blank" href="https://github.com/VrituuRuby/react-pokedex">
            <AiFillGithub size={24} />
            Github
          </a>
        </nav>
      </div>
    </Container>
  );
}
