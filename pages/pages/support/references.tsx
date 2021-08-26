import { Container, Divider, Grid, Typography } from "@material-ui/core";
import { Document, Page, pdfjs } from "react-pdf";
import GForm from "../../../components/gform/gform";
import classes from "./references.module.css";
import { useState } from "react";
import workerSrc from "./pdfWorker";
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
          <Document file={item.path} className={classes.pdfContainer}>
            <Page width={150} pageNumber={1} />
          </Document>
        </a>
        <Typography variant="body1" className={classes.text}>
          {item.text}
        </Typography>
      </Grid>
    );
  });
  return pdfs;
}
export default function References() {
  return (
    <Container className={classes.pageContainer}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4">
            References
          </Typography>
          <Divider variant="middle" className={classes.divider} />
        </Grid>
        {renderPdfs()}

        <Grid item xs={12}>
          <Typography gutterBottom variant="h4">
            Want to ask a question?
          </Typography>
          <Divider variant="middle" className={classes.divider} />
        </Grid>
        <Grid sm={12}>
          <GForm
            url="https://docs.google.com/forms/d/e/1FAIpQLSdA-HYyGAk21mqFCmEfaJd3ipDI8pBCB1vIybynP1f3fQf3jg/viewform?embedded=true"
            height={770}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
