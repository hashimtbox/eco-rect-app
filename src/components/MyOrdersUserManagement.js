import React from "react";
import { Button, Typography, Grid } from "@material-ui/core";
import macbook from "../assets/macbook.jpg";
import "../assets/styles/style.css";
import NoItem from "./NoItem";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Pagination from "@material-ui/lab/Pagination";
const CartDetail = () => {
  const history = useHistory();

  const orderData = [
    {
      id: 1,
      order_no: "GRUBS_001",
      order_subtotal: 130,
      order_items: 2,
      order_date: "4 Nov, 2020",
      order_status: "Pending",
    },
    {
      id: 2,
      order_no: "GRUBS_002",
      order_subtotal: 130,
      order_items: 2,
      order_date: "4 Nov, 2020",
      order_status: "Processing",
    },
    {
      id: 3,
      order_no: "GRUBS_003",
      order_subtotal: 130,
      order_items: 2,
      order_date: "4 Nov, 2020",
      order_status: "Completed",
    },
    {
      id: 4,
      order_no: "GRUBS_004",
      order_subtotal: 130,
      order_items: 2,
      order_date: "4 Nov, 2020",
      order_status: "Rejected",
    },
    {
      id: 5,
      order_no: "GRUBS_005",
      order_subtotal: 130,
      order_items: 2,
      order_date: "4 Nov, 2020",
      order_status: "Rejected",
    },
    {
      id: 6,
      order_no: "GRUBS_006",
      order_subtotal: 130,
      order_items: 2,
      order_date: "4 Nov, 2020",
      order_status: "Rejected",
    },
  ];

  const getNoOfPages = () => {
    try {
      return Math.ceil(orderData.length / itemsPerPage);
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

  return orderData && orderData.length ? (
    <div>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <div>
          {orderData
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((item) => {
              return (
                <div key={item.id}>
                  <div
                    style={{
                      display: "flex",
                      paddingTop: 20,
                      paddingBottom: 20,
                    }}
                  >
                    <div>
                      <img
                        src={item.main_image || macbook}
                        alt={macbook}
                        height="150"
                        width="150"
                      />
                    </div>
                    <div
                      className="sprd-basket-item__info_order"
                      style={{ marginLeft: 20 }}
                    >
                      <div className="sprd-basket-item__info_order__col">
                        <Typography
                          style={{ fontSize: 16, margin: 0, color: "#448aff" }}
                          variant={"h6"}
                        >
                          Order Number:{" "}
                          <span style={{ fontWeight: 400, color: "black " }}>
                            {item.order_no}
                          </span>
                        </Typography>

                        <Typography
                          style={{ fontSize: 16, margin: 0, color: "#448aff" }}
                          variant={"h6"}
                        >
                          Number of Items:{" "}
                          <span style={{ fontWeight: 400, color: "black " }}>
                            {item.order_items}
                          </span>
                        </Typography>
                        <Typography
                          style={{ fontSize: 16, margin: 0, color: "#448aff" }}
                          variant={"h6"}
                        >
                          Subtotal :{" "}
                          <span style={{ fontWeight: 400, color: "black " }}>
                            $ {item.order_subtotal}
                          </span>
                        </Typography>
                      </div>
                      <div className="sprd-basket-item__info_order__col">
                        hamza
                      </div>
                      <div className="sprd-basket-item__info_order__col">
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="secondary"
                          className="order-number"
                        >
                          View Order
                        </Button>
                        {/* <DeleteIcon className="delete-icon" /> */}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{ marginBottom: 20 }}
                    className="border-bottom-item-cart"
                  ></div>
                </div>
              );
            })}
        </div>
      </Grid>
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
    </div>
  ) : (
    <NoItem text="There are no Orders Placed" />
  );
};

export default CartDetail;
