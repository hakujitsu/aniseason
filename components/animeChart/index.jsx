import { Grid } from "@mui/material";
import { useEffect } from "react";
import useAnime from "../../hooks/useAnime";
import { useSeasonContext } from "../../hooks/useSeasons";
import AnimeCard from "./animeCard";
import SkeletonCard from "./skeletonCard";

// TODO: set sm={9}

const AnimeChart = () => {
  const { currentSeasonIndex, getCurrentSeasonParams } = useSeasonContext();
  const { animeList, setAnimeList } = useAnime();

  // const matchesSm = useMediaQuery(theme.breakpoints.only('sm'));

  useEffect(() => {
    setAnimeList([]);

    const initialiseListOfAnime = async () => {
      const { season, year } = getCurrentSeasonParams();
      const res = await fetch(
        `/api/getSeasonalAnime/?season=${season}&year=${year}&limit=0`,
        {
          method: "GET",
          headers: {
            "X-MAL-CLIENT-ID": process.env.CLIENT_ID,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setAnimeList(data.data);
    };
    initialiseListOfAnime();
  }, [currentSeasonIndex]);

  return (
    <Grid container spacing={2}>
      {animeList.length > 0
        ? animeList.map((d) => {
            return (
              <Grid key={d.id} item xs={12} sm={12} md={6} lg={4}>
                <AnimeCard
                  id={d.id}
                  title={d.title}
                  img={d.main_picture.large}
                  synopsis={d.synopsis}
                />
              </Grid>
            );
          })
        : [...Array(36).keys()].map((s) => {
            return (
              <Grid key={s} item xs={12} sm={12} md={6} lg={4}>
                <SkeletonCard />
              </Grid>
            );
          })}
    </Grid>
  );
};

export default AnimeChart;
