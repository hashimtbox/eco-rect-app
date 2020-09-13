import React from "react";
import {
    Drawer,
    List,
    ListItem,
    Typography,
    Box,
    useTheme,
    Collapse
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useHistory } from "react-router";
import drawerConfig from "../config/drawer";
import { colors } from "../utils/colors";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
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
const LeftSidebar = ({ selected, children, ...props }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const theme = useTheme()
    const [mobileOpen, setMobileOpen] = React.useState(true);
    // function handleDrawerToggle() {
    //     setMobileOpen(!mobileOpen);
    //     console.log(mobileOpen);
    // }
    return (
        <div>
            <Box display={{ xs: mobileOpen ? "none" : "block", lg: "block" }} >
                <Drawer className={classes.drawer} variant="permanent" classes={{
                    paper: classes.drawerPaper
                }}
                >
                    <List className={classes.drawerContent}>
                        {
                            drawerConfig.items.map(item => (
                                <div>
                                    <ListItem
                                        key={item.title}
                                        onClick={() =>
                                            item.subItems ? setOpen(!open) : history.push(item.route)}
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
                                                            onClick={() =>
                                                                history.push(subItem.route)}
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
            </Box>
        </div>
    )
}
export default LeftSidebar