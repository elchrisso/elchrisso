import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./components/home";
import Tracks from "./components/tracks";
import Mixes from "./components/mixes";
import MusicBox from "./components/musicBox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/mixes" component={Mixes} />
        <Route path="/musicbox" component={MusicBox} />
        <Route path="/tracks" component={Tracks} />
      </div>
    );
  }
}

export default App;
