import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import DuplicateIcon from "@material-ui/icons/Info";
import HelpIcon from "@material-ui/icons/Help";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Box,
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
import References from "./pages/support/references";

const pages = [
  { name: "Home", page: <Home />, icon: <HomeIcon /> },
  { name: "About\u00A0us", page: <About />, icon: <DuplicateIcon /> },
  { name: "References", page: <References />, icon: <LibraryBooksIcon /> },
  { name: "Contact\u00A0us", page: <GetAccess />, icon: <HelpIcon /> },

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
        <link rel="icon" href="/logo2.svg" />
      </Head>

      <AppBar className={styles.appbar} position="sticky">
        <Toolbar className={styles.toolbar} variant="dense">
          <IconButton
            className={styles.menuHamburguer}
            edge="start"
            onClick={toggleFunction(!drawerOpen)}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Container className={styles.logoContainer}>
            <div>
              <Image
                src="/logo.svg"
                alt="Omics DataScience"
                width={120}
                height={100}
                title="Omics DataScience"
                quality={100} priority={true}
              />
            </div>
          </Container>
          <Box className={styles.toolbarElementsContainer}>
            {pages.map((item, index) => (
              <ListItem
                button
                key={item.name}
                onClick={() => setSelectedItem(index)}
                className={styles.toolbarElement}
              >
                <ListItemIcon className={styles.iconColor}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </Box>
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

      <Container maxWidth={false} className={styles.mainContainer}>
        {pages[selectedItem].page}
      </Container>

      <footer className={styles.footer}>
        <Grid container alignItems="center" justify="center">
          <div>
            <span className={styles.logo}>
              <Image src="/cc.svg" alt="Vercel Logo" width={20} height={20}   priority={true}/>
            </span>
          </div>
          <div>
            <Typography gutterBottom className={styles.footerText}>
              Creative Commons | OmicsDataScience {new Date().getFullYear()}
            </Typography>
          </div>
        </Grid>
      </footer>
    </div>
  );
}
