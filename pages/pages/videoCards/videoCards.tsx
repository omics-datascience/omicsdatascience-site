import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styles from "./videoCards.module.css";
import { getYouTubeEmbededUrl } from "../../../utils/FormattingUtils";
import { Grid } from "@material-ui/core";
export default function VideoCards() {
  return (
    <div>
      {createVideoCard(
        "Why use bioplat 2?",
        "placeholder",
        getYouTubeEmbededUrl("3ODSGrvlnNE")
      )}{" "}
      {createVideoCard(
        "More Reasons",
        "placeholder",
        getYouTubeEmbededUrl("PBetqVkMYTI")
      )}
    </div>
  );
}

function createVideoCard(title: string, description: string, url: string) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item lg={3}>
        <Card className={styles.card} raised={true} variant="outlined">
          <CardActionArea>
            <CardMedia
              className={styles.media}
              component="iframe"
              src={url}
              title="Why use bioplat"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
