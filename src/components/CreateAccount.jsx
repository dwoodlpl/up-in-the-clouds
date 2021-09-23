// a form that lets a user create an account
import React, { useState } from "react";

function CreateAccount(props) {
  function onFormSubmit(e) {
    e.preventDefault();

    console.log(e.target);
    window.alert("Account Created!");
  }

  return (
    <form id="create-account-form" onSubmit={onFormSubmit}>
      <div>
        <input id="create-account-email-input" placeholder="Email" />
        <input id="create-account-password-input" placeholder="Password" />
        <input
          id="create-account-confirm-password-input"
          placeholder="Confirm Password"
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default CreateAccount;
