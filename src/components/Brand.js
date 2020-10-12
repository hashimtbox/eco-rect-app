import React from "react";
import { AllInclusiveOutlined } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const Brand = ({ size = "small", title = "Chalo Chalen" }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <AllInclusiveOutlined color="primary" fontSize={size} style={{ marginRight: 6 }} />
    <Typography variant={"caption"} fontSize={size} color="primary">
      {title}
    </Typography>
  </div>
);

Brand.propTypes = {
  title: PropTypes.string
};

export default Brand;
