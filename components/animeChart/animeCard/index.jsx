import { Card, CardMedia, Stack } from "@mui/material";
import AnimeCardContents from "./animeCardContents";

const sx = {
  card: {
    height: "320px",
    width: "100%",
  },
  cardImage: {
    objectFit: "cover",
    height: "320px",
    width: "200px",
  },
};

const AnimeCard = (props) => {
  const { id, title, img, synopsis } = props;

  return (
    <Card sx={sx.card}>
      <Stack direction="row" alignItems="flex-start" position="relative">
        <CardMedia component="img" alt={title} image={img} sx={sx.cardImage} />
        <AnimeCardContents id={id} title={title} synopsis={synopsis} />
      </Stack>
    </Card>
  );
};

export default AnimeCard;
