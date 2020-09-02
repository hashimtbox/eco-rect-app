import React, { Component } from "react";
import Dashboard from "./components/Dashboard";
import { toast } from "react-toastify";
import { MuiThemeProvider } from "@material-ui/core";
import { lightTheme } from "./config/theme";
import LandingPage from "./components/LandingPage";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEventForm from "./components/CreateEventForm";
import SecureRoute from "./components/SecureRoute";
toast.configure();

const App = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <MuiThemeProvider theme={lightTheme}>
      <Router>
        <Switch>
          <Route path="/login" component={LandingPage} />
          <SecureRoute path="/create" component={CreateEventForm} />
          <SecureRoute path="/" component={Dashboard} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
