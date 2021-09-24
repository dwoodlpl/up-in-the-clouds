import React from "react";
import { Route, Switch } from "react-router";
import SignOutButton from "../SignOutButton";
import logo from "../../assets/LPL_Financial_logo.svg";
import HowToModule from "../HowToModule";
import AnalyticsModule from "../AnalyticsModule";
import DocumentScanner from "../DocumentScanner";

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
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <>
              <div className="d-flex flex-row justify-content-space">
                <button
                  className="btn btn-primary"
                  onClick={(e) => navigateTo("/how-to")}
                >
                  Knowledge Base
                </button>
                <button
                  className="btn btn-primary"
                  onClick={(e) => navigateTo("/analytics")}
                >
                  Analytics
                </button>
              </div>
              <div>
                <DocumentScanner />
              </div>
            </>
          )}
        />
        <Route
          exact
          path="/how-to"
          render={(props) => <HowToModule {...props} />}
        />
        <Route
          exact
          path="/analytics"
          render={(props) => <AnalyticsModule {...props} />}
        />
      </Switch>
    </div>
  );
}

export default HomePage;
