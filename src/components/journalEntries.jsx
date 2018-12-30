import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const allEntries = gql`
  {
    dev_journal_entry {
      entry
      created
    }
  }
`;

export const JournalEntries = () => (
  <Query query={allEntries}>
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
