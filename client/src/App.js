import "./App.css";
import TopBar from "./TopBar";
import Videos from "./Videos";
import AddVideo from "./AddVideo";



function App() {
  return (
    <div>
      <TopBar />
      <AddVideo />
      {/*       <Videos myVideos={myVideos} />
       */}
    </div>
  );
}

export default App;
