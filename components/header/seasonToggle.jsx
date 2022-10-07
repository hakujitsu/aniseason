import { Button, Stack } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSeasonContext } from "../../hooks/useSeasons";

const sx = {
  seasonButton: {
    width: "120px"
  }
}

const SeasonToggle = () => {
  const { seasons, currentSeasonIndex, setCurrentSeasonIndex } =
    useSeasonContext();

  const decrementSeasonIndex = () => {
    setCurrentSeasonIndex(currentSeasonIndex - 1);
  };

  const incrementSeasonIndex = () => {
    setCurrentSeasonIndex(currentSeasonIndex + 1);
  };

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Button
        color="primary"
        aria-label="previous season"
        component="label"
        disabled={currentSeasonIndex <= 0}
        onClick={decrementSeasonIndex}
      >
        <ChevronLeftIcon />
      </Button>
      <Button variant="text" sx={sx.seasonButton}>
        {seasons[currentSeasonIndex]}
      </Button>
      <Button
        color="primary"
        aria-label="previous season"
        component="label"
        disabled={currentSeasonIndex >= seasons.length - 1}
        onClick={incrementSeasonIndex}
      >
        <ChevronRightIcon />
      </Button>
    </Stack>
  );
};

export default SeasonToggle;
