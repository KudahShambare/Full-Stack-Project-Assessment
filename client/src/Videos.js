import React from "react";
import Youtube from "react-youtube";

const options = {
    height: '390',
    width: '480',
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
              <Youtube videoId={vid.url} opts={options} />
              <p> Likes <span id="total-likes">     </span>  Dislikes<span id="total-dislikes"></span></p>
        </div>

      })}
    </div>
  );
}
export default Videos;
