import { Typography } from "@mui/material";

const sx = {
  link: {
    "fontWeight": 600,
    "&:hover": {
      textDecoration: "underline",
    },
  },
};

const AnimeCardTitle = (props) => {
  const { title, id } = props;
  return (
    <a href={"https://myanimelist.net/anime/" + id}>
      <Typography variant="h6" color="primary" sx={sx.link}>
        {title}
      </Typography>
    </a>
  );
};

export default AnimeCardTitle;
