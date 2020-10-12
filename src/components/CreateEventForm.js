import React from "react";
import { TextField, Typography } from "@material-ui/core";
import Template from "./Template";
import Button from "@material-ui/core/Button";
import { KeyboardDateTimePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { event } from "../config/drawer";

const CreateEventForm = () => {
  return (
    <Template style={{ height: '100%' }} selected={event}>
      <Typography variant={"h5"}>Create Event</Typography>
      <Typography variant={"body2"}>Create new event from scratch</Typography>

      <div style={{ height: 10 }} />
      <TextField placeholder={'Event Title'} variant={"outlined"} style={{ width: 400 }} />
      <div style={{ height: 10 }} />
      <TextField multiline placeholder={'Event Description'} variant={"outlined"} rows={5} style={{ width: 600 }} />
      <div style={{ height: 10 }} />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardDateTimePicker inputVariant={'outlined'} style={{ marginTop: 12 }} label="Event Start" format="YYYY-MM-DD" value={new Date()} InputAdornmentProps={{ position: 'start' }} KeyboardButtonProps={{ 'aria-label': 'change date' }} />
      </MuiPickersUtilsProvider>
      <div style={{ display: 'inline-flex', width: 15 }} ></div>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardDateTimePicker inputVariant={'outlined'} style={{ marginTop: 12 }} label="Event Ends" format="YYYY-MM-DD" value={new Date()} InputAdornmentProps={{ position: 'start' }} KeyboardButtonProps={{ 'aria-label': 'change date' }} />
      </MuiPickersUtilsProvider>
      <div style={{ height: 10 }} />
      <Button variant={'outlined'}>Create</Button>
    </Template>
  );
};

export default CreateEventForm;
