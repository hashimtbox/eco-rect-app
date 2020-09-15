import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';


function Footer() {
    return (
        <>
            <Grid container className="footer" id="contactsection">
                <Grid container style={{ marginTop: 50, marginBottom: 50 }}>
                    <Grid item lg={8} sm={12} className="footer-col1">
                        <Typography className="pseudo_border2" variant="h4" style={{ marginBottom: 30 }}>Get in Touch</Typography>
                        <Typography color="textSecondary" component="p" style={{ marginBottom: 30, color: "#fff", fontWeight: 300 }}>
                            Please fill out the form below to send us an email and we will get back to you as soon as possible.
                        </Typography>
                        <form>
                            <Grid container spacing={3}>
                                <Grid item lg={6} md={12} sm={12} xs={12}>
                                    <input className="form-class" type="text" id="fname" name="fname" placeholder="Name" />
                                </Grid>
                                <Grid item lg={6} md={12} sm={12} xs={12}>
                                    <input className="form-class" type="email" id="email" name="email" placeholder="Email" />
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <textarea className="form-class form-message" type="text" id="message" name="message" placeholder="Message" />
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12} className="footer-center">
                                    <input className="form-button-class form-button" type="button" value="SEND MESSAGE" />
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid className="footer-col1 footer-center" item lg={4} md={12} sm={12} xs={12} style={{ marginTop: 60 }}>
                        <Typography color="textSecondary" component="p" style={{ textAlign: "center", marginBottom: 30, color: "#fff", fontWeight: 300, fontSize: 20 }}>
                            Contact Info
                        </Typography>
                        <Typography className="footer-justify" color="textSecondary" component="p" style={{ display: "flex", alignItems: "center", marginBottom: 10, color: "#fff", fontWeight: 300 }}>
                            <LocationOnIcon style={{ fontSize: 17 }} /> <span style={{ paddingLeft: 10 }}>Address</span>
                        </Typography>
                        <Typography color="textSecondary" component="p" style={{ marginBottom: 30, color: "#fff", fontWeight: 100 }}>
                            Grubsters Comic, Headquarters in South Florida, USA
                        </Typography>
                        <Typography className="footer-justify" color="textSecondary" component="p" style={{ display: "flex", alignItems: "center", marginBottom: 10, color: "#fff", fontWeight: 300 }}>
                            <PhoneIcon style={{ fontSize: 17 }} /> <span style={{ paddingLeft: 10 }}>Phone</span>
                        </Typography>
                        <Typography color="textSecondary" component="p" style={{ marginBottom: 30, color: "#fff", fontWeight: 100 }}>
                            786-285-5881
                        </Typography>
                        <Typography className="footer-justify" color="textSecondary" component="p" style={{ display: "flex", alignItems: "center", marginBottom: 10, color: "#fff", fontWeight: 300 }}>
                            <EmailIcon style={{ fontSize: 17 }} /> <span style={{ paddingLeft: 10 }}>Email</span>
                        </Typography>
                        <Typography color="textSecondary" component="p" style={{ marginBottom: 30, color: "#fff", fontWeight: 100 }}>
                            GRUBSTERS@GRUBSTERSCOMIC.COM
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer
