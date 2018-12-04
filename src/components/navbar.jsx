import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="fixed-top navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          this is elChrisso.
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/musicbox">
                MusicBox <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/tracks">
                Tracks <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/mixes">
                Mixes <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
