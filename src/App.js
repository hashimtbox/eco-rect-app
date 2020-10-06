import React from "react";
import Dashboard from "./views/Dashboard";
import { toast } from "react-toastify";
import { MuiThemeProvider } from "@material-ui/core";
import { lightTheme } from "./config/theme";
import LandingPage from "./components/LandingPage";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEventForm from "./components/CreateEventForm";
import SecureRoute from "./components/SecureRoute";
import Electronics from "./views/Electronics";
import ComicBooks from "./views/ComicBooks";
import Products from "./components/Products";
import ProductDetailPage from "./components/ProductDetailPage";
import CartDetail from "./components/CartDetail";
toast.configure();

const App = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <MuiThemeProvider theme={lightTheme}>
      <Router>
        <Switch>
          <Route exact path="/test" component={LandingPage} />
          <SecureRoute exact path="/" component={Dashboard} />
          <SecureRoute path="/products/:category" exact component={Products} />
          <Route exact path="/products/detail/:productId" component={ProductDetailPage} />
          <Route exact path="/cart" component={CartDetail} />
          {/*<SecureRoute exact path="/create" component={CreateEventForm} />*/}
          {/*<SecureRoute path="/electronics" exact component={Electronics} />*/}
          {/*<SecureRoute path="/comicbooks" exact component={ComicBooks} />*/}
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
