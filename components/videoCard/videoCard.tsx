import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import styles from "./videoCard.module.css";

interface props {
  title: string;
  description: string;
  url: string;
}
export default function VideoCard(props: props) {
  return (
    <Grid item xs={12} sm={12} md={7} lg={6}>
      <Card className={styles.card} raised={true}>
        <CardActionArea>
          <CardMedia
            className={styles.media}
            component="iframe"
            src={props.url}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            {showPlaceholder(props.description)}
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
