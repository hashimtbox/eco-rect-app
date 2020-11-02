import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import "../assets/styles/style.css";
import timelinecabbage from "../assets/timeline-cabbage.jpg";
import timelinebroccolli from "../assets/timeline-broccolli.jpg";
import timelinebanana from "../assets/timeline-bannana.jpg";
import timelinetumeric from "../assets/timeline-tumeric.jpg";
import timelineonion from "../assets/timeline-onion.jpg";
import timelinedragonfruit from "../assets/timeline-dragonfruit.jpg";

function MeetGrubster() {

    const GrubsterImages = [
        {
            id: 1,
            title: 'PURPLE CABBAGE',
            subtitle: 'Wise/Peace Maker',
            weapon: 'TURNIP',
            image: timelinecabbage,
        },
        {
            id: 2,
            title: 'MYSTIC BROCCOLI',
            subtitle: 'Anti social/Thinker',
            weapon: 'ASPARAGUS',
            image: timelinebroccolli,
        },
        {
            id: 3,
            title: 'LADY BANANA',
            subtitle: 'Fighter',
            weapon: "BHUDDA'S HAND",
            image: timelinebanana,
        },
        {
            id: 4,
            title: 'TURMERIC ROOT',
            subtitle: 'Gentle and Strong',
            weapon: 'FRUITS',
            image: timelinetumeric,
        },
        {
            id: 5,
            title: 'ELDER ONION',
            subtitle: 'Stubborn',
            weapon: 'GARLIC BULBS',
            image: timelineonion,
        },
        {
            id: 6,
            title: 'DRAGON FRUIT',
            subtitle: 'Arrogant',
            weapon: 'LYCHEE',
            image: timelinedragonfruit,
        },
    ]
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto"
                }}
                id="characters"
            >
                <Typography className="pseudo_border" variant="h4" style={{ marginTop: 70, marginBottom: 30 }}>Meet The Grubster</Typography>
                <Typography variant="body1" color="textSecondary" component="p" style={{ maxWidth: 840, textAlign: "center", marginBottom: 30 }}>
                    Welcome to Grubsters comic network, our characters embrace and represent the fun side of healthy foods, we're focused on helping kids live healthy lives. That's why we're continually creating content to educated kids about healthy eating.
                </Typography>
            </div>

            <Grid container spacing={4}>
                {GrubsterImages.map(grubster => (
                    <Grid key={grubster.id} item xl={4} lg={4} md={4} sm={6} xs={12} style={{ textAlign: "center" }}>
                        <img src={grubster.image} alt={grubster.title} className="img-grubster" />
                        <p className="grubster-subtitle">{grubster.subtitle}</p>
                        <Typography variant="h6">{grubster.title}</Typography>
                        <p className="grubster-weapon">WEAPON:{grubster.weapon}</p>
                    </Grid>
                ))
                }
            </Grid >
        </>
    )
}

export default MeetGrubster
