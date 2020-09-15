import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import about from "../assets/about.PNG";
import "../assets/styles/style.css";
function AboutGrubster() {
    return (
        <>
            <Grid container spacing={4} style={{ marginTop: 50 }} id="aboutsection">
                <Grid item md={6} sm={12} style={{ textAlign: "center" }}>
                    <img className="img-about" src={about} alt="about" />
                </Grid>
                <Grid className="about-text" item md={6} sm={12}>
                    <Typography className="pseudo_border1" variant="h4" style={{ marginBottom: 30 }}>About the Grubsters</Typography>
                    <Typography variant="body1" color="textSecondary" component="p" style={{ marginBottom: 20 }}>
                        The Grubsters are super hero foods who are defenders of the human body's immune system. The vegetable and fruit characters become involved in a battle againt the toxic diseased villains. The Grubsters represent the six produce family according to their colors.
                </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        Red Fruits & Vegetables are a great source to use when dealing with Heart & blood issues. Vegetables that are White are a great tool for strengthening immune sytems. These vegetables mainly fight the problems that arises when the immune system is compromised. Orange Fruits & Vegetables help with cancer prevention & many more. Veggies that are Green are excellent in detoxifying the body. Fruits that are Yellow like Bananas are awesome when it comes to dealing with bones, skin, hair and more. Purple vegetation can be used to help & promote longevity.
                </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default AboutGrubster
