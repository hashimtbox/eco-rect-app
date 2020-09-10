import React, { createRef, useRef } from "react";
import Cart from './Cart'
import {
  AppBar,
  Avatar,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  Link,
  Badge,
  Box,
  useTheme,
  Collapse
} from "@material-ui/core";
import { display } from '@material-ui/system';
import { Add, AllInclusiveOutlined, ShoppingCart, SettingsOutlined, EventOutlined } from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import TopMenu from "./TopMenu";
import drawerConfig from "../config/drawer";
import { colors } from "../utils/colors";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StarBorder from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Popover from '@material-ui/core/Popover';

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
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const theme = useTheme()
  const ref = useRef()
  const { user, cart } = useSelector(state => state.auth)



  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? 'simple-popover' : undefined;

  return (
    <div className={classes.root} {...props}>
      <CssBaseline />
      <TopMenu ref={ref} />
      <AppBar
        className={classes.appBar}
        variant="outlined"
        position={"fixed"}
      >
        <Toolbar style={{ backgroundColor: 'white' }}>
          <AllInclusiveOutlined fontSize={"large"} />
          <Typography style={{ marginLeft: 20 }} variant={"h6"}>
            Amazon
            </Typography>
          <span style={{ flexGrow: 1 }} />
          <Typography variant='h6'>
            <Link className={classes.navLink}>Men</Link>
            <Link className={classes.navLink}>Women</Link>
            <Link className={classes.navLink}>About us</Link>
            <Link className={classes.navLink}>Contact us</Link>
          </Typography>
          {/*<IconButton style={{marginRight: 10, marginLeft: 15}} onClick={event => ref.current.open(event)}>*/}
          <IconButton style={{ marginRight: 10, marginLeft: 15 }} onClick={handlePopoverClick}>

            <Badge badgeContent={cart.length === 0 ? '0' : cart.length} color="secondary" >
              <ShoppingCart display="block"></ShoppingCart>
            </Badge>
            {/*<Avatar className={classes.avatar} />*/}
          </IconButton>
          <Popover
            id={id}
            open={openPopover}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            {cart.length === 0 ?
              <Box m={2} width={350} height={80} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant={"h6"}>Your Cart is Empty</Typography>
              </Box>
              :

              <Cart />

            }
          </Popover>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List className={classes.drawerContent}>
          {
            drawerConfig.items.map(item => (
              <div>
                <ListItem
                  key={item.title}
                  onClick={() => item.subItems ? setOpen(!open) : history.push(item.route)}
                  button
                  style={{ display: "flex", justifyContent: "left", height: 40 }}
                >
                  {
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <item.icon
                        fontSize="medium"
                        style={{
                          color:
                            item.title === selected
                              ? colors.blue
                              : theme.palette.grey.A700,
                          marginRight: 20
                        }}
                      />
                      <Typography >{item.title}</Typography>
                    </div>

                  }
                  {item.subItems ? open ? <ExpandLess /> : <ExpandMore /> : ""}

                </ListItem>
                {item.subItems ?
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {
                        item.subItems.map(subItem => (
                          <ListItem
                            key={subItem.title}
                            onClick={() => history.push(subItem.route)}
                            button
                            style={{ display: "flex", justifyContent: "left", height: 40 }}
                          >

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                              <item.icon
                                fontSize="medium"
                                style={{
                                  color:
                                    subItem.title === selected
                                      ? colors.blue
                                      : theme.palette.grey.A700,
                                  marginRight: 20,
                                  marginLeft: 30
                                }}
                              />
                              <Typography >{subItem.title}</Typography>
                            </div>
                          </ListItem>
                        ))
                      }
                    </List>
                  </Collapse>
                  :
                  ""
                }
              </div>
            ))
          }

        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
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
