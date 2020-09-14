import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

import drawerConfig from "../config/drawer";
import { colors } from "../utils/colors";
import Header from "./Header"
import Footer from "./Footer";
import LeftSidebar from "./LeftSidebar";
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
  return (
    <div className={classes.root} {...props}>
      <Header />
      {/* <LeftSidebar /> */}
      <main>
        <div className={classes.toolbar} />
        {children}
        <Footer />
      </main>
    </div >
  );
};

export default Template;

















































//
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';
//
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));
//
// export default function NestedList() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(true);
//
//   const handleClick = () => {
//     setOpen(!open);
//   };
//
//   return (
//       <List
//           component="nav"
//           aria-labelledby="nested-list-subheader"
//           subheader={
//             <ListSubheader component="div" id="nested-list-subheader">
//               Nested List Items
//             </ListSubheader>
//           }
//           className={classes.root}
//       >
//
//         <ListItem button>
//           <ListItemIcon>
//             <SendIcon />
//           </ListItemIcon>
//           <ListItemText primary="Sent mail" />
//         </ListItem>
//
//         <ListItem button>
//           <ListItemIcon>
//             <DraftsIcon />
//           </ListItemIcon>
//           <ListItemText primary="Drafts" />
//         </ListItem>
//
//         <ListItem button onClick={handleClick}>
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText primary="Inbox" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//
//         <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Starred" />
//             </ListItem>
//           </List>
//         </Collapse>
//       </List>
//   );
// }
