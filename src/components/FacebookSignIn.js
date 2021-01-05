import React from "react";
import FacebookLogin from "react-facebook-login";

import authSlice, { signInWithFacebook } from "../store/auth";
import { useDispatch } from "react-redux";

function FacebookSignIn() {
  const dispatch = useDispatch();

  const responseFacebook = (response) => {
    console.log("returned from facebojk", response);
    if (response.status != "unknown") {
      dispatch(
        signInWithFacebook(response.name, "", response.email, response.id)
      );
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <FacebookLogin
        appId="750534592479563"
        fields="name,email,picture"
        callback={responseFacebook}
        className="facebook-button-styling"
        icon="fa-facebook"
      />
    </div>
  );
}

export default FacebookSignIn;
