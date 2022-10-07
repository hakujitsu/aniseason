import { useState } from "react"

const useAnime = () => {
  const [animeList, setAnimeList] = useState([])

  return {animeList, setAnimeList}
}

export default useAnime