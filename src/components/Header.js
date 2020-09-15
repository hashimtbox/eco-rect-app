import { Link, animateScroll as scroll } from "react-scroll";
import React, { useRef } from "react";
import Cart from './Cart';
import { useHistory } from "react-router";
import "../assets/styles/style.css";
import {
    AppBar,
    CssBaseline,
    Toolbar,
    Typography,
    Badge,
    Box,
    IconButton
} from "@material-ui/core";

import { AllInclusiveOutlined, ShoppingCart } from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useSelector } from "react-redux";
import TopMenu from "./TopMenu";
import drawerConfig from "../config/drawer";
import { colors } from "../utils/colors";

import Popover from '@material-ui/core/Popover';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


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
    const [mobileOpen, setMobileOpen] = React.useState(true);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
        console.log(mobileOpen);
    }

    const [anchorEll, setAnchorEll] = React.useState(null);

    const handleClickListItem = (event) => {
        setAnchorEll(event.currentTarget);
    };


    const handleMenuClose = () => {
        setAnchorEll(null);
    };
    const options = [
        'Apparel',
        'Comics',
        'Tshirts',
        'Grubster Logos',
    ];

    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    return (
        <div>
            <CssBaseline />
            <TopMenu ref={ref} />
            <AppBar
                className={classes.appBar}
                variant="outlined"
                position={"fixed"}
            >
                <Toolbar style={{ backgroundColor: 'white' }}>
                    <Box display={{ xs: "block", lg: "none" }}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <AllInclusiveOutlined fontSize={"large"} />
                    <Typography style={{ marginLeft: 20 }} variant={"h6"}>
                        Amazon
            </Typography>
                    <span style={{ flexGrow: 1 }} />
                    <div className="displayLinks">
                        <Typography variant='h6' >
                            <Link to="homesection" activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} className={classes.navLink}>
                                Home
                            </Link>
                            <Link to="characterssection" activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} className={classes.navLink}>
                                Characters
                            </Link>
                            <Link to="aboutsection" activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} className={classes.navLink}>
                                About
                            </Link>
                            <Link to="comixsection" activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} className={classes.navLink}>
                                Comic
                            </Link>
                            <Link className={classes.navLink}
                                onClick={handleClickListItem}
                            >Products
                            </Link>
                            <Menu
                                id="lock-menu"
                                anchorEl={anchorEll}
                                keepMounted
                                open={Boolean(anchorEll)}
                                onClose={handleMenuClose}
                                style={{ width: 400 }}
                            >
                                {categories && categories.length && categories.map((option, index) => (
                                    <MenuItem
                                        key={option.id}
                                        onClick={() => history.push({
                                            pathname: `/products/${option.name}`,
                                        })}
                                    >
                                        {option.name}
                                    </MenuItem>
                                ))}
                            </Menu>
                            <Link to="trendingsection" activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} className={classes.navLink}>
                                Trending Products
                            </Link>

                            <Link to="contactsection" activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} className={classes.navLink}>
                                Contact
                            </Link>
                        </Typography>
                    </div>
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
        </div >
    )
}

export default Header
