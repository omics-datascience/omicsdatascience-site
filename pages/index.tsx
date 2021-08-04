import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import DuplicateIcon from "@material-ui/icons/Info";
import AccessIcon from "@material-ui/icons/VpnKey";
import HelpIcon from "@material-ui/icons/Help";
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
import { useState } from "react";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import GetAccess from "./pages/getaccess/getaccess";
import Support from "./pages/support/support";

const pages = [
  { name: "Home", page: <Home />, icon: <HomeIcon /> },
  { name: "About us", page: <About />, icon: <DuplicateIcon /> },
  { name: "Get access", page: <GetAccess />, icon: <AccessIcon /> },
  { name: "Support", page: <Support />, icon: <HelpIcon /> },
];
export default function IndexPage() {
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
        <title>Omics Data Science</title>
        <meta name="description" content="Omics Data Science" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar className={styles.appbar} position="sticky">
        <Toolbar className={styles.toolbar}>
          <IconButton
            edge="start"
            onClick={toggleFunction(!drawerOpen)}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Container>
            <div>
              <Typography component="h2" variant="h4" align="center">
                <Image
                  src="/underconstruction.svg"
                  alt="Under Construction"
                  width={70}
                  height={70}
                  layout="fixed"
                  title="Under Construction"
                />
              </Typography>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleFunction(false)}
        onOpen={toggleFunction(true)}
      >
        <div
          className={styles.list}
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
                divider={index == 1}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>

      <Container maxWidth={false} className={styles.main}>
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
            Creative Commons
          </Typography>
        </div>
      </footer>
    </div>
  );
}
