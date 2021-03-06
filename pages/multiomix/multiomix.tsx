import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import styles from "./multiomix.module.css";
import dynamic from "next/dynamic";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MultiomixVideos from "../pages/videoCards/MultiomixVideos";
const CarouselComponent = dynamic(
  () => import("../../components/carousel/carousel"),
  { ssr: false }
);
import VideoCard from "../../components/videoCard/videoCard";
import { getYouTubeEmbededUrl } from "../../utils/FormattingUtils";
export default function Multiomix() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Multiomix
        </Typography>
        <Divider variant="middle" className={styles.divider} />
      </Grid>
      <Grid item lg={6}>
        <Typography variant="body1" className={styles.text}>
          Multiomix is an interactive cloud-based platform that allows
          biologists to identify genetic and epigenetic events associated with
          the transcriptional modulation of cancer-related genes through the
          analysis of multi-omics data available on public functional genomic
          databases. Multiomix consists of an integrated set of functions,
          pipelines, and a graphical user interface that allows retrieval,
          aggregation, analysis and visualization of different omics data
          sources. After the user provides the data to be analyzed, Multiomix
          identifies all significant correlations between mRNAs and non-mRNA
          genomics features (e.g.: miRNA, DNA methylation and CNV) across the
          genome, the predicted sequence based interactions (e.g., miRNA-mRNA),
          and their associated prognostic values.
        </Typography>
      </Grid>
      <Grid item lg={6} xs={12}>
        <CarouselComponent />
      </Grid>
      <Grid item xs={12}>
        <Container fixed className={styles.container}>
          <Button
            variant="contained"
            href="http://www.multiomix.org"
            target="_blank"
            className={styles.label}
          >
            Access Multiomix
          </Button>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Tutorial Videos
        </Typography>
        <Divider variant="middle" className={styles.divider} />
        <Grid container spacing={1} alignContent="center" justify="center">
          <VideoCard
            title="How to upload data?"
            description="placeholder"
            url={getYouTubeEmbededUrl("chvUbxkorXM")}
          />
          <VideoCard
            title="How to share molecular datasets?"
            description="placeholder"
            url={getYouTubeEmbededUrl("nCx-N7jeoZU")}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={styles.accordionSummary}
          >
            <Typography variant="h5">More Tutorial Videos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MultiomixVideos />
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
}
