import { Box, Container, Stack, Typography } from "@mui/material";
import Logo from "./logo";
import SeasonToggle from "./seasonToggle";

const sx = {
  header: {
    height: "64px",
  },
  stack: {
    width: "100%",
  },
};

const Header = () => {
  return (
    <Container maxWidth="lg">
    <Box display="flex" alignItems="center" sx={sx.header}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={sx.stack}
      >
        <Logo />
        <SeasonToggle />
      </Stack>
    </Box>
    </Container>
  );
};

export default Header;
