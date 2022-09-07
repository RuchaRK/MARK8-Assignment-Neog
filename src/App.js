import React, { useState } from "react";
import "./styles.css";

var emojiDictionery = {
  "🚣": "Person Rowing Boat",
  "🏕️": "Camping",
  "🏖️": "Beach",
  "🏞️": "National Park",
  "🗻": "Mount Fuji",
  "🏔️": "Snow-Capped Mountain",
  "🗼": "Tokyo Tower",
  "🎠": "Carousel Horse",
  "🎑": "Moon Viewing Ceremony"
};
var travelSymbol = Object.keys(emojiDictionery);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    var userInput = event.target.value;
    meaning = emojiDictionery[userInput];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Hey are u intrested in Flags!</h1>
      <input onChange={changeHandler}></input>
      <h2>{meaning}</h2>
      <h3>Please select a emoji from the below shown emojis</h3>
      <p>{travelSymbol}</p>
    </div>
  );
}
