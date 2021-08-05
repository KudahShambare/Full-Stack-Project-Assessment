import React from "react";

function AddVideo() {
  return (
    <div>
      <h2>Add A Video</h2>
      <input type="text" placeholder="Enter Title" />
      <input type="text" placeholder="Enter URL" />
      <button id="add-video">Add</button>
    </div>
  );
}
export default AddVideo;
