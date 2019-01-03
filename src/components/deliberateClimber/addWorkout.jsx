import React, { Component } from "react";
import gql from "graphql-tag";

const CREATE_WORKOUT = gql`
  mutation create_workout_entry(
    $executed: date!
    $type: String!
    $location: String!
    $minutes: Int!
    $start_time: timetz!
  ) {
    insert_dc_workout(
      objects: [
        {
          executed: $executed
          type: $type
          location: $location
          minutes: $minutes
          start_time: $start_time
        }
      ]
    ) {
      affected_rows
    }
  }
`;

class AddWorkout extends Component {
  state = {};
  render() {
    return <h1>Add Workout</h1>;
  }
}

export default AddWorkout;
