import { Container, Divider, Grid, Typography } from "@material-ui/core";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "./references.module.css";
import workerSrc from "../../../pdfWorker";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
import pdfConfig from "./pdfConfig.json";

interface pdfConfigItem {
  text: string;
  path: string;
}

function renderPdfs() {
  var pdfs: any[];
  pdfs = [];
  pdfConfig.forEach((item: pdfConfigItem) => {
    pdfs.push(
      <Grid item lg={5}>
        <a href={item.path} download>
          <Document file={item.path} className={styles.pdfContainer}>
            <Page width={150} pageNumber={1} />
          </Document>
        </a>
        <Typography variant="body1" className={styles.text}>
          {item.text}
        </Typography>
      </Grid>
    );
  });
  return pdfs;
}
export default function References() {
  return (
    <Container className={styles.pageContainer}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4">
            References
          </Typography>
          <Divider variant="middle" className={styles.divider} />
        </Grid>
        {renderPdfs()}

      </Grid>
    </Container>
  );
}
