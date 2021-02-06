import React from "react"
import EmojiCard from "./EmojiCard";
import emojipedia from '../emojipedia'

function cardPrinter(item) {
  return(
    <EmojiCard 
    emoji={item.emoji}
    name = {item.name}
    meaning = {item.meaning}
  />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(cardPrinter)}
      </dl>
    </div>
  );
}

export default App;
