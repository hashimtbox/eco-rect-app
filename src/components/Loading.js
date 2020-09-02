import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <CircularProgress size={25} />
      <span style={{ width: 10 }} />
      <Typography>Loading, Please wait ...</Typography>
    </div>
  );
};

export default Loading;
