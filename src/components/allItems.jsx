import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const AllItems = () => (
  <Query
    query={gql`
      {
        item {
          description
          created
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.item.map(({ description, created }) => (
        <tr key={description}>
          <td>{created}</td>
          <td>{description}</td>
        </tr>
      ));
    }}
  </Query>
);
