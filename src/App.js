import React, { useState } from "react";
import "./App.css";
function App() {
  const [snakeDots, setDots] = useState([
    [0, 0],
    [2, 0],
  ]);

  return (
    <div className="game-area">
      {snakeDots.map((dot, i) => (
        <div
          className="snake-dot"
          key={i}
          style={{ left: `${dot[0]}%`, top: `${dot[1]}%` }}
        ></div>
      ))}
    </div>
  );
}

export default App;
