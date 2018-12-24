import React, { Component } from "react";
import { JournalEntries } from "./journalEntries";
import AddJournalEntryForm from "./addJournalEntryForm";

class DevJournal extends Component {
  render() {
    return (
      <div class="container-fluid">
        <h1>this is the devJournal</h1>
        <JournalEntries />
        <AddJournalEntryForm />
      </div>
    );
  }
}

export default DevJournal;
