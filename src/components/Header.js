import React, { useRef } from "react";
import Cart from './Cart';
import { useHistory } from "react-router";
import { AppBar, CssBaseline, Toolbar, Typography, Badge, Box, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useSelector } from "react-redux";
import TopMenu from "./TopMenu";
import drawerConfig from "../config/drawer";
import { colors } from "../utils/colors";
import Popover from '@material-ui/core/Popover';
import MenuIcon from '@material-ui/icons/Menu';
import { HashLink as Link } from 'react-router-hash-link';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import '../assets/styles/style.css';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ViewListIcon from '@material-ui/icons/ViewList';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import { NavLink } from 'react-router-dom';
import { signin, signout } from "../store/auth";
import { useDispatch } from "react-redux";
import { API_HOST } from "../config/api";
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
      cursor: 'pointer',
      textDecoration: "none"
   },
   iconmargin: {
      marginRight: 20
   }
}));
const Header = ({ selected, children, ...props }) => {
   const classes = useStyles();
   const ref = useRef();
   const { cart } = useSelector(state => state.auth)
   const { categories } = useSelector(state => state.products)
   const [anchorEl, setAnchorEl] = React.useState(null);
   const handlePopoverClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handlePopoverClose = () => {
      setAnchorEl(null);
   };
   const openPopover = Boolean(anchorEl);
   const id = openPopover ? 'simple-popover' : undefined;
   // const [anchorEll, setAnchorEll] = React.useState(null);
   // const handleClickListItem = (event) => {
   //     setAnchorEll(event.currentTarget);
   // };
   // const handleMenuClose = () => {
   //     setAnchorEll(null);
   // };
   const [open, setOpen] = React.useState(false);
   const history = useHistory();
   const [state, setState] = React.useState({ left: false });
   const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
         return;
      }
      setState({ ...state, [anchor]: open });
   };
   const [anchorElll, setAnchorElll] = React.useState(null);
   const handleClick = (event) => {
      setAnchorElll(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorElll(null);
   };
   const list = (anchor) => (
      <div
         role="presentation"
         onClick={toggleDrawer(anchor, false)}
         onKeyDown={toggleDrawer(anchor, false)}
         className="drawer-small-screen"
      >
         <Typography variant='h6' >
            <List>
               <Link smooth to="/" className={classes.navLink}>
                  Home
      </Link>
            </List>
            <List>
               <Link smooth to="/#characters" className={classes.navLink}>
                  Characters
      </Link>
            </List>
            <List>
               <Link smooth to="/#about" className={classes.navLink}>
                  About
      </Link>
            </List>
            {/* <List>
      <Link smooth to="/#comix" className={classes.navLink}>
      Comic
      </Link>
   </List> */}
            <List>
               <Link className={classes.navLink} to="http://localhost/dashboard/" >
                  Blog
      </Link>
            </List>

            <List>
               <Link className={classes.navLink}
                  onClick={() =>
                     history.push({
                        pathname: `/products`,
                     })}
               >Products
      </Link>
            </List>
            <List>
               <Link smooth to="/#trending" className={classes.navLink}>
                  Trending Products
      </Link>
            </List>
            <List>
               <Link smooth to="/#contact" className={classes.navLink}>
                  Contact
      </Link>
            </List>
         </Typography>
      </div>
   );
   return (
      <div>
         <CssBaseline />
         <TopMenu ref={ref} />
         <AppBar className={classes.appBar} variant="outlined" position={"fixed"}>
            <Toolbar style={{ backgroundColor: 'white' }}>
               {['left',].map((anchor) => (
                  <React.Fragment key={anchor}>
                     <Box display={{ xs: "block", lg: "none" }}>
                        <IconButton onClick={toggleDrawer(anchor, true)} color="inherit" aria-label="Open drawer" edge="start">
                           <MenuIcon />
                        </IconButton>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                           {list(anchor)}
                        </Drawer>
                     </Box>
                  </React.Fragment>
               ))}
               <Link style={{ color: "black", textDecoration: "none" }} smooth to="/">
                  <Typography variant={"h6"}>GrubstersComics</Typography>
               </Link>
               <span style={{ flexGrow: 1 }} />
               <div className="displayLinks">
                  <Typography variant='h6' >
                     <Link smooth to="/" className={classes.navLink}>
                        Home
            </Link>
                     <Link smooth to="/#characters" className={classes.navLink}>
                        Characters
            </Link>
                     <Link smooth to="/#about" className={classes.navLink}>
                        About
            </Link>
                     {/* <Link smooth to="/#comix" className={classes.navLink}>
            Comic
            </Link> */}
                     {/* <a target="_blank" href="/dashboard/" className={classes.navLink}>
            Blog
            </a> */}
                     <a target="_blank" className={classes.navLink} href="http://localhost/grubster_wordpress">Blog</a>

                     <Link className={classes.navLink}
                        onClick={() =>
                           history.push({
                              pathname: `/products`,
                           })}
                     >Products
            </Link>
                     <Link smooth to="/#trending" className={classes.navLink}>
                        Trending Products
            </Link>
                     <Link smooth to="/#contact" className={classes.navLink}>
                        Contact
            </Link>
                  </Typography>
               </div>
               {/* <Button onClick = { ()=> history.push({pathname: `/signin`})}style={{marginLeft:30}} variant="contained" color="secondary" disableElevation>
      Sign In
      </Button>   */}
               <div class="dropdown">
                  <button className="dropbtn" >
                     <Typography variant='h6' className="username">John Doe</Typography>
                  </button>
                  <ArrowDropDownIcon style={{ color: "#448aff", marginRight: 10, marginTop: -5, marginLeft: -5 }} />
                  <div className="dropdown-content">

                     <Link to="/profile" variant="body2" style={{ color: "#000", textDecoration: "none" }} >
                        <MenuItem onClick={handleClose}>
                           <AccountCircleIcon className={classes.iconmargin} />
               Profile
            </MenuItem>
                     </Link>
                     <Link to="/changepassword" variant="body2" style={{ color: "#000", textDecoration: "none" }} >
                        <MenuItem onClick={handleClose}>
                           <SettingsIcon className={classes.iconmargin} />
               Change Password
            </MenuItem>
                     </Link>
                     <Link to="#" variant="body2" style={{ color: "#000", textDecoration: "none" }} >
                        <MenuItem onClick={() => {
                           handleClose();
                           // dispatch(signout());
                           history.push({ pathname: `/signin`, })
                        }}>
                           <ExitToAppIcon className={classes.iconmargin} />
               Logout
            </MenuItem>
                     </Link>

                  </div>
               </div>

               <Avatar
                  alt='...'
                  // src={API_HOST + "/uploads/admin_profile_pic/"+ admin?.profile_pic}
                  src=""
                  style={{ width: 29, height: 29 }}
                  onClick={handleClick}
               />
               <IconButton style={{ marginRight: 10, marginLeft: 10 }} onClick={handlePopoverClick}>
                  <Badge badgeContent={cart.length === 0 ? '0' : cart.length} color="secondary" >
                     <ShoppingCart display="block"></ShoppingCart>
                  </Badge>
               </IconButton>
               <Popover id={id} open={openPopover} anchorEl={anchorEl} onClose={handlePopoverClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
                  {cart.length === 0 ?
                     <Box m={2} width={318} height={80} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Typography variant={"h6"}>Your Cart is Empty</Typography>
                     </Box>
                     :
                     <Cart />
                  }
               </Popover>
            </Toolbar>
         </AppBar>
      </div >
   )
}
export default Header