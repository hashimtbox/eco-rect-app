import React, { useRef } from "react";
import Cart from './Cart'
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
    const ref = useRef()
    const { cart } = useSelector(state => state.auth)
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
                    {/* <Typography variant='h6'>
            <Link className={classes.navLink}>Men</Link>
            <Link className={classes.navLink}>Women</Link>
            <Link className={classes.navLink}>About us</Link>
            <Link className={classes.navLink}>Contact us</Link>
          </Typography> */}
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
        </div>
    )
}

export default Header
