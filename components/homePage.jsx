import { Container } from "@mui/material";
import AnimeChart from "./animeChart";
import Header from "./header";

const HomePage = () => {
  return (
    <Container maxWidth="xl">
      <Header/>
      <AnimeChart/>
    </Container>
  )
}

export default HomePage;