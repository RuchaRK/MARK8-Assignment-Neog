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
  "🎑": "Moon Viewing Ceremony",
  "🎡": "Ferris Wheel",
  "🎢": " Roller Coaster",
  "🌆": "CityScrap at Dusk",
  "🕍": "Synagogue"
};
var travelSymbol = Object.keys(emojiDictionery);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    var userInput = event.target.value;

    meaning = emojiDictionery[userInput];
    if (meaning === undefined) {
      meaning = "Select a emoji from below list";
    }

    setMeaning(meaning);
  }

  function clickHandler(item) {
    meaning = emojiDictionery[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Hey do u love travelling!</h1>
      <p> Lets know some travel emojis..</p>
      <h3> Select a emoji </h3>
      <input onChange={changeHandler}></input>
      <h2>{meaning}</h2>

      {travelSymbol.map(function showMeaning(item) {
        return (
          <span
            key={item}
            style={{
              cursor: "pointer",
              fontSize: "2rem",
              padding: "1rem",
              margin: "1rem"
            }}
            onClick={() => clickHandler(item)}
          >
            {" "}
            {item}
          </span>
        );
      })}
    </div>
  );
}
