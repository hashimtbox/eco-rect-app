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
              <div class="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                <Avatar
                  alt="User_image"
                  src=""
                  // src={API_HOST + "/uploads/admin_profile_pic/"+ admin?.profile_pic}
                  style={{ width: 200, height: 200 }}
                />
              </div>

              <div class="col-12 col-lg-8 text-center text-lg-left">
                <div class="row">
                  <div class="col-12 px-0">
                    <div className="d-flex justify-content-center justify-content-md-start flex-column mt-4 mt-lg-0 mb-3">
                      <Typography
                        style={{
                          color: "#448AFF",
                          fontSize: 18,
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
                      </Typography>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6 px-0">
                    <div className="d-flex justify-content-center justify-content-md-start flex-column mb-3">
                      <Typography
                        style={{
                          color: "#448AFF",
                          fontSize: 18,
                          fontWeight: 500,
                        }}
                        variant="h6"
                      >
                        First Name
                      </Typography>
                      <Typography
                        style={{ fontSize: 16, marginBottom: 1 }}
                        variant="p"
                      >
                        First Name here
                      </Typography>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 px-0">
                    <div className="d-flex justify-content-center justify-content-md-start flex-column mb-3">
                      <Typography
                        style={{
                          color: "#448AFF",
                          fontSize: 18,
                          fontWeight: 500,
                        }}
                        variant="h6"
                      >
                        Last Name
                      </Typography>
                      <Typography
                        style={{ fontSize: 16, marginBottom: 1 }}
                        variant="p"
                      >
                        Last Name Here
                      </Typography>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 px-0">
                    <div className="d-flex justify-content-center justify-content-md-start flex-column mb-3">
                      <Typography
                        style={{
                          color: "#448AFF",
                          fontSize: 18,
                          fontWeight: 500,
                        }}
                        variant="h6"
                      >
                        Address
                      </Typography>
                      <Typography
                        style={{ fontSize: 16, marginBottom: 1 }}
                        variant="p"
                      >
                        Address Here
                      </Typography>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-4 px-0">
                    <div className="d-flex justify-content-center justify-content-md-start flex-column mb-3">
                      <Typography
                        style={{
                          color: "#448AFF",
                          fontSize: 18,
                          fontWeight: 500,
                        }}
                        variant="h6"
                      >
                        City
                      </Typography>
                      <Typography
                        style={{ fontSize: 16, marginBottom: 1 }}
                        variant="p"
                      >
                        City Name Here
                      </Typography>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 px-0">
                    <div className="d-flex justify-content-center justify-content-md-start flex-column mb-3">
                      <Typography
                        style={{
                          color: "#448AFF",
                          fontSize: 18,
                          fontWeight: 500,
                        }}
                        variant="h6"
                      >
                        Country/Region
                      </Typography>
                      <Typography
                        style={{ fontSize: 16, marginBottom: 1 }}
                        variant="p"
                      >
                        Country Name Here
                      </Typography>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 px-0">
                    <div className="d-flex justify-content-center justify-content-md-start flex-column mb-3">
                      <Typography
                        style={{
                          color: "#448AFF",
                          fontSize: 18,
                          fontWeight: 500,
                        }}
                        variant="h6"
                      >
                        Zip Code
                      </Typography>
                      <Typography
                        style={{ fontSize: 16, marginBottom: 1 }}
                        variant="p"
                      >
                        Zip Code Here
                      </Typography>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 px-0">
                    <div className="d-flex justify-content-center justify-content-md-start flex-column mb-3">
                      <Typography
                        style={{
                          color: "#448AFF",
                          fontSize: 18,
                          fontWeight: 500,
                        }}
                        variant="h6"
                      >
                        Phone Number
                      </Typography>
                      <Typography
                        style={{ fontSize: 16, marginBottom: 1 }}
                        variant="p"
                      >
                        Phone Number Here
                      </Typography>
                    </div>
                  </div>
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
