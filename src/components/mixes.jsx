import React, { Component } from "react";

class Mixes extends Component {
  state = {
    mixes: [
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/453378441&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167602798&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    ]
  };
  render() {
    return (
      <div class="container-fluid">
        {this.state.mixes.map(mix => (
          <iframe
            title={mix}
            key={mix}
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={mix}
          />
        ))}
      </div>
    );
  }
}

export default Mixes;
