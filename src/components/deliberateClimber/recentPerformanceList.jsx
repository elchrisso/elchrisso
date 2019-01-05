import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const LAST_7_DAYS = gql`
  query($one_week_ago: date!) {
    dc_workout(where: { executed: { _gte: $one_week_ago } }) {
      id
      executed
      type
      location
    }
  }
`;

export const RecentPerformanceList = ({ one_week_ago }) => {
  return (
    <Query query={LAST_7_DAYS} variables={{ one_week_ago }}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;

        return data.dc_workout.map(({ id, executed, type, location }) => (
          <div key={id}>
            <p>
              {executed} - {type} - {location}
            </p>
          </div>
        ));
      }}
    </Query>
  );
};
