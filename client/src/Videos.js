import React from "react";

function Videos(props) {
  return (
    <div id="video-container">
      <ul>
        {props.myVideos.map((vid) => {
          return <li key={vid.id + 1}>{vid.id}</li>;
        })}
      </ul>
    </div>
  );
}
export default Videos;
