import { Container, makeStyles, Typography } from "@material-ui/core";
import CarouselComponent from "../../../components/carousel/carousel";
import VideoCards from "../videoCards/videoCards";

const images = ["/mult1.png", "/mult2.png", "/mult3.png"];
const useStyles = makeStyles(() => ({
  heroContent: {
    backgroundColor: "#424242",
    color: "#fff",
  },
}));
export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Album layout
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely.
        </Typography>
        <CarouselComponent items={images} />
      </Container>
      <Container className={classes.heroContent}>
        <VideoCards />
      </Container>
    </div>
  );
}
