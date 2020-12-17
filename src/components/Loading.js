import React from "react";
import { LinearProgress, Typography } from "@material-ui/core";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <LinearProgress  />
      <span style={{ width: 10 }} />
      <Typography>Loading, Please wait ...</Typography>
    </div>
  );
};

export default Loading;
