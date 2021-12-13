import React from "react";

function LoginForm({ loginUser }) {
  return (
    <div className="FormWrap">
      <form onSubmit={(e) => loginUser(e)} className="Form">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter Email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="*************" />

        
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;