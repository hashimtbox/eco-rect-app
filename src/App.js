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
import Checkout from "./components/Checkout";
import OrderConfirmed from "./components/OrderConfirmed";
import PaymentError from "./components/PaymentError";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import ChangePassword from "./components/ChangePassword";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import OrderDetail from "./components/OrderDetail";

toast.configure();

const App = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <MuiThemeProvider theme={lightTheme}>
      <Router>
        <Switch>
          <Route exact path="/test" component={LandingPage} />
          <SecureRoute exact path="/" component={Dashboard} />
          {/* <SecureRoute path="/products/:category" exact component={Products} /> */}
          <Route exact path="/orders/detail/:id" component={OrderDetail} />
          <Route
            exact
            path="/products/detail/:productId"
            component={ProductDetailPage}
          />
          <Route exact path="/cart" component={CartDetail} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/orderconfirmed" component={OrderConfirmed} />
          <Route exact path="/paymenterror" component={PaymentError} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/changepassword" component={ChangePassword} />
          {/*<SecureRoute exact path="/create" component={CreateEventForm} />*/}
          {/*<SecureRoute path="/electronics" exact component={Electronics} />*/}
          {/*<SecureRoute path="/comicbooks" exact component={ComicBooks} />*/}
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
