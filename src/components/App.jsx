import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";
function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      name={emojiTerm.name}
      emoji={emojiTerm.emoji}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
