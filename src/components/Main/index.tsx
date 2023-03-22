import { PokemonInfoProvider } from "../../context/PokemonContext";
import { Info } from "../Info";
import { Table } from "../Table";
import { Container } from "./style";

export function Main() {
  return (
    <PokemonInfoProvider>
      <Container>
        <Table />
        <Info />
      </Container>
    </PokemonInfoProvider>
  );
}
