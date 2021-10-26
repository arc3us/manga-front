import Navi from "./Navi.js";
import "./App.css";
import Card from "./Card.js";
import Auth from "./Auth.js";
import Manga from "./Manga.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js";

const name = "trial";
const artlink = "https://thiscatdoesnotexist.com/";
const desc = "This is a manga about something something";
const genre = "fantasy";
const altgenre = "mecha";

function App(props) {
  return (
    <Router>
      <div>
        <Navi />
        <div className="content">
            <Switch>
            <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/index">
                <Home />
              </Route>
              <Route path="/Auth">
                <Auth />
              </Route>
              <Route path="/Manga">
                <Manga />
              </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
