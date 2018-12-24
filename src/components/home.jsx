import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div class="container-fluid">
        <h1>Welcome!</h1>
        <p>
          I am Chris. This is my site. I built it using react.js for frontend,
          apollo to talk to a hasura-generated heroku backend for the data,
          theres even a little magenta.js instantiated and waiting to get put to
          better use...
        </p>
      </div>
    );
  }
}

export default Home;
