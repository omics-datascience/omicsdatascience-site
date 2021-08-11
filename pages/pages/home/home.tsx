import { Box, Container, Grid, Typography } from "@material-ui/core";
import Multiomix from "../../multiomix/multiomix";
import Bioplat from "../bioplat/bioplat";
import styles from "./home.module.css";

export default function Home() {
  return (
    <Box>
      <Container className={styles.firstContainer} maxWidth={false}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography variant="h1" align="center" paragraph>
              Omics Data Science
            </Typography>
            <Typography variant="h6" align="center" paragraph>
              A &quot;Gene expression Biomarker&quot; discovery Research group
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container className={styles.secondContainer}>
        <Multiomix />
        <Bioplat />
      </Container>
    </Box>
  );
}
