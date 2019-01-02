import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

class Home extends Component {
  state = {};
  render() {
    return (
      <Jumbotron class="container-fluid">
        <h1>Welcome!</h1>
        <p>
          I am Chris. This is my site. I built it using react.js for frontend,
          reactstrap for markup, apollo to talk to a hasura-generated heroku
          backend for the data, there's even a little magenta.js instantiated
          and waiting to get put to better use...
        </p>
      </Jumbotron>
    );
  }
}

export default Home;
