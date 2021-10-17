import Navi from "./Navi.js";
import "./App.css";
import Card from "./Card.js";
import Auth from "./Auth.js";

const name="trial"

function App() {
  return (
    <div>
          <Navi />
          <Card name={name}/>
    </div>

  );
}

export default App;
