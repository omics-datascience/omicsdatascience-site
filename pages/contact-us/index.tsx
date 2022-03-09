import { Container, Divider, Grid, Typography } from "@material-ui/core";
import GForm from "../../components/gform/gform";

export default function GetAccess() {
  return (
    <Container>
      <Grid container spacing={1}>
      <Grid item xs={12}>
          <Typography gutterBottom variant="h4">
            Want to ask request access?
          </Typography>
          <Divider variant="fullWidth" />
        </Grid>
        <Grid item sm={12}>
          <GForm
            url="https://docs.google.com/forms/d/e/1FAIpQLSd9d4BsFoBXhWxsAayFbSetyufcBOHH_ZXNb4-YayjyxuKrbA/viewform?embedded=true"
            height={1080}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4">
            Want to ask a question?
          </Typography>
          <Divider variant="fullWidth" />
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
