import React, { Component } from "react";
import { JournalEntries } from "./journalEntries";
import AddJournalEntryForm from "./addJournalEntryForm";

class DevJournal extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>this is the devJournal</h1>
        <div className="row">
          <aside className="col-sm-2">tags</aside>
          <div className="col-sm-8">
            <h3>Entries</h3>
            <JournalEntries />
            <AddJournalEntryForm className="row" />
          </div>
          <aside className="col-sm-2">date/title</aside>
        </div>
      </div>
    );
  }
}

export default DevJournal;
