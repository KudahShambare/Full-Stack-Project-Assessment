import React from "react";
import ReactPlayer from "react-player";
import DeleteButton from "./DeleteButton";


function Videos(props) {
  return (
    <div id="video-container">
      {props.myVideos.map((vid) => {
          return <div key={vid.id}>
              <h6>
                  {vid.title} (Rating:{vid.rating})
              </h6>
            <ReactPlayer url={ vid.url} controls="true"/>
              <p> Likes <span id="total-likes">     </span>  Dislikes<span id="total-dislikes"></span></p>
       <DeleteButton/>
          </div>

      })}
    </div>
  );
}
export default Videos;
