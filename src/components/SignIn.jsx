// a form that lets a user sign in
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Auth } from "aws-amplify";
import React, { useState } from "react";
import InputGroup from "./InputGroup";

function SignIn(props) {
  const { navigateTo } = props;
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function onFormSubmit(e) {
    e.preventDefault();

    console.log(e);
  }

  function onFormSubmit(e) {
    e.preventDefault();

    signIn(username, password);
  }

  async function signIn(username, password) {
    try {
      const user = await Auth.signIn(username, password)
        .then((res) => {
          console.log({ res });
          return res;
        })
        .catch((err) => {
          console.log("error", err.message);
          window.alert(err.message);
        });
      console.log({ user });
      navigateTo("/");
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  return (
    <div>
      <form id="signin" onSubmit={onFormSubmit}>
        <div className="d-flex flex-column">
          <InputGroup
            id="signin-email-input"
            placeholder="Email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputGroup
            id="signin-password-input"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="d-flex justify-content-center p-2">
            <button className="btn btn-primary" type="submit">
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
