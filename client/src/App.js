import "./App.css";
import TopBar from "./TopBar";
import Videos from "./Videos";
import AddVideo from "./AddVideo";
import myVideos from "./exampleresponse.json";



function App() {
  return (
    <div>
      <TopBar />
      <AddVideo/>
      <Videos myVideos={myVideos} />
      
    </div>
  );
}

export default App;
