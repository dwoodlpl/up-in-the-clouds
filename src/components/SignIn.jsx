// a form that lets a user sign in
import React from "react";

function SignIn(props) {
  function onFormSubmit(e) {
    e.preventDefault();
    console.log(e);
    window.alert("Signed In!");
  }

  return (
    <div>
      <form id="signin" onSubmit={onFormSubmit}>
        <div className="d-flex flex-column">
          <input id="signin-email-input" className="m-2" placeholder="Email" />
          <input
            id="signin-password-input"
            className="m-2"
            placeholder="Password"
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
