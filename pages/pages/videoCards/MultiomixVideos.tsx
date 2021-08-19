import React from "react";
import { getYouTubeEmbededUrl } from "../../../utils/FormattingUtils";
import { Grid } from "@material-ui/core";
import VideoCard from "../../../components/videoCard/videoCard";
export default function MultiomixVideos() {
  return (
    <Grid container spacing={1} alignContent="center" justify="center">
      <VideoCard
        title="Interaction with cBioPortal"
        description="placeholder"
        url={getYouTubeEmbededUrl("Q7rgKWDxq0A")}
      />
      <VideoCard
        title="How to do a Multiomix analysis?"
        description="placeholder"
        url={getYouTubeEmbededUrl("07uyn0QIpCs")}
      />
      <VideoCard
        title="How to view previewsly executed analysis?"
        description="placeholder"
        url={getYouTubeEmbededUrl("WeTgxqmkt1o")}
      />
      <VideoCard
        title="How to explore results of an executed analysis?"
        description="placeholder"
        url={getYouTubeEmbededUrl("8ys52L4tIVw")}
      />
      <VideoCard
        title="Dealing with survival and other clinical data"
        description="placeholder"
        url={getYouTubeEmbededUrl("d6UILEDTM_g")}
      />
    </Grid>
  );
}
