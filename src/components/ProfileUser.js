import React, { useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "../assets/styles/style.css";
import { useDispatch, useSelector } from "react-redux";
import Template from "./Template";
import { useHistory } from "react-router-dom";
import { Typography, Grid } from "@material-ui/core";
import { API_HOST } from "../config/api";
import authSlice, { getMyOrders } from "../store/auth";

export default function Profile(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const { user, myOrders } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authSlice.actions.setApiResponse(null));
    dispatch(getMyOrders(user.email));
  }, []);

  return (
    <>
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
        </div>
      </div>
      <div class="row gutters-sm">
        <div class="col-lg-4 mb-3">
          <div class="card-profile h-100">
            <div class="card-profile-body">
              <div class="d-flex flex-column align-items-center justify-content-center text-center">
                <Avatar
                  alt="User_image"
                  src={
                    API_HOST + "/uploads/user_profile_pic/" + user?.profile_pic
                  }
                  style={{ width: 150, height: 150 }}
                />
                <div class="mt-3">
                  <h4>{` ${user?.first_name} ${user?.last_name}`}</h4>

                  <p class="text-muted font-size-sm">{user?.email}</p>
                  <button
                    class="btn btn-primary"
                    onClick={() => history.push("/editprofile")}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card-profile mb-3">
            <div class="card-profile-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0 profile-text-color">First Name</h6>
                </div>
                <div class="col-sm-9 text-secondary">{user?.first_name}</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0 profile-text-color">Last Name</h6>
                </div>
                <div class="col-sm-9 text-secondary"> {user?.last_name}</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0 profile-text-color">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary"> {user?.email}</div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0 profile-text-color">Address</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {user?.address ? user?.address : "N/A"}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0 profile-text-color">City</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {user?.city ? user?.city : "N/A"}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0 profile-text-color">Country/Region</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {user?.country ? user?.country : "N/A"}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0 profile-text-color">Zip Code</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {" "}
                  {user?.zip_code ? user?.zip_code : "N/A"}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0 profile-text-color">Phone</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {user?.phone_num ? user?.phone_num : "N/A"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
