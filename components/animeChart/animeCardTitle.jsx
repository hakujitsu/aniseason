import { Link, Typography } from "@mui/material";

const AnimeCardTitle = (props) => {
  const { title, id } = props;
  return (
    <a href={"https://myanimelist.net/anime/" + id}>
      <Link target="_blank" underline="hover">
        <Typography variant="body1">{title}</Typography>
      </Link>
    </a>
  );
};

export default AnimeCardTitle;
