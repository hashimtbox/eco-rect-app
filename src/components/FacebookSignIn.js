import React from 'react';
import FacebookLogin from 'react-facebook-login';


function FacebookSignIn() {
  const responseFacebook = (response) => {
    console.log(response);
  }

  return (
    <div style={{width:"100%"}}>
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