import React, {useEffect} from "react";
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
import {useDispatch, useSelector} from "react-redux";
import authSlice, {getMyOrders} from "../store/auth";

export default function MyOrdersUserManagement() {
  const history = useHistory();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const dispatch = useDispatch();
  const {myOrders, user} = useSelector(state => state.auth);
  useEffect(() => {

  })
  const orderData = myOrders
  console.log("my Orders " , orderData)

  const getNoOfPages = () => {
    try {
      return Math.ceil(orderData?.length / itemsPerPage);
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

  return orderData && orderData.length ? (
    <>
      <div class="container-fluid px-0" style={{ paddingBottom: 35 }}>
        {orderData
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((order) => {
            return (
              <div>
                <div className="clearfix my-4">
                  <div className="float-right">
                    <button
                      onClick={() =>
                        history.push({
                          pathname: `/orders/detail/` + order.id,
                        })
                      }
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
                        View Order
                      </Typography>
                    </button>
                  </div>
                </div>
                <div className="row" key={order.id}>
                  <div class="col-lg-6">
                    <div class="row">
                      <div class="col-5">
                        {/*<AutoPlaySwipeableViews*/}
                        {/*  index={activeStep}*/}
                        {/*  onChangeIndex={handleStepChange}*/}
                        {/*  enableMouseEvents*/}
                        {/*>*/}
                        {/*  {tutorialSteps.map((step, index) => (*/}
                        {/*    <div key={step.label}>*/}
                        {/*      {Math.abs(activeStep - index) <= 2 ? (*/}
                        {/*        <img*/}
                        {/*          style={{ height: 150, width: 150 }}*/}
                        {/*          src={step.imgPath}*/}
                        {/*          alt={step.label}*/}
                        {/*        />*/}
                        {/*      ) : null}*/}
                        {/*    </div>*/}
                        {/*  ))}*/}
                        {/*</AutoPlaySwipeableViews>*/}
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
                          Order Number:{"  "}
                          <span style={{ fontWeight: 400, color: "black " }}>
                            GRUBS_{order?.id}
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
                          Number of Items:{"  "}
                          <span style={{ fontWeight: 400, color: "black " }}>
                            {order.number_of_items}
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
                          Subtotal :{"  "}
                          <span style={{ fontWeight: 400, color: "black " }}>
                            {" "}
                            {order.subtotal_amount}
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
                          Order Date:{"  "}
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
                            {order.createdAt}
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
                          Status:{"  "}
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
                            {order.status}
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
    </>
  ) : (
    <Typography
      style={{ textAlign: "center", marginBottom: 100, marginTop: 100 }}
      variant="h4"
    >
      There are no Orders Placed
    </Typography>
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
