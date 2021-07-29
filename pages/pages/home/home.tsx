import { Box, Container, Grid, Typography } from "@material-ui/core";
import VideoCards from "../videoCards/videoCards";
import styles from "./home.module.css";
import dynamic from "next/dynamic";

const CarouselComponent = dynamic(
  () => import("../../../components/carousel/carousel"),
  { ssr: false }
);

const images = ["/mult1.png", "/mult2.png", "/mult3.png"];

export default function Home() {
  return (
    <Box>
      <Container className={styles.firstContainer} maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h6" align="center" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <CarouselComponent items={images} />
          </Grid>
        </Grid>
      </Container>
      <Container className={styles.secondContainer}>
        <VideoCards />
      </Container>
    </Box>
  );
}
