import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import React from "react";
import styles from "./about.module.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import team from "./team.json";
export default function About() {
  return (
    <Container>
      {renderTeam(team)}
      <Card className={styles.card} raised={true}>
        <CardHeader title="Institutions"></CardHeader>
        {renderInstitutions()}
      </Card>
      <Card className={styles.card} raised={true}>
        <CardHeader title="Acknowledgement"></CardHeader>
        <CardContent>
          <Typography>
            This project is supported by fellowships and resources provided by
            Universidad Abierta Interamericas (UAI). The BioPlat2 desktop client
            is supported by the IBM Bluemix cloud platform.
          </Typography>
        </CardContent>
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
        <CardContent className={styles.cardContent}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <FaceIcon></FaceIcon>
            </ListItemAvatar>
            <ListItemText
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
                <TwitterIcon />
              </a>
            </IconButton>
          ) : null}
          {member.linkedin != "" ? (
            <IconButton>
              <a href={member.linkedin} target="blank">
                <LinkedInIcon />
              </a>
            </IconButton>
          ) : null}
        </CardActions>
      </React.Fragment>
    );
  });
  return (
    <Card className={styles.card} raised={true}>
      <CardHeader title="The Team"></CardHeader>
      <CardContent>
        <List>{members}</List>
      </CardContent>
    </Card>
  );
}

function renderInstitutions() {
  return (
    <CardContent>
      <Typography variant="h6" color="textPrimary">
        Centro de Altos Estudios en Tecnología Informática (CAETI)
      </Typography>
      <Typography
        variant="subtitle1"
        color="textPrimary"
        paragraph={true}
        className={styles.customParagraph}
      >
        Facultad de Tecnología Informática - Universidad Abierta Interamericana
        (UAI)
      </Typography>
      <Typography variant="h6" color="textPrimary">
        Centro de Investigaciones Inmunológicas Básicas y Aplicadas (CINIBA)
      </Typography>
      <Typography
        variant="subtitle1"
        color="textPrimary"
        paragraph={true}
        className={styles.customParagraph}
      >
        Facultad de Ciencias Médicas - Universidad Nacional de La Plata (UNLP)
      </Typography>
    </CardContent>
  );
}
