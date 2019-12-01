import React, { useState } from "react";
import "./styles/BoardStyles.css";
import DiceToKeep from "./DiceToKeep";
import DiceToDiscard from "./DiceToDiscard";

const Board = () => {
  const [activeDices, setActiveDice] = useState([0, 0, 0, 0, 0]);
  const [savedDices, setSavedDice] = useState([]);
  const [rollsCount, setRollsCount] = useState(0);

  const rollDice = () => {
    const rolledDice = activeDices.map(
      dice => (dice = Math.floor(Math.random() * 6 + 1))
    );
    setRollsCount(rollsCount + 1);
    setActiveDice(rolledDice);
    checkForEnd(); //   ta bort sen
  };

  const keepDice = (diceToKeep, index) => {
    activeDices.splice(index, 1);
    setActiveDice([...activeDices]);
    setSavedDice([...savedDices, diceToKeep]);
  };

  const discardDice = (diceToDiscard, index) => {
    savedDices.splice(index, 1);
    setSavedDice([...savedDices]);
    setActiveDice([...activeDices, diceToDiscard]);
  };

  const checkForEnd = () => {
    if (rollsCount >= 3) {
      resetState();
    }
  };

  const resetState = () => {
    console.log("reseting");
    setActiveDice([0, 0, 0, 0, 0]);
    setSavedDice([]);
    setRollsCount(0);
  };

  return (
    <div className="mainBoard">
      <DiceToDiscard savedDices={savedDices} discardDice={discardDice} />
      <DiceToKeep activeDices={activeDices} keepDice={keepDice} />
      <p>Rolls: {rollsCount}</p>
      <button id="rollBtn" onClick={() => rollDice()}>
        Roll
      </button>
    </div>
  );
};

export default Board;
