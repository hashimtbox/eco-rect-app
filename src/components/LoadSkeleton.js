import React from "react";
import Skeleton from '@material-ui/lab/Skeleton';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { Grid } from "@material-ui/core";


const LoadSkeleton = () => {

  return (

    <Grid container spacing={4}>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12} id="trendingsection">
        <Card>
          <CardMedia
            style={{ height: 150, minWidth: 200, background: "#e9e9e9" }}
          />

          <CardContent>
            <div style={{ display: "flex", height: 60, flexGrow: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {<Skeleton width="100%" />}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {<Skeleton width="90%" />}
                </Typography>

                <div style={{ marginTop: 10 }}>
                  <Typography variant='body2'>
                    {<Skeleton width="40%" />}
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>
          <CardActions>
            <div style={{ flexGrow: 1 }} />
            {
              <Skeleton width="30%" style={{ height: 30 }} />
            }
          </CardActions>
        </Card >
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12} id="trendingsection">
        <Card>
          <CardMedia
            style={{ height: 150, minWidth: 200, background: "#e9e9e9" }}
          />

          <CardContent>
            <div style={{ display: "flex", height: 60, flexGrow: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {<Skeleton width="100%" />}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {<Skeleton width="90%" />}
                </Typography>

                <div style={{ marginTop: 10 }}>
                  <Typography variant='body2'>
                    {<Skeleton width="40%" />}
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>
          <CardActions>
            <div style={{ flexGrow: 1 }} />
            {
              <Skeleton width="30%" style={{ height: 30 }} />
            }
          </CardActions>
        </Card >
      </Grid>
      <Grid item xl={4} lg={4} md={4} sm={6} xs={12} id="trendingsection">
        <Card>
          <CardMedia
            style={{ height: 150, minWidth: 200, background: "#e9e9e9" }}
          />

          <CardContent>
            <div style={{ display: "flex", height: 60, flexGrow: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {<Skeleton width="100%" />}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {<Skeleton width="90%" />}
                </Typography>

                <div style={{ marginTop: 10 }}>
                  <Typography variant='body2'>
                    {<Skeleton width="40%" />}
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>
          <CardActions>
            <div style={{ flexGrow: 1 }} />
            {
              <Skeleton width="30%" style={{ height: 30 }} />
            }
          </CardActions>
        </Card >
      </Grid>
    </Grid>

  );
};

export default LoadSkeleton;
