import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const CREATE_ITEM = gql`
  mutation CreateItem($description: String!) {
    insert_item(objects: [{ description: $description, user: 1 }]) {
      affected_rows
    }
  }
`;

class AddGratitudeForm extends Component {
  state = {
    itemOfGratitude: ""
  };

  handleChange = e => {
    const itemOfGratitude = e.currentTarget.value;
    this.setState({ itemOfGratitude });
  };

  render() {
    return (
      <Mutation mutation={CREATE_ITEM}>
        {(createItem, { data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                createItem({
                  variables: { description: this.state.itemOfGratitude }
                });
              }}
            >
              <div className="form-group">
                <label htmlFor="GratitudeItem">Grateful for</label>
                <input
                  value={this.state.itemOfGratitude}
                  onChange={this.handleChange}
                  id="GratitudeItem"
                  type="text"
                  className="form-control"
                />
              </div>
              <button className="btn btn-primary">Add Item</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default AddGratitudeForm;
