import React from "react";
import Youtube from "react-youtube";

const options = {
    playerVars: {
        autoplay:1
    }
}

function Videos(props) {
  return (
    <div id="video-container">
      {props.myVideos.map((vid) => {
          return <div key={vid.id}>
              <h6>
                  {vid.title}
              </h6>
              <Youtube videoId={vid.url} opts={ options}/>
        </div>

      })}
    </div>
  );
}
export default Videos;
