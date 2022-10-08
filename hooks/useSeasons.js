import { createContext, useContext, useState } from "react";
import { generateSeasons, parseSeason } from "../utils/seasons";

export const SeasonContext = createContext(null);

export const useSeasonContextProvider = () => {
  const seasons = generateSeasons();
  const [currentSeasonIndex, setCurrentSeasonIndex] = useState(seasons.length - 3)

  const getCurrentSeasonParams = () => {
    return parseSeason(seasons[currentSeasonIndex])
  }

  return { seasons, currentSeasonIndex, setCurrentSeasonIndex, getCurrentSeasonParams }
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

