import { createContext, ReactNode, useState } from "react";
interface PokemonProviderProps {
  children: ReactNode;
}

interface IPokemonInfoContext {
  selectedPokemonId: number;
  setSelectedPokemonId: (id: number) => void;
}

export const PokemonInfoContext = createContext({} as IPokemonInfoContext);

export function PokemonInfoProvider({ children }: PokemonProviderProps) {
  const [selectedPokemonId, setSelectedPokemonId] = useState(94);

  return (
    <PokemonInfoContext.Provider
      value={{ selectedPokemonId, setSelectedPokemonId }}
    >
      {children}
    </PokemonInfoContext.Provider>
  );
}
