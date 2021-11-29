import Navi from "./Navi.js";
import "./App.css";
import Card from "./Card.js";
import Auth from "./Auth.js";
import Manga from "./Manga.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Footer from "./Foot.js";
import Lists from "./Lists.js";
import Register from "./Register.js";

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
              <Route path="/Lists">
                <Lists />
              </Route>
              <Route path="/Register">
                <Register />
              </Route>
            </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
