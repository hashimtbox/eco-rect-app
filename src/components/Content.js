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
import MenuIcon from '@material-ui/icons/Menu';
import Header from "./Header"
import Footer from "./Footer";
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

const Content = ({ selected, children, ...props }) => {
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
    const [mobileOpen, setMobileOpen] = React.useState(true);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
        console.log(mobileOpen);
    }

    return (
        <div>
            <main>
                <div className={classes.toolbar} />
                {children}
                <Footer />
            </main>
        </div>
    )
}

export default Content
