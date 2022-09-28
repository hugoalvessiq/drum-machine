import "./App.css";
import Pad from "./Pad";
import drumSounds from "./data";

function App() {
  return (
    <div className="container">
      <h1 className="main--title">Drum Machine</h1>
      <div id="drum-machine">
        {drumSounds.map((item) => (
          <Pad
            id={item.id}
            letter={item.keyTrigger}
            url={item.url}
            key={item.id}
            keyTrigger={item.keyTrigger}
          />
        ))}
      </div>
      <div id="display">Sound Clicked</div>
    </div>
  );
}

export default App;
