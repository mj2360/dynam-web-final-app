import React from "react";

function CreateUserForm({ signUpUser }) {
  return (
    <div className="FormWrap">
      <form onSubmit={(e) => signUpUser(e)} >
        {/* <label htmlFor="userName">Name</label>
        <input type="text" name="userName" placeholder="Enter Display Name" /> */}

        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter Email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="*************" />

        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default CreateUserForm;