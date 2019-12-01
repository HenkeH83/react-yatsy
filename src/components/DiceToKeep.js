import React from "react";

const DiceToKeep = props => {
  return (
    <div className="diceBoard">
      {props.activeDices.map((activeDice, index) => (
        <div className="dice" key={index}>
          <p>{activeDice}</p>
          <button onClick={() => props.keepDice(activeDice, index)}>
            Keep
          </button>
        </div>
      ))}
    </div>
  );
};

export default DiceToKeep;
