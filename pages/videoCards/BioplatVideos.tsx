import React from "react";
import { getYouTubeEmbededUrl } from "../../utils/FormattingUtils";
import { Grid } from "@material-ui/core";
import VideoCard from "../../components/videoCard/videoCard";
export default function BioplatVideos() {
  return (
    <Grid container spacing={1} alignContent="center" justify="center">
      <VideoCard
        title="Why use bioplat 2?"
        description="placeholder"
        url={getYouTubeEmbededUrl("3ODSGrvlnNE")}
      />
      <VideoCard
        title="More Reasons"
        description="placeholder"
        url={getYouTubeEmbededUrl("PBetqVkMYTI")}
      />
    </Grid>
  );
}
