import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import drawerConfig from "../config/drawer";
import { colors } from "../utils/colors";
import Header from "./Header"
import Footer from "./Footer";
import FooterMerchandise from "./FooterMerchandise";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerConfig.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerConfig.drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar,
  drawerContent: {
    marginTop: 60
  },
  navLink: {
    color: colors.dark,
    marginLeft: 10,
    marginRight: 10,
    cursor: 'pointer'
  }
}));

const Template = ({ selected, children, ...props }) => {
  const classes = useStyles();
  const routepath = window.location.pathname;
  return (
    <div className={classes.root} {...props}>
      <Header />
      <main style={{ width: "100%" }}>
        <div className={classes.toolbar} />
        {children}
        {routepath == "/" ? <Footer /> : <FooterMerchandise />}
      </main>
    </div >
  );
};

export default Template;