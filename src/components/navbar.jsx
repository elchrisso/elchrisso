import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          this is elChrisso.
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/musicbox">
                MusicBox <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/tracks">
                Tracks <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/mixes">
                Mixes <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/gratitudinator">
                Gratitudinator <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
