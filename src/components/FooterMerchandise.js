import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';


function FooterMerchandise() {
    return (
        <>
            <Grid container className="footer" id="contactsection">
                <Grid container style={{ paddingLeft: 50, paddingRight: 50, marginTop: 50, marginBottom: 50 }}>
                    <Grid item xl={3} lg={3} md={12} sm={12} className="footer-column">
                        <Typography variant="h6" style={{ color: "white", marginBottom: 30 }}>Products</Typography>
                    </Grid>
                    <Grid item xl={3} lg={3} md={12} sm={12} className="footer-column">
                        <Typography variant="h6" style={{ color: "white", marginBottom: 30 }}>Shop</Typography>
                    </Grid>
                    <Grid item xl={3} lg={3} md={12} sm={12} className="footer-column">
                        <Typography variant="h6" style={{ color: "white", marginBottom: 30 }}>Service</Typography>
                    </Grid>
                    <Grid item xl={3} lg={3} md={12} sm={12} className="footer-column">
                        <Typography variant="h6" style={{ color: "white", marginBottom: 30 }}>Contact</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default FooterMerchandise
