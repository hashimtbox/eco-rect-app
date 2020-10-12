import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import Template from "../components/Template";
import EventListView from "../components/EventListView";
import comic from "../assets/comic1.png";
import comic2 from "../assets/comic2.jpg";
import jeans from "../assets/jeans.jpg";
import Header from "./Header";
import Footer from "./Footer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import drawerConfig from "../config/drawer";
import { colors } from "../utils/colors";
import SidebarFilters from "./SidebarFilters";
import { Grid } from "@material-ui/core";
import ProductBreadcrumbs from './ProductBreadcrumbs';
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

const products = [
    {
        id: 6,
        title: 'Macbook Pro',
        price: 1000,
        description: '14 inch macbook pro for latest and greatest use by smart people of America',
        image: comic,
    },
    {
        id: 7,
        title: 'Logo Bandana',
        price: 150,
        description: 'Awesome leather jacket for men to wear in summer or winter whatever',
        image: comic2,
    },
    {
        id: 8,
        title: 'Logo Bandana',
        price: 350,
        description: 'Beautiful Logo Bandana for women to wear in summer or winter whatever',
        image: comic
    },
    {
        id: 9,
        title: 'Logo Bandana',
        price: 350,
        description: 'Beautiful Logo Bandana for women to wear in summer or winter whatever',
        image: comic
    },
    {
        id: 10,
        title: 'Logo Bandana',
        price: 350,
        description: 'Beautiful Logo Bandana for women to wear in summer or winter whatever',
        image: comic
    },
    {
        id: 11,
        title: 'Logo Bandana',
        price: 350,
        description: 'Beautiful Logo Bandana for women to wear in summer or winter whatever',
        image: comic
    },
]
const Products = () => {
    // const { category } = useParams()
    // const classes = useStyles();

    // //const {productsByCategory} = useSelector(state => state.products)

    // useEffect(() => {
    //     // dispatch(fetchProductsByCategory())
    // }, [])

    return (

        // <div className={classes.root} >
        //     <Header />
        //     <div style={{ padding: 24 }}>
        //         <Typography variant="h5">{category}</Typography>
        //         <div style={{ height: 20 }} />
        //         <EventListView products={products} />
        //     </div>
        // </div >
        // <h1>Products Page for {category}</h1>

        <Template>
            <Grid container style={{ height: "100%" }} style={{ padding: 35 }}>
                <ProductBreadcrumbs />

                <Grid container spacing={4}>
                    <Grid item xl={3} lg={3} md={12} sm={12} xs={12} >
                        <SidebarFilters />
                    </Grid>
                    <Grid item xl={9} lg={9} md={12} sm={12} xs={12}>
                        <EventListView products={products} />
                    </Grid>

                </Grid>
            </Grid >
            <div style={{ height: 80 }}></div>
        </Template >
    )
}

export default Products