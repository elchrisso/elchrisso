import React, { Component } from "react";
import * as mm from "@magenta/music";

class MusicBox extends Component {
  constructor() {
    super();
    this.state = {
      model: new mm.MusicVAE(
        "https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/drums_lokl_small"
      ),
      TWINKLE_TWINKLE: {
        notes: [
          { pitch: 60, startTime: 0.0, endTime: 0.5 },
          { pitch: 60, startTime: 0.5, endTime: 1.0 },
          { pitch: 67, startTime: 1.0, endTime: 1.5 },
          { pitch: 67, startTime: 1.5, endTime: 2.0 },
          { pitch: 69, startTime: 2.0, endTime: 2.5 },
          { pitch: 69, startTime: 2.5, endTime: 3.0 },
          { pitch: 67, startTime: 3.0, endTime: 4.0 },
          { pitch: 65, startTime: 4.0, endTime: 4.5 },
          { pitch: 65, startTime: 4.5, endTime: 5.0 },
          { pitch: 64, startTime: 5.0, endTime: 5.5 },
          { pitch: 64, startTime: 5.5, endTime: 6.0 },
          { pitch: 62, startTime: 6.0, endTime: 6.5 },
          { pitch: 62, startTime: 6.5, endTime: 7.0 },
          { pitch: 60, startTime: 7.0, endTime: 8.0 }
        ],
        totalTime: 8
      },
      player: new mm.SoundFontPlayer(
        "https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus"
      )
    };
  }

  play = () => {
    this.state.player.start(this.state.TWINKLE_TWINKLE);
  };

  stop = () => {
    this.state.player.stop();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.play}
            >
              Play
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.stop}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicBox;
