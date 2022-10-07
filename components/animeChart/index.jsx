import { Grid } from "@mui/material";
import Image from "next/image";
import AnimeCard from "./animeCard";

const data = [
  {
    node: {
      id: 53236,
      title: "Road of Naruto",
      main_picture: {
        medium: "https://api-cdn.myanimelist.net/images/anime/1255/128762.jpg",
        large: "https://api-cdn.myanimelist.net/images/anime/1255/128762l.jpg",
      },
    },
  },
  {
    node: {
      id: 21,
      title: "One Piece",
      main_picture: {
        medium: "https://api-cdn.myanimelist.net/images/anime/6/73245.jpg",
        large: "https://api-cdn.myanimelist.net/images/anime/6/73245l.jpg",
      },
    },
  },
  {
    node: {
      id: 52193,
      title: "Akiba Maid Sensou",
      main_picture: {
        medium: "https://api-cdn.myanimelist.net/images/anime/1119/127385.jpg",
        large: "https://api-cdn.myanimelist.net/images/anime/1119/127385l.jpg",
      },
    },
  },
  {
    node: {
      id: 49979,
      title: "Akuyaku Reijou nanode Last Boss wo Kattemimashita",
      main_picture: {
        medium: "https://api-cdn.myanimelist.net/images/anime/1648/126110.jpg",
        large: "https://api-cdn.myanimelist.net/images/anime/1648/126110l.jpg",
      },
    },
  },
  {
    node: {
      id: 966,
      title: "Crayon Shin-chan",
      main_picture: {
        medium: "https://api-cdn.myanimelist.net/images/anime/10/59897.jpg",
        large: "https://api-cdn.myanimelist.net/images/anime/10/59897l.jpg",
      },
    },
  },
  {
    node: {
      id: 48542,
      title: "Do It Yourself!!",
      main_picture: {
        medium: "https://api-cdn.myanimelist.net/images/anime/1408/127129.jpg",
        large: "https://api-cdn.myanimelist.net/images/anime/1408/127129l.jpg",
      },
    },
  },
  {
    node: {
      id: 8687,
      title: "Doraemon (2005)",
      main_picture: {
        medium: "https://api-cdn.myanimelist.net/images/anime/6/23935.jpg",
        large: "https://api-cdn.myanimelist.net/images/anime/6/23935l.jpg",
      },
    },
  },
  {
    node: {
      id: 52976,
      title: "Berserk: Ougon Jidai-hen - Memorial Edition",
      main_picture: {
        medium: "https://api-cdn.myanimelist.net/images/anime/1607/127730.jpg",
        large: "https://api-cdn.myanimelist.net/images/anime/1607/127730l.jpg",
      },
    },
  },
  {
    node: {
      id: 46654,
      title: "IDOLiSH7: Third Beat! Part 2",
      main_picture: {
        medium: "https://api-cdn.myanimelist.net/images/anime/1458/125998.jpg",
        large: "https://api-cdn.myanimelist.net/images/anime/1458/125998l.jpg",
      },
    },
  },
  {
    node: {
      id: 49828,
      title: "Mobile Suit Gundam: The Witch from Mercury",
      main_picture: {
        medium: "https://api-cdn.myanimelist.net/images/anime/1440/127624.jpg",
        large: "https://api-cdn.myanimelist.net/images/anime/1440/127624l.jpg",
      },
    },
  },
];

const AnimeChart = () => {
  return (
    <Grid container spacing={2}>
      {data.map((d) => {
        return (
          <Grid key={d.node.id} item xs={6} sm={4} md={3} lg={2} sx={{position: 'relative'}}>
            <AnimeCard id={d.node.id} title={d.node.title} img={d.node.main_picture.large}/>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AnimeChart;
