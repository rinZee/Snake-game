import React, { useState, useEffect } from "react";
import "./App.css";

const getRandomCoordinates = () => {
let min = 1;
let max = 98;
let x = Math.floor((Math.random()*(max-min+1)+min)/2)+2;
let y = Math.floor((Math.random()*(max-min+1)+min)/2)+2;
return [x, y];
}
function App() {
  const [state, setState] = useState({
    direction: "Right",
    food: getRandomCoordinates(),
    snakeDots :[[0, 0],
    [2, 0]]
  });
  useEffect(() => window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if event already handled
    }
    switch(event.code) {
      case 'ArrowUp':
        setState(prevState => ({
          ...prevState,direction:"Up",
        }))
        break;
        case 'ArrowDown':
          setState(prevState => ({
            ...prevState,direction:"Down",
          }))
        break;
        case 'ArrowLeft':
          setState(prevState => ({
            ...prevState,direction:"Left",
          }))
        break;
        case 'ArrowRight':
          setState(prevState => ({
            ...prevState,direction:"Right"}))
        break;
    }
  }))
  
  
  return (
    <div className="game-area">
      {state.snakeDots.map((dot, i) => (
        <div
          className="snake-dot"
          key={i}
          style={{ left: `${dot[0]}%`, top: `${dot[1]}%` }}
        ></div>
      ))}
      <div
          className="food-dot"
          style={{ left: `${state.food[0]}%`, top: `${state.food[1]}%` }}
        ></div>
    </div>
  );
}

export default App;
