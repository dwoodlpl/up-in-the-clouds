// a form that lets a user create an account
import React, { useState } from "react";
import CreateAccount from "../CreateAccount";
import SignIn from "../SignIn";
import logo from "../../assets/LPL_Financial_logo.svg";
import { Route, Switch } from "react-router";

function LandingPage(props) {
  const { navigateTo } = props;

  const [signInVisible, setSigninVisible] = useState(true);
  const [createAccountVisible, setCreateAccountVisible] = useState(false);

  var defaultProps = {
    navigateTo,
  };

  return (
    <div className="d-flex flex-column align-items-center p-5 flex-grow-1">
      <div>
        <img
          src={logo}
          className="lpl-logo m-4"
          alt="logo"
          style={{ height: "50px" }}
        />
        <Switch>
          <Route
            path={"/sign-in"}
            render={(props) => {
              return (
                <>
                  <SignIn {...props} {...defaultProps} />
                  <button
                    className="btn btn-link"
                    onClick={(e) => navigateTo("/create-account")}
                  >
                    Create Account
                  </button>
                </>
              );
            }}
          />
          <Route
            path={"/create-account"}
            render={(props) => <CreateAccount {...props} {...defaultProps} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default LandingPage;
