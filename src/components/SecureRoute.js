import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import LandingPage from "./LandingPage";
import LinearProgress from "@material-ui/core/LinearProgress";
import {Route} from "react-router";
import {checkAuthorization} from "../store/auth";

const SecureRoute = ({ component: Comp, ...rest }) => {
  const { user, isReady } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthorization());
  }, []);
  return isReady ? (
    <Route {...rest} component={!user ? Comp : LandingPage} />
  ) : (
    <LinearProgress style={{ flexGrow: 1 }} color={'secondary'} />
  );
};

export default SecureRoute