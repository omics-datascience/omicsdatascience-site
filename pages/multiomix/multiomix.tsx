import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  Fab,
  Grid,
  Typography,
} from "@material-ui/core";
import NavigationIcon from "@material-ui/icons/Navigation";
import styles from "./multiomix.module.css";
import dynamic from "next/dynamic";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MultiomixVideos from "../pages/videoCards/MultiomixVideos";
const CarouselComponent = dynamic(
  () => import("../../components/carousel/carousel"),
  { ssr: false }
);

const images = ["/img1.png", "/img2.png", "/img3.png", "/img4.png"];
export default function Multiomix() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Multiomix
        </Typography>
        <Divider variant="middle" className={styles.divider} />
      </Grid>
      <Grid item xs={6}>
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
      <Grid item xs={6}>
        <CarouselComponent items={images} />
      </Grid>
      <Grid item xs={12}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={styles.accordionSummary}
          >
            <Typography variant="h5">Videos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MultiomixVideos />
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12}>
        <Container fixed className={styles.container}>
          <a
            href="http://www.multiomix.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Fab
              variant="extended"
              size="medium"
              color="primary"
              className={styles.label}
            >
              Learn more!
            </Fab>
          </a>
        </Container>
      </Grid>
    </Grid>
  );
}
