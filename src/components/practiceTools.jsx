//I had this idea that what I need to practice coding was a list of defined tasks, because 1)I believe that imagining and implementing are two very different modes and neither wants to concurrently share a single headspace with the other, 2)I frequently sit down to practice but have no specifics to work on, and 3) I start projects easily but do not get them to a place where I feel like they are finished.  So I might be feeling creative and look at a webpage and say "This needs three columns and a font and some colors and..." but as soon as I start coding, I lose that creative flow.  This tab on my site will be for recording ideas had during creative periods, so that they can be remembered with no effort, and built subsequently with al attention going to the implementation effort.

import React, { Component } from "react";

class PracticeTools extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>practice tools</h1>
        <p>
          This will be a component which displays something like checklists,
          abstracted or maybe generalized sufficiently such that they can be
          used for practice elsewhere, or on multiple pages/projects of my own.
        </p>
      </div>
    );
  }
}

export default PracticeTools;
