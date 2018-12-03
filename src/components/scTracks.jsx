import React, { Component } from "react";

class SCTracks extends Component {
  state = {
    tracks: [
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/453378441&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167602798&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
    ]
  };
  render() {
    return (
      <div>
        {this.state.tracks.map(track => (
          <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src={track}
          />
        ))}
      </div>
    );
  }
}

export default SCTracks;
