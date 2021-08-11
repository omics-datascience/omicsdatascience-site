import React from "react";
import { getYouTubeEmbededUrl } from "../../../utils/FormattingUtils";
import { Grid } from "@material-ui/core";
import VideoCard from "../../../components/videoCard/videoCard";
export default function MultiomixVideos() {
  return (
    <Grid container spacing={1} alignContent="center" justify="center">
      <VideoCard
        title="Why use bioplat 2?"
        description="placeholder"
        url={getYouTubeEmbededUrl("chvUbxkorXM")}
      />
      <VideoCard
        title="More Reasons"
        description="placeholder"
        url={getYouTubeEmbededUrl("nCx-N7jeoZU")}
      />
      <VideoCard
        title="More Reasons"
        description="placeholder"
        url={getYouTubeEmbededUrl("Q7rgKWDxq0A")}
      />
      <VideoCard
        title="More Reasons"
        description="placeholder"
        url={getYouTubeEmbededUrl("07uyn0QIpCs")}
      />
      <VideoCard
        title="More Reasons"
        description="placeholder"
        url={getYouTubeEmbededUrl("WeTgxqmkt1o")}
      />
      <VideoCard
        title="More Reasons"
        description="placeholder"
        url={getYouTubeEmbededUrl("8ys52L4tIVw")}
      />
      <VideoCard
        title="More Reasons"
        description="placeholder"
        url={getYouTubeEmbededUrl("d6UILEDTM_g")}
      />
    </Grid>
  );
}
