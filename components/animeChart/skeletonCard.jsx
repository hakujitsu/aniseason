import { Card, CardContent, Skeleton, Stack } from "@mui/material";
import { useRef } from "react";
import useComponentSize from "@rehooks/component-size";

const sx = {
  card: {
    height: "320px",
    width: "100%",
    boxShadow: 10,
  },
  skeleton: {
    animationDuration: "0.1s",
  },
  titleSkeleton: {
    fontSize: "1.7rem",
  },
};

const SkeletonCard = () => {
  const cardRef = useRef(null);
  let dimensions = useComponentSize(cardRef);

  return (
    <div ref={cardRef}>
      <Card sx={sx.card}>
        <Stack direction="row" alignItems="flex-start" position="relative">
          <Skeleton
            variant="rectangular"
            width="200px"
            height="360px"
            animation="wave"
            sx={sx.skeleton}
          />
          <CardContent>
            <Stack
              direction="column"
              justifyContent="center"
              spacing={1}
              sx={{ display: "flex" }}
            >
              <Skeleton
                variant="text"
                width={"" + Math.min(dimensions.width, 180) + "px"}
                animation="wave"
                sx={[sx.skeleton, sx.titleSkeleton]}
              />
              <Skeleton
                variant="rectangular"
                height="220px"
                width={"" + (dimensions.width - 232) + "px"}
                animation="wave"
                sx={sx.skeleton}
              />
            </Stack>
          </CardContent>
        </Stack>
      </Card>
    </div>
  );
};

export default SkeletonCard;
