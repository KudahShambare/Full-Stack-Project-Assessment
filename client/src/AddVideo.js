import React, { useState } from "react";
import myVideos from "./exampleresponse.json";
import Videos from "./Videos";

let vids = myVideos;

function AddVideo() {
  const [videos, setMyVideos] = useState(vids);
  
   let title = document.getElementById("title-input");
   let url = document.getElementById("url-input");
  function adding() {
   return  setMyVideos(
      videos.concat({
        id: 523523,
        title: title.value,
        url: url.value,
        rating: 23,
      })
    );
        //  console.log(videos);

}
  return (
    <div>
      <h2>Add A Video</h2>
      <input type="text" placeholder="Enter Title" id="title-input" />
      <input type="text" placeholder="Enter URL" id="url-input" />
      <button id="add-video" onClick={adding}>
        Add
      </button>
      <Videos myVideos={videos }/>
    </div>
  );
}

export default AddVideo;
