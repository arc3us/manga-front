import Navi from "./Navi.js";
import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card.js";
import Auth from "./Auth.js";
import Manga from "./Manga.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Footer from "./Foot.js";
import Lists from "./Lists.js";
import Register from "./Register.js";
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';

function App() {
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
