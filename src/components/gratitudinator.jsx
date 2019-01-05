import React, { Component } from "react";

import AddGratitudeForm from "./addGratitudeForm";
import { AllItems } from "./allItems";

class Gratitudinator extends Component {
  state = {
    data: [
      {
        id: 1,
        date: new Date(),
        description: "Accumulated technical knowledge from the last two years."
      },
      {
        id: 2,
        date: new Date(),
        description: "Apparently I still have excellent hearing."
      }
    ]
  };

  render() {
    return (
      <div className="container-fluid">
        <table className="table">
          <thead>
            <tr>
              <th>date</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <AllItems />
          </tbody>
        </table>
        <AddGratitudeForm />
      </div>
    );
  }
}

export default Gratitudinator;
