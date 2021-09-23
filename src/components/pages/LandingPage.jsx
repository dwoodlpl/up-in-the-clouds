// a form that lets a user create an account
import React, { useState } from "react";
import CreateAccount from "../CreateAccount";
import SignIn from "../SignIn";
import logo from "../../assets/LPL_Financial_logo.svg";

function LandingPage(props) {
  const [signInVisible, setSigninVisible] = useState(true);
  const [createAccountVisible, setCreateAccountVisible] = useState(false);

  return (
    <div className="d-flex flex-column align-items-center p-5 flex-grow-1">
      <div className="w-25">
        <div className="d-flex flex-column p-2">
          <img src={logo} className="lpl-logo" alt="logo" />
          <h1 style={{ color: "steelblue" }}>Up In The Clouds</h1>
        </div>
        {signInVisible && <SignIn />}
        {createAccountVisible && <CreateAccount />}
      </div>
    </div>
  );
}

export default LandingPage;
