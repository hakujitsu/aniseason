import { Stack, Typography } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";

const Logo = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
    >
      <LiveTvIcon fontSize="large" />
      <Typography variant="h4">AniSeason</Typography>
    </Stack>
  );
};

export default Logo;
