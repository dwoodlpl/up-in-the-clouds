import React from "react";
import { Switch } from "react-router";
import SignOutButton from "../SignOutButton";
import logo from "../../assets/LPL_Financial_logo.svg";

function HomePage(props) {
  const { navigateTo } = props;
  return (
    <div>
      <div className="d-flex flex-row justify-content-between p-2">
        <span style={{ cursor: "pointer" }}>
          <img
            src={logo}
            className="lpl-logo"
            alt="logo"
            onClick={(e) => navigateTo("/")}
            style={{ height: "30px", cursor: "pointer" }}
          />
        </span>
        <SignOutButton />
      </div>
      <Switch></Switch>
    </div>
  );
}

export default HomePage;
