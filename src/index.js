//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const name = "Mani";
const num = 4;
ReactDOM.render(
  <div>
    <h1>{name}'s List</h1>
    <h4>My favourite number is {num}</h4>
    <ul>
      <li>Breakfast</li>
      <li>Lunch</li>
      <li>Dinner</li>
    </ul>
  </div>,
  document.getElementById("root")
);
