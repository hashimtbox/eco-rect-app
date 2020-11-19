import React from "react";
import CardBox from "../MaterialUiHelper/CardBox";
import { Typography, Grid } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import * as Yup from "yup";
import "../assets/styles/style.css";
import { useSelector } from "react-redux";
import Template from "./Template";
import { useHistory } from "react-router-dom";
import MyOrdersUserManagement from "./MyOrdersUserManagement";

function Profile(props) {
  const history = useHistory();
  // const { admin } = useSelector((state) => state.auth);
  return (
    <Template>
      <div className="container">
        <div className="d-block">
          <div class="clearfix">
            <div class="float-left">
              <Typography
                className="pseudo_border1"
                variant="h4"
                style={{
                  fontSize: 25,
                  marginTop: 50,
                  marginBottom: 30,
                  fontWeight: 500,
                }}
              >
                Profile
              </Typography>
            </div>
            <div class="float-right">
              <Typography
                variant="h4"
                style={{
                  fontSize: 25,
                  marginTop: 50,
                  marginBottom: 30,
                  fontWeight: 500,
                }}
              >
                <CreateIcon
                  onClick={() => history.push("/editprofile")}
                  style={{
                    color: "#448aff",
                    fontSize: 25,
                    cursor: "pointer",
                  }}
                />
              </Typography>
            </div>
          </div>
        </div>
        <div className="jr-card">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
                <Avatar
                  alt="User_image"
                  src=""
                  // src={API_HOST + "/uploads/admin_profile_pic/"+ admin?.profile_pic}
                  style={{ width: 200, height: 200 }}
                />
              </div>
              <div class="col-12 col-md-8 d-flex flex-column align-items-center align-items-md-start justify-content-center justify-content-md-start">
                <div className="d-flex justify-content-center justify-content-md-start flex-column mt-4 mt-md-0 mb-4">
                  <Typography
                    style={{
                      color: "#448AFF",
                      fontSize: 18,
                      marginBottom: 10,
                      fontWeight: 500,
                    }}
                    variant="h6"
                  >
                    Full Name
                  </Typography>
                  <Typography
                    style={{ fontSize: 16, marginBottom: 1 }}
                    variant="p"
                  >
                    {/* {admin?.name} */} Name here
                  </Typography>
                </div>
                <div className="d-flex justify-content-center justify-content-md-start flex-column mb-4">
                  <Typography
                    style={{
                      color: "#448AFF",
                      fontSize: 18,
                      marginBottom: 10,
                      fontWeight: 500,
                    }}
                    variant="h6"
                  >
                    Email Address
                  </Typography>
                  <Typography
                    style={{ fontSize: 16, marginBottom: 1 }}
                    variant="p"
                  >
                    email@address.com
                    {/* {admin?.email} */}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-block">
          <Typography
            className="pseudo_border1"
            variant="h4"
            style={{
              fontSize: 25,
              marginTop: 50,
              marginBottom: 30,
              fontWeight: 500,
            }}
          >
            My orders
          </Typography>
          <MyOrdersUserManagement />
        </div>
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
