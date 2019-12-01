import React from "react";

const DiceToDiscard = props => {
  return (
    <div className="diceBoard">
      {props.savedDices.map((savedDice, index) => (
        <div className="dice" key={index}>
          <p>{savedDice}</p>
          <button onClick={() => props.discardDice(savedDice, index)}>
            Discard
          </button>
        </div>
      ))}
    </div>
  );
};

export default DiceToDiscard;
