import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ALL_ENTRIES = gql`
  {
    dev_journal_entry {
      entry
      created
    }
  }
`;

export const JournalEntries = () => (
  <Query query={ALL_ENTRIES}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      return data.dev_journal_entry.map(({ entry, created }) => (
        <div>
          <h6>{created}</h6>
          <p>{entry}</p>
        </div>
      ));
    }}
  </Query>
);
