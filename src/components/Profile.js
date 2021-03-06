import React, { useEffect } from "react";
import { Typography, Grid } from "@material-ui/core";
import "../assets/styles/style.css";
import { useDispatch, useSelector } from "react-redux";
import Template from "./Template";
import { useHistory } from "react-router-dom";
import OrdersUsers from "./OrdersUsers";
import authSlice, { getMyOrders } from "../store/auth";
import ProfileUser from "./ProfileUser";

function Profile(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const { user, myOrders } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authSlice.actions.setApiResponse(null));
    dispatch(getMyOrders(user?.email));
  }, []);

  return (
    <Template>
      <div className="container">
        <ProfileUser />
        <OrdersUsers myOrders={myOrders} />
      </div>
    </Template>
  );
}
export default Profile;

class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) {
      return;
    }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) {
      return null;
    }

    if (loading) {
      return <p>loading...</p>;
    }

    return (
      <img
        src={thumb}
        alt={file.name}
        height={150}
        width={150}
        className="mb-3"
        style={{ borderRadius: "50%" }}
      />
    );
  }
}
