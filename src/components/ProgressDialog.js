import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DialogContentText, Typography } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import { CircularProgress } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import loadingImage from "../assets/loading.png"

const ProgressDialog = ({
  open,
  onClose,
  title = "Loading, Please Wait..."
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
        <img src={loadingImage} alt={"loading"} height="150" width="150" />
    </Dialog>
  );
};

export default ProgressDialog;
