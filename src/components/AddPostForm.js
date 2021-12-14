import React from "react";

function AddPostForm ({ submitForm }) {
    return (
      <div className="Form">
        <h1>Add Post Form</h1>
        <form onSubmit={(e) => submitForm(e)}>
          <label htmlFor="text">Caption</label>
          <input type="text" name="text" placeholder="Type Caption Here..." />
  
          <label htmlFor="imageSrc">Image URL</label>
          <input type="text" name="imageSrc" placeholder="" />
  
          <label htmlFor="imageAlt">Image Alt Text</label>
          <input type="text" name="imageAlt" placeholder="Alt Text for Image" />
  
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
  
  export default AddPostForm;