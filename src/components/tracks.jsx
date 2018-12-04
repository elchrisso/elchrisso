import React, { Component } from "react";
import { div } from "@tensorflow/tfjs";

class Tracks extends Component {
  state = {
    tracks: [
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/344723487&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340393642&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335639952&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/330843107&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    ]
  };
  render() {
    return (
      <div>
        {this.state.tracks.map(track => (
          <iframe
            width="100%"
            height="166"
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

export default Tracks;
