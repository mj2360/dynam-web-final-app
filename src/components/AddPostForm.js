import React from "react";

function AddPostForm ({  }) {
    return (
      <div className="Form">
        <h1>Add Post Form</h1>
        <form onSubmit={(e) => signUpUser(e)}>
          <label htmlFor="text">Caption</label>
          <input type="text" name="text" placeholder="Type Caption Here..." />
  
          <label htmlFor=""></label>
          <input type="" name="" placeholder="" />
  
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="*************" />
  
          <button type="submit">Create User</button>
        </form>
      </div>
    );
  }
  
  export default CreateUserForm;