import Navi from "./Navi.js";
import "./App.css";
import Card from "./Card.js";
import Auth from "./Auth.js";

const name="trial"
const artlink="https://thiscatdoesnotexist.com/"
const desc="This is a manga about something something"
const genre="fantasy"
const altgenre="mecha"

function App() {
  return (
    <div>
          <Navi />
          <Card name={name} artlink={artlink} desc={desc} genre={genre} altgenre={altgenre}/>
    </div>

  );
}

export default App;
