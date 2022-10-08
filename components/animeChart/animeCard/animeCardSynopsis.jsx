import { Box, Typography } from "@mui/material";
import { useLayoutEffect, useRef, useState } from "react";

const sx = {
  body: {
    width: "100%",
    overflowY: "auto",
  },
};

const AnimeCardSynopsis = (props) => {
  const { synopsis, height } = props;

  return (
    <Box
      sx={[
        sx.body,
        {
          height: "" + (320 - 16 * 3 - height) + "px",
        },
      ]}
    >
      <Typography variant="body2">{synopsis}</Typography>
    </Box>
  );
};

export default AnimeCardSynopsis;
