import { Box, Container, Grid } from "@material-ui/core";
import Multiomix from "../../multiomix/multiomix";
import Bioplat from "../bioplat/bioplat";
import styles from "./home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <Box>
      <Container className={styles.firstContainer} maxWidth={false}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <Image
                src="/banner.svg"
                alt="Omics DataScience"
                width={1500}
                height={300}
                title="Omics DataScience"
                quality={100}  priority={true}
              />
            </div>
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
