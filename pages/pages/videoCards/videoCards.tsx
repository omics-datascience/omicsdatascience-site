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
    <Grid container spacing={1} alignContent="center" justify="center">
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
    </Grid>
  );
}

function createVideoCard(title: string, description: string, url: string) {
  return (
    <Grid item xs={12} sm={12} md={7} lg={6} justify="center">
      <Card className={styles.card} raised={true}>
        <CardActionArea>
          <CardMedia
            className={styles.media}
            component="iframe"
            src={url}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            {showPlaceholder(description)}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

function showPlaceholder(description: String) {
  if (description !== "") {
    <Typography variant="body2" color="textSecondary" component="p">
      {description}
    </Typography>;
  }
}
