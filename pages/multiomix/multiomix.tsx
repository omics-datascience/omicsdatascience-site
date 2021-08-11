import { Container, Divider, Fab, Grid, Typography } from "@material-ui/core";
import NavigationIcon from "@material-ui/icons/Navigation";
import styles from "./multiomix.module.css";
import dynamic from "next/dynamic";
const CarouselComponent = dynamic(
  () => import("../../components/carousel/carousel"),
  { ssr: false }
);
const images = ["/mult1.png", "/mult2.png", "/mult3.png"];
export default function Multiomix() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Multiomix
        </Typography>
        <Divider variant="middle" className={styles.divider} />
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
        <Container fixed className={styles.container}>
          <a
            href="http://www.multiomix.org"
            rel="noopener noreferrer"
            target="_blank  "
          >
            <Fab variant="extended" size="medium" className={styles.label}>
              <NavigationIcon />
              Learn more!
            </Fab>
          </a>
        </Container>
      </Grid>
      <Grid item xs={12}></Grid>
      <CarouselComponent items={images} />
      <Grid item xs={12}></Grid>
    </Grid>
  );
}