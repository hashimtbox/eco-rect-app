import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid } from "@material-ui/core";
import macbook from "../assets/macbook.jpg";
import "../assets/styles/style.css";
import NoItem from "./NoItem";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Pagination from "@material-ui/lab/Pagination";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Template from "./Template";

export default function OrderDetail() {
  const history = useHistory();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const orderitemDetails = [
    {
      id: 1,
      item_image:
        "https://image.spreadshirtmedia.com/image-server/v1/products/T1007A204PA3623PT17X36Y28D1034069736FS1873/views/1,width=500,height=500,appearanceId=204,backgroundColor=121212/the-m-unisex-contrast-hoodie.jpg",
      item_name: "Tshirt - Men",
      item_size: "S",
      item_color: "red",
      item_quantity: 7,
      item_total: 60,
    },
    {
      id: 2,
      item_image:
        "https://image.spreadshirtmedia.com/image-server/v1/products/T1007A204PA3623PT17X36Y28D1034069736FS1873/views/1,width=500,height=500,appearanceId=204,backgroundColor=121212/the-m-unisex-contrast-hoodie.jpg",
      item_name: "Polo Pant - Men",
      item_size: "L",
      item_color: "blue",
      item_quantity: 9,
      item_total: 70,
    },
  ];

  const getNoOfPages = () => {
    try {
      return Math.ceil(orderitemDetails.length / itemsPerPage);
    } catch (e) {
      return 0;
    }
  };
  const itemsPerPage = 4;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(getNoOfPages());

  const handleChange = (event, value) => {
    setPage(value);
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Template>
      <div class="container" style={{ paddingBottom: 35 }}>
        <div className="clearfix" style={{ marginTop: 50, marginBottom: 50 }}>
          <div className="float-left">
            <Typography
              className="pseudo_border1"
              variant="h4"
              style={{
                fontSize: 25,
                marginBottom: 30,
                fontWeight: 500,
              }}
            >
              Order Details
            </Typography>
          </div>
          <div className="float-right">
            <button
              onClick={() => history.push({ pathname: `/profile` })}
              className="btn btn-blue"
              style={{ background: "#448aff" }}
            >
              <Typography
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  display: "inline-block",
                  lineHeight: 2,
                  color: "white",
                }}
                variant="h6"
              >
                {" "}
                Back to Orders
              </Typography>
            </button>
          </div>
        </div>

        {orderitemDetails
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((item) => {
            return (
              <div>
                <div className="row" key={item.id}>
                  <div class="col-lg-6">
                    <div class="row">
                      <div class="col-5">
                        <AutoPlaySwipeableViews
                          index={activeStep}
                          onChangeIndex={handleStepChange}
                          enableMouseEvents
                        >
                          {tutorialSteps.map((step, index) => (
                            <div key={step.label}>
                              {Math.abs(activeStep - index) <= 2 ? (
                                <img
                                  style={{ height: 150, width: 150 }}
                                  src={step.imgPath}
                                  alt={step.label}
                                />
                              ) : null}
                            </div>
                          ))}
                        </AutoPlaySwipeableViews>
                      </div>
                      <div class="col-7">
                        <Typography
                          style={{
                            fontSize: 17,
                            marginBottom: 20,
                            color: "#448aff",
                          }}
                          variant={"h6"}
                        >
                          <span style={{ fontWeight: 500, color: "black " }}>
                            {item.item_name}
                          </span>
                        </Typography>

                        <Typography
                          style={{
                            fontSize: 17,
                            marginBottom: 20,
                            color: "#448aff",
                          }}
                          variant={"h6"}
                        >
                          Size:{"  "}
                          <span style={{ fontWeight: 400, color: "black " }}>
                            {item.item_size}
                          </span>
                        </Typography>
                        <Typography
                          style={{
                            fontSize: 17,
                            marginBottom: 20,
                            color: "#448aff",
                          }}
                          variant={"h6"}
                        >
                          Color :{"  "}
                          <span style={{ fontWeight: 400, color: "black " }}>
                            {" "}
                            {item.item_color}
                          </span>
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 mt-4">
                    <div class="row">
                      <div class="col-6  d-flex flex-column justify-content-center align-items-center">
                        <Typography
                          style={{
                            fontSize: 17,
                            marginBottom: 20,
                            color: "#448aff",
                          }}
                          variant={"h6"}
                        >
                          Quantity:{"  "}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: 17,
                            marginBottom: 20,
                            color: "#448aff",
                          }}
                          variant={"h6"}
                        >
                          <span style={{ fontWeight: 400, color: "black " }}>
                            {item.item_quantity}
                          </span>
                        </Typography>
                      </div>
                      <div class="col-6  d-flex flex-column justify-content-center align-items-center">
                        <Typography
                          style={{
                            fontSize: 17,
                            marginBottom: 20,
                            color: "#448aff",
                          }}
                          variant={"h6"}
                        >
                          Total:{"  "}
                        </Typography>
                        <Typography
                          style={{
                            fontSize: 17,
                            marginBottom: 20,
                            color: "#448aff",
                          }}
                          variant={"h6"}
                        >
                          <span style={{ fontWeight: 400, color: "black " }}>
                            $ {item.item_total}
                          </span>
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
                <hr style={{ marginTop: 40, marginBottom: 40 }} />
              </div>
            );
          })}
      </div>
      <div className="product-pagination" style={{ marginBottom: 40 }}>
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="secondary"
          size="large"
          showFirstButton
          showLastButton
        />
      </div>
    </Template>
  );
}

const tutorialSteps = [
  {
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];
