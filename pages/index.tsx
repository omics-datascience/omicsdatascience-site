import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { useState } from "react";
import About from "./pages/about/about";
import Multiomics from "./pages/multiomics/multiomics";
import Home from "./pages/home/home";
import GetAccess from "./pages/getaccess/getaccess";
import Support from "./pages/support/support";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
    marginTop: 64,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "#424242",
    color: "#fff",
  },
  mainContainer: {
    minHeight: "1170px",
    backgroundColor: "#fffff",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const pages = [
  { name: "Bioplat", page: <Home /> },
  { name: "About us", page: <About /> },
  { name: "Multiomics", page: <Multiomics /> },
  { name: "Get access", page: <GetAccess /> },
  { name: "Support", page: <Support /> },
];
export default function IndexPage() {
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState(0);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleFunction =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };
  return (
    <div className={styles.container}>
      <Head>
        <title>Bioplat</title>
        <meta name="description" content="Bioplat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar className={styles.appbar} position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            onClick={toggleFunction(!drawerOpen)}
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleFunction(false)}
        onOpen={toggleFunction(true)}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleFunction(false)}
          onKeyDown={toggleFunction(false)}
        >
          <List>
            {pages.map((item, index) => (
              <ListItem
                button
                key={item.name}
                onClick={() => setSelectedItem(index)}
                divider={index == 2}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>

      <Container className={classes.mainContainer}>
        {pages[selectedItem].page}
      </Container>

      <footer className={styles.footer}>
        <div>
          <span className={styles.logo}>
            <Image src="/cc.svg" alt="Vercel Logo" width={50} height={50} />
          </span>
        </div>
        <div>
          <Typography gutterBottom variant="h5" component="h3">
            Footer placeholder
          </Typography>
        </div>
      </footer>
    </div>
  );
}
