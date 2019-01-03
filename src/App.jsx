import React, { Component } from "react";
import { Route } from "react-router-dom";

import CbNavbar from "./components/cbNavbar";
import Home from "./components/home";
import Tracks from "./components/tracks";
import Mixes from "./components/mixes";
import MusicBox from "./components/musicBox";
import Gratitudinator from "./components/gratitudinator";
import DevJournal from "./components/devJournal";
import PracticeTools from "./components/practiceTools";
import DeliberateClimber from "./components/deliberateClimber/deliberateClimber";
import DcAddWorkout from "./components/deliberateClimber/addWorkout";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <title>elchrissso</title>
        <CbNavbar />
        <Route exact path="/" component={Home} />
        <Route path="/mixes" component={Mixes} />
        <Route path="/musicbox" component={MusicBox} />
        <Route path="/tracks" component={Tracks} />
        <Route path="/devjournal" component={DevJournal} />
        <Route path="/gratitudinator" component={Gratitudinator} />
        <Route path="/practicetools" component={PracticeTools} />
        <Route exact path="/deliberateclimber" component={DeliberateClimber} />
        <Route path="/deliberateclimber/addworkout" component={DcAddWorkout} />
      </div>
    );
  }
}

export default App;
