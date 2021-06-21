import React, { useState } from "react";

function App() {
  const [isMouseOver, setColor] = useState(false);

  function handleClick() {
    console.log("Clicked");
  }

  function onMouseOver() {
    setColor(true);
  }

  function onMouseOut() {
    setColor(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
