import { createContext, ReactNode, useState } from "react";
interface PokemonProviderProps {
  children: ReactNode;
}

interface IPokemonInfoContext {
  selectedPokemonId: number | null;
  setSelectedPokemonId: (id: number | null) => void;
}

export const PokemonInfoContext = createContext({} as IPokemonInfoContext);

export function PokemonInfoProvider({ children }: PokemonProviderProps) {
  const [selectedPokemonId, setSelectedPokemonId] = useState<number | null>(94);

  return (
    <PokemonInfoContext.Provider
      value={{ selectedPokemonId, setSelectedPokemonId }}
    >
      {children}
    </PokemonInfoContext.Provider>
  );
}
