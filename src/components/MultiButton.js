import React from "react";

function MultiButton() {
  // When we want to handle a click we use a handleClick function
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }
// to put a clikc handler on an element we use the onClick={handleClick}
  return (
    <div>
      <button onClick={handleClick}>Button 1</button>
      <button onClick={handleClick}>Button 2</button>
      <button onClick={handleClick}>Button 3</button>
    </div>
  );
}

export default MultiButton;
