import "./App.css";
import TopBar from "./TopBar";
import Videos from "./Videos";

import myVideos from "./exampleresponse.json";


function App() {
  return (
    <div>
      <TopBar />
      <Videos myVideos={ myVideos}/>
    </div>
  );
}

export default App;
