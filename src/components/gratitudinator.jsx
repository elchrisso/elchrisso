import React, { Component } from "react";

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

  handleAddItem = () => {
    const items = [...this.state.data];
    items.push({
      date: new Date(),
      description: "this is a new item for which i am grateful."
    });
    console.log("handleAddItem");
    this.setState({ data: items });
  };

  render() {
    return (
      <React.Fragment>
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
        <button className="btn btn-primary" onClick={this.handleAddItem}>
          Add Item
        </button>
        <h1>real data</h1>
      </React.Fragment>
    );
  }
}

export default Gratitudinator;
