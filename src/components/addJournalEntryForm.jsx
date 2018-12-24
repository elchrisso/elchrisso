import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CREATE_JOURNAL_ENTRY = gql`
  mutation create_journal_entry($entry: String!) {
    insert_dev_journal_entry(objects: [{ entry: $entry }]) {
      affected_rows
    }
  }
`;

class AddJournalEntryForm extends Component {
  state = {
    journalEntry: {
      text: ""
    }
  };

  handleEntryTextChange = e => {
    const journalEntry = { ...this.state.journalEntry };
    journalEntry.text = e.currentTarget.value;
    this.setState({ journalEntry });
  };

  render() {
    return (
      <Mutation mutation={CREATE_JOURNAL_ENTRY}>
        {(create_journal_entry, { data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                create_journal_entry({
                  variables: {
                    entry: this.state.journalEntry.text
                  }
                });
              }}
            >
              <div className="form-group">
                <textArea
                  class="form-control"
                  value={this.state.journalEntry.text}
                  id="entryText"
                  type="text"
                  onChange={this.handleEntryTextChange}
                  rows="6"
                  placeholder="Dev journal entry for today..."
                />
              </div>
              <button className="btn btn-primary">Add Entry</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default AddJournalEntryForm;
