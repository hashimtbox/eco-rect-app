import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  TextField,
  Typography
} from "@material-ui/core";
import Brand from "./Brand";
import { LockOpenOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import authSlice, { signin } from "../store/auth";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, error, inProgress } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const onSubmit = () => dispatch(signin(email, password));

  useEffect(() => {
    setEmail("");
    setPassword("");
    toast(error, { type: "error" });
    dispatch(authSlice.actions.setError(null));
  }, [error]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Brand />
        <Typography
          variant={"h3"}
          color="textSecondary"
          style={{ fontWeight: 300 }}
        >
          Login
        </Typography>
        <Typography
          variant={"body2"}
          color="textSecondary"
          style={{ fontWeight: 400 }}
        >
          Login to get started and continue to your dashboard
        </Typography>
        <TextField
          style={{ width: 300 }}
          value={email}
          variant={"outlined"}
          margin={"dense"}
          label={"Email"}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          style={{ width: 300 }}
          value={password}
          variant={"outlined"}
          margin={"dense"}
          type="password"
          label={"Password"}
          onChange={e => setPassword(e.target.value)}
        />
        <div style={{ display: "flex", alignItems: "center", marginTop: 15 }}>
          <Button
            startIcon={<LockOpenOutlined />}
            onClick={onSubmit}
            variant={"contained"}
            size={"large"}
            disabled={!email || !password}
            color="primary"
            style={{
              width: 150
            }}
          >
            Login
          </Button>
          {inProgress ? (
            <CircularProgress
              variant={"indeterminate"}
              style={{ marginLeft: 10 }}
              size={20}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Login;
