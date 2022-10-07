import { Box, CardContent, Stack, Typography } from "@mui/material";
import { useRef } from "react";
import AnimeCardTitle from "./animeCardTitle";

const sx = {
  body: {
    width: "100%",
    overflowY: "auto",
  },
};

const AnimeCardContents = (props) => {
  const { id, title, synopsis } = props;

  const titleRef = useRef();

  return (
    <CardContent>
      <Stack direction="column" justifyContent="center" spacing={1}>
        <Box ref={titleRef}>
          <AnimeCardTitle title={title} id={id} />
        </Box>

        <Box
          sx={[
            sx.body,
            {
              height:
                "" +
                (320 -
                  (titleRef.current ? titleRef.current.clientHeight : 0) -
                  8 -
                  16 * 2) +
                "px",
            },
          ]}
        >
          <Typography variant="body2" sx={sx.body}>
            {synopsis}
          </Typography>
        </Box>
      </Stack>
    </CardContent>
  );
};

export default AnimeCardContents;
