import { Box, CardContent, Stack } from "@mui/material";
import { useRef } from "react";
import useComponentSize from "@rehooks/component-size";
import AnimeCardSynopsis from "./animeCardSynopsis";
import AnimeCardTitle from "./animeCardTitle";

const sx = {
  body: {
    width: "100%",
    overflowY: "auto",
  },
};

const AnimeCardContents = (props) => {
  const { id, title, synopsis } = props;

  const titleRef = useRef(null);
  let dimensions = useComponentSize(titleRef);

  return (
    <CardContent>
      <Stack direction="column" justifyContent="center" spacing={1}>
        <Box ref={titleRef}>
          <AnimeCardTitle title={title} id={id} />
        </Box>

        <AnimeCardSynopsis height={dimensions.height} synopsis={synopsis} />
      </Stack>
    </CardContent>
  );
};

export default AnimeCardContents;
