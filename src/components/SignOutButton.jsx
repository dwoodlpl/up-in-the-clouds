import { Auth } from "aws-amplify";
import React from "react";

function SignOutButton(props) {
  async function signOut() {
    await Auth.signOut()
      .then((res) => {
        console.log({ res });
        return res;
      })
      .catch((err) => {
        console.log("error", err.message);
        window.alert(err.message);
      });
  }
  return (
    <button className="btn btn-link" onClick={signOut}>
      Sign Out
    </button>
  );
}

export default SignOutButton;
