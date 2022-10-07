import { Card, CardContent, CardMedia, Stack } from "@mui/material";
import AnimeCardTitle from "./animeCardTitle";

const sx = {
  card: {
    height: "360px",
    width: "100%",
  },
  cardImage: {
    objectFit: "contain",
  },
};

const AnimeCard = (props) => {
  const { id, title, img } = props;
  return (
    <Card sx={sx.card}>
      <CardContent>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <CardMedia
            component="img"
            alt={title}
            height="200px"
            image={img}
            sx={sx.cardImage}
          />
          <AnimeCardTitle title={title} id={id} />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
