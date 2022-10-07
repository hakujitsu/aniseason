import { createContext, useContext, useState } from "react";
import { generateSeasons } from "../utils/seasons";

export const SeasonContext = createContext(null);

export const useSeasonContextProvider = () => {
  const seasons = generateSeasons();
  const [currentSeasonIndex, setCurrentSeasonIndex] = useState(seasons.length - 4)

  return {seasons, currentSeasonIndex, setCurrentSeasonIndex}
}

export const useSeasonContext = () => {
  const context = useContext(SeasonContext);
  if (context === null) {
    throw new Error(
      "useSeasonContext should be called in an useSeasonContextProvider"
    );
  }
  return context;
};

