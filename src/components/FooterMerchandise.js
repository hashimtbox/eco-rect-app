import React from "react";
import { Grid, Typography } from "@material-ui/core";
import minilogo from "../assets/minilogo.png";
import "../assets/styles/style.css";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function FooterMerchandise() {
  return (
    <>
      <Grid container className="footer" id="contact">
        <Grid
          container
          style={{ marginTop: 50, paddingLeft: 50, paddingRight: 50 }}
        >
          {/* <Grid
            item
            xl={3}
            lg={3}
            md={6}
            sm={12}
            xs={12}
            className="footer-column"
          >
            <Typography variant="h6" className="footer-column-heading">
              Products
            </Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link className="footer-column-link" to={`/products/`}>
                <Typography variant="p" className="footer-column-list">
                  All
                </Typography>
              </Link>
            </div>
          </Grid> */}

          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className="footer-column"
          >
            <Typography variant="h6" className="footer-column-heading">
              Shop
            </Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link
                className="footer-column-link"
                smooth
                to={window.location.pathname === "/" ? "/#home" : "/"}
              >
                <Typography variant="p" className="footer-column-list">
                  Home
                </Typography>
              </Link>
              <Link className="footer-column-link" smooth to="/#characters">
                <Typography variant="p" className="footer-column-list">
                  Characters
                </Typography>
              </Link>
              <Link className="footer-column-link" smooth to="/#about">
                <Typography variant="p" className="footer-column-list">
                  About
                </Typography>
              </Link>
              <a
                className="footer-column-link"
                href="https://blog.grubsterscomicx.com/"
              >
                <Typography variant="p" className="footer-column-list">
                  Blog
                </Typography>
              </a>
              <a
                className="footer-column-link"
                href="https://www.grubsterscomicx.com/products"
              >
                <Typography variant="p" className="footer-column-list">
                  Products
                </Typography>
              </a>
            </div>
          </Grid>

          {/* <Grid
            item
            xl={3}
            lg={3}
            md={6}
            sm={12}
            xs={12}
            className="footer-column"
          >
            <Typography variant="h6" className="footer-column-heading">
              Service
            </Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link className="footer-column-link" to={`#`}>
                <Typography variant="p" className="footer-column-list">
                  Shipping costs & shipping themes
                </Typography>
              </Link>
              <Link className="footer-column-link" to={`#`}>
                <Typography variant="p" className="footer-column-list">
                  Returns
                </Typography>
              </Link>
              <Link className="footer-column-link" to={`#`}>
                <Typography variant="p" className="footer-column-list">
                  Contact
                </Typography>
              </Link>
              <Link className="footer-column-link" to={`#`}>
                <Typography variant="p" className="footer-column-list">
                  Help
                </Typography>
              </Link>
              <Link className="footer-column-link" to={`#`}>
                                <Typography variant="p" className="footer-column-list">United States</Typography>
                            </Link>
            </div>
          </Grid> */}

          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className="footer-column"
          >
            <Typography variant="h6" className="footer-column-heading">
              Contact
            </Typography>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <a
                className="footer-column-link"
                href="mailto:info@grubsterscomics.com"
              >
                <Typography variant="p" className="footer-column-list">
                  info@grubsterscomics.com
                </Typography>
              </a>
              <a className="footer-column-link" href="tel:+1 305 967 3720">
                <Typography variant="p" className="footer-column-list">
                  +1 305 967 3720
                </Typography>
              </a>
              <Link className="footer-column-link" to={`#`}>
                <Typography variant="p" className="footer-column-list">
                  Grubsters Comics P. O. BOX 817851 <br />
                  HOLLYWOOD FL, 33021
                </Typography>
              </Link>
            </div>
          </Grid>

          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className="footer-column"
          >
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              variant="h6"
              className="footer-column-heading"
            >
              Grubsters Comics
            </Typography>
            <a href="https://www.grubsterscomicx.com/">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={minilogo}
                  alt="minilogo"
                  style={{ objectFit: "scale-down" }}
                />
              </div>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default FooterMerchandise;
