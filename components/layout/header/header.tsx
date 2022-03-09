import React from "react";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router'
import styles from "./header.module.css";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import HelpIcon from "@material-ui/icons/Help";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MenuIcon from "@material-ui/icons/Menu";
import {
    IconButton,
    AppBar,
    Toolbar,
    Container,
    Box,
} from "@material-ui/core";
import {
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";

export const Header = () => {
    const pages = [
        { name: "Home", icon: <HomeIcon />, route: "/" },
        { name: "About\u00A0us", icon: <InfoIcon />, route: "/about" },
        { name: "References", icon: <LibraryBooksIcon />, route: "/references" },
        { name: "Contact\u00A0us", icon: <HelpIcon />, route: "/contact-us" },
    ];

    const [drawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();
    
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
        <>
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
                    {pages.map((item) => (
                        <ListItem button key={item.name} className={styles.toolbarElement} onClick={() => 
                            {
                                router.push(item.route);
                            }
                        }>
                            <ListItemIcon className={styles.iconColor}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))}
                </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}
