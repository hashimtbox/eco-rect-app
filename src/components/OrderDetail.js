import React, { useState, useEffect } from "react";
import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import MUIDataTable from "mui-datatables";
import Template from "./Template.js";
import { useDispatch, useSelector } from "react-redux";
import authSlice, { getOrder } from "../store/auth";

export default function OrderDetail(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { orderDetailById } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authSlice.actions.setApiResponse(null));
    dispatch(getOrder(id));
  }, []);

  const columns = [
    {
      name: "id",
      options: {
        display: false,
        filter: false,
      },
    },
    {
      name: "Item Image",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <img
              style={{ objectFit: "scale-down" }}
              height="60"
              src={tableMeta.rowData[1]}
            />
          );
        },
      },
    },
    {
      name: "Item Name",
      options: {
        filter: false,
      },
    },
    {
      name: "Size",
      options: {
        filter: false,
      },
    },
    {
      name: "Color",
      options: {
        filter: false,
      },
    },
    {
      name: "Quantity",
      options: {
        filter: false,
      },
    },
    {
      name: "Total",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <span style={{ fontWeight: 500, fontSize: 17, color: "#000000" }}>
              $ {tableMeta.rowData[6]}
            </span>
          );
        },
      },
    },
  ];

  const options = {
    filter: false,
    sort: false,
    print: false,
    download: false,
    viewColumns: false,
    selectableRows: false,
    filterType: "checkbox",
    responsive: "standard",
  };

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

  const [orderitem, setOrderItem] = useState(orderDetailById);

  return (
    <Template>
      <div className="container" style={{ marginTop: 40, marginBottom: 40 }}>
        <div className="clearfix mb-2">
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
        <div className="d-block">
          <div class="clearfix">
            <div class="float-left">
              <Typography
                className="pseudo_border1"
                variant="h4"
                style={{
                  fontSize: 25,
                  marginTop: 50,
                  marginBottom: 30,
                  fontWeight: 500,
                }}
              >
                Order Details
              </Typography>
            </div>
          </div>
        </div>

        <MUIDataTable
          title={""}
          data={orderitem?.map((item) => {
            return [
              item.id,
              item.Product.main_image,
              item.Product.title,
              item.selected_size,
              item.select_color,
              item.quantity,
              item.quantity * item.Product.price,
            ];
          })}
          columns={columns}
          options={options}
        />
      </div>
    </Template>
  );
}
