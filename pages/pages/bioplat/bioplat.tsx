import { Divider, Grid, Typography } from "@material-ui/core";
import BioplatVideos from "../videoCards/BioplatVideos";
import styles from "./bioplat.module.css";
export default function Bioplat() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Bioplat
        </Typography>
        <Divider variant="middle" className={styles.divider} />
      </Grid>
      <Grid item xs={12}>
        <BioplatVideos />
      </Grid>
    </Grid>
  );
}
