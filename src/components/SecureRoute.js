import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import LandingPage from "./LandingPage";
import LinearProgress from "@material-ui/core/LinearProgress";
import {Route} from "react-router";
import {checkAuthorization} from "../store/auth";
import SignIn from "./SignIn";

const SecureRoute = ({ component: Comp, ...rest }) => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
  }, []);
  return <Route {...rest} component={!user ? SignIn : Comp} />
};

export default SecureRoute