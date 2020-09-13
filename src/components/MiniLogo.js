import React from 'react';
import minilogo from "../assets/minilogo.png";
import { Grid } from "@material-ui/core";
import "../assets/styles/style.css";
function MiniLogo() {
    return (
        <>
            <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
            >
                <div className="mini-logo">
                    <img src={minilogo} alt="minilogo" />
                </div>
            </Grid>
        </>
    )
}

export default MiniLogo
