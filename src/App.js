import LandingPage from "./components/pages/LandingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./css/App.css";
import HomePage from "./components/pages/HomePage";
import { Redirect } from "react-router";
import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Amplify, { Auth, Hub } from "aws-amplify";

// if (process.env.prod) {
import("./aws-exports").then((awsconfig) => {
  Amplify.configure(awsconfig);
});
// } else {
//   import("./dev-aws-exports2").then((awsconfig) => {
//     Amplify.configure(awsconfig);
//   });
// }

library.add(fab, faCheckSquare, faCoffee, faUser);

function App() {
  const [appPath, setAppPath] = useState(window.location.pathname);
  const [authorizedUser, setAuthorizedUser] = useState();

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((res) => {
      console.log("ua", res);
      setAuthorizedUser(res);
      return res;
    });

    Hub.listen("auth", async (authData) => {
      switch (authData.payload.event) {
        case "signIn":
          console.log("signIn", authData);
          setAuthorizedUser(
            Auth.currentAuthenticatedUser().then((res) => {
              console.log("ua", res);
              return res;
            })
          );
          break;
        case "signIn_failure":
          console.log("signIn_failure");
          setAuthorizedUser(null);
          break;
        case "signOut":
          console.log("signOut");
          setAuthorizedUser(null);
          break;
        default:
          break;
      }
    });
    console.log("refresh", window.location.pathname);
    authenticate();
  }, []);

  useEffect(() => {
    if (authorizedUser) {
      setAppPath("/");
    } else {
      setAppPath("/sign-in");
    }
  }, [authorizedUser]);

  useEffect(() => {
    console.log({ appPath });
  }, [appPath]);

  function authenticate() {
    console.log("authenticate");

    setAuthorizedUser();
  }

  function navigateTo(path) {
    console.log("navigateTo", path);

    setAppPath(path);
  }

  var defaultProps = {
    navigateTo,
  };

  return (
    <Router>
      <div className="App d-flex flex-column" style={{ height: "100%" }}>
        <Redirect
          to={{
            pathname: appPath,
            //search: "",
            //state: {},
          }}
          push={window.location.pathname !== appPath}
        />
        <Switch>
          <Route
            exact
            path={["/sign-in", "/create-account"]}
            render={(props) => <LandingPage {...props} {...defaultProps} />}
          />
          <Route
            exact
            path="/"
            render={(props) => <HomePage {...props} {...defaultProps} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
