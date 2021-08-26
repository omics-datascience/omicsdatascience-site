import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import styles from "./about.module.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Mail";
import BookIcon from "@material-ui/icons/Book";
import BusinessIcon from "@material-ui/icons/Business";
import team from "./team.json";
import Avatar from "@material-ui/core/Avatar";

export default function About() {
  return (
    <Container>
      {renderTeam(team)}
      <Card className={styles.card} raised={true}>
        <CardHeader
          title="Acknowledgements"
          titleTypographyProps={{ align: "center", variant: "h4" }}
        ></CardHeader>
        {renderInstitutions()}
      </Card>
    </Container>
  );
}

function renderTeam(team: any) {
  var members: Array<Object>;
  members = [];
  team.forEach((member: any) => {
    members.push(
      <React.Fragment>
        <Grid item xs={6} md={4} className={styles.cardContainer}>
          <CardContent className={styles.cardContent}>
            <ListItem alignItems="center" dense={true}>
              <ListItemAvatar>
                <Avatar src={member.image} className={styles.avatar} />
              </ListItemAvatar>
              <ListItemText
                className={styles.text}
                primary={member.name}
                secondary={
                  <React.Fragment>
                    <Typography component="span" color="textPrimary">
                      {member.role}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </CardContent>
          <CardActions className={styles.cardActions} disableSpacing={false}>
            {member.twitter != "" ? (
              <IconButton>
                <a href={member.twitter} target="blank">
                  <TwitterIcon titleAccess="Twitter" />
                </a>
              </IconButton>
            ) : null}
            {member.linkedin != "" ? (
              <IconButton>
                <a href={member.linkedin} target="blank">
                  <LinkedInIcon titleAccess="LinkedIn" />
                </a>
              </IconButton>
            ) : null}
            {member.mail != "" ? (
              <IconButton>
                <a href={"mailto:" + member.mail} target="blank">
                  <EmailIcon titleAccess="Email" />
                </a>
              </IconButton>
            ) : null}
            {member.url != "" ? (
              <IconButton>
                <a href={member.url} target="blank">
                  <BookIcon titleAccess="Site" />
                </a>
              </IconButton>
            ) : null}
          </CardActions>
        </Grid>
      </React.Fragment>
    );
  });
  return (
    <Card className={styles.card} raised={true}>
      <CardHeader
        title="The Team"
        titleTypographyProps={{ align: "center", variant: "h4" }}
      ></CardHeader>
      <CardContent>
        <Grid container spacing={2}>
          {members}
        </Grid>
      </CardContent>
    </Card>
  );
}

function renderInstitutions() {
  return (
    <CardContent>
      <Typography variant="h5" className={styles.institutionsText}>
        Multiomix is the result of interdisciplinary work between members of the
        following scientific institutions:
      </Typography>
      <List>
        <ListItem>
          <BusinessIcon />

          <Typography
            variant="h6"
            className={styles.institution}
            gutterBottom={false}
          >
            CAETI - Open Interamerican University - UAI
          </Typography>
        </ListItem>
        <ListItem>
          <BusinessIcon />

          <Typography variant="h6" className={styles.institution}>
            CINIBA - Faculty of Medical Sciences - UNLP
          </Typography>
        </ListItem>
        <ListItem>
          <BusinessIcon />
          <Typography variant="h6" className={styles.institution}>
            LIDI - Faculty of Informatics - UNLP
          </Typography>
        </ListItem>
      </List>
    </CardContent>
  );
}
