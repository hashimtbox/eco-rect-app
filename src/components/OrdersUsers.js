import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";

export default function OrdersUsers(props) {
  const history = useHistory();
  const columns = [
    {
      name: "id",
      options: {
        display: false,
        filter: false,
      },
    },

    {
      name: "Order No",
      options: {
        filter: false,
      },
    },
    {
      name: "Number of Items",
      options: {
        filter: false,
      },
    },
    {
      name: "Subtotal",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <span style={{ fontWeight: 500, fontSize: 17, color: "#000000" }}>
              $ {tableMeta.rowData[3]}
            </span>
          );
        },
      },
    },
    {
      name: "Order Date",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <span style={{ fontWeight: 500, fontSize: 17, color: "#000000" }}>
              {tableMeta.rowData[4]}
            </span>
          );
        },
      },
    },

    {
      name: "Status",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          let status = tableMeta.rowData[5];

          if (status == "Pending") {
            return (
              <span style={{ fontWeight: 500, fontSize: 17, color: "black" }}>
                {status}
              </span>
            );
          } else if (status === "Completed") {
            return (
              <span style={{ fontWeight: 500, fontSize: 17, color: "green" }}>
                {status}
              </span>
            );
          } else if (status == "Rejected") {
            return (
              <span style={{ fontWeight: 500, fontSize: 17, color: "red" }}>
                {status}
              </span>
            );
          } else if (status == "Processing") {
            return (
              <span style={{ fontWeight: 500, fontSize: 17, color: "brown" }}>
                {status}
              </span>
            );
          }
        },
      },
    },

    {
      name: "View",
      options: {
        empty: true,
        sort: false,
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <VisibilityIcon
              onClick={() => {
                history.push("/orders/detail/" + tableMeta.rowData[0]);
              }}
              style={{ color: "#448aff", cursor: "pointer" }}
            />
          );
        },
      },
    },
  ];

  const options = {
    filter: true,
    sort: false,
    print: false,
    download: false,
    viewColumns: false,
    selectableRows: false,
    filterType: "checkbox",
    responsive: "standard",
    rowsPerPage: 5,
    // rowsPerPageOptions: [5],
  };

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
    {
      id: 7,
      order_no: "GRUBS_006",
      order_subtotal: 130,
      order_items: 2,
      order_date: "4 Nov, 2020",
      order_status: "Rejected",
    },
    {
      id: 8,
      order_no: "GRUBS_006",
      order_subtotal: 130,
      order_items: 2,
      order_date: "4 Nov, 2020",
      order_status: "Rejected",
    },
    {
      id: 9,
      order_no: "GRUBS_006",
      order_subtotal: 130,
      order_items: 2,
      order_date: "4 Nov, 2020",
      order_status: "Rejected",
    },
    {
      id: 10,
      order_no: "GRUBS_006",
      order_subtotal: 130,
      order_items: 2,
      order_date: "4 Nov, 2020",
      order_status: "Rejected",
    },
    {
      id: 11,
      order_no: "GRUBS_006",
      order_subtotal: 130,
      order_items: 2,
      order_date: "4 Nov, 2020",
      order_status: "Rejected",
    },
  ];

  const [order, setOrder] = useState(orderData);

  return (
    <>
      <div style={{ marginBottom: 40 }}>
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
                My Orders
              </Typography>
            </div>
          </div>
        </div>

        <MUIDataTable
          title={""}
          data={order?.map((item) => {
            return [
              item.id,
              item.order_no,
              item.order_items,
              item.order_subtotal,
              item.order_date,
              item.order_status,
            ];
          })}
          columns={columns}
          options={options}
        />
      </div>
    </>
  );
}