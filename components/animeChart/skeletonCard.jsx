import { Card, CardContent, Skeleton, Stack } from "@mui/material";

// TODO: improve skeleton card
const sx = {
  card: {
    height: "320px",
    width: "100%",
  },
  skeleton: {
    animationDuration: "0.1s",
  },
  titleSkeleton: {
    fontSize: "1.7rem",
  },
};

const SkeletonCard = () => {
  return (
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
              width="180px"
              animation="wave"
              sx={[sx.skeleton, sx.titleSkeleton]}
            />
            <Skeleton
              variant="rectangular"
              height="200px"
              width="180px"
              animation="wave"
              sx={sx.skeleton}
            />
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default SkeletonCard;
