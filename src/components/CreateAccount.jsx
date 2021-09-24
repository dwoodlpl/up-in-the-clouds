// a form that lets a user create an account
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import InputGroup from "./InputGroup";

function CreateAccount(props) {
  const { navigateTo } = props;
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState("");
  const [confirmUser, setConfirmUser] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState();

  useEffect(() => {
    console.log(username);
  }, [username]);

  function onFormSubmit(e) {
    e.preventDefault();

    console.log(e.target.value);
    signUp(username, password, email);
    //
  }

  function onConfirmFormSubmit(e) {
    e.preventDefault();

    console.log(e.target.value);
    confirmSignUp(email, confirmationCode);
  }

  async function signUp(username, password, email) {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email, // optional
          // other custom attributes
        },
      })
        .then((res) => {
          console.log({ res });
          window.alert(`A code was sent to ${email}`);
          setConfirmUser(true);
          return res;
        })
        .catch((err) => {
          console.log("error", err.message);
          window.alert(err.message);
        });
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  async function confirmSignUp(email, confirmationCode) {
    console.log({ email, confirmationCode });
    Auth.confirmSignUp(email, confirmationCode)
      .then((res) => {
        console.log({ res });
        navigateTo("/sign-in");
      })
      .catch((err) => {
        console.log("error", err.message);
        window.alert(err.message);
      });
  }

  return confirmUser ? (
    <form id="confirm-account-form" onSubmit={onConfirmFormSubmit}>
      <InputGroup
        id="confirm-account-code-input"
        placeholder={"Code"}
        type="text"
        onChange={(e) => setConfirmationCode(e.target.value)}
      />
      <button type="submit" className="btn btn-primary m-2">
        Submit
      </button>
    </form>
  ) : (
    <form id="create-account-form" onSubmit={onFormSubmit}>
      <h4>Create Account</h4>
      <div>
        <InputGroup
          id="create-account-username-input"
          placeholder={"Username"}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputGroup
          id="create-account-email-input"
          placeholder={"Email"}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputGroup
          id="create-account-password-input"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary m-2">
          Register
        </button>
      </div>
    </form>
  );
}

export default CreateAccount;
