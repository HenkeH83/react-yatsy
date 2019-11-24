import React, { useState } from 'react'
import './styles/BoardStyles.css'

const Board = () => {

  const [activeDices, setActiveDice] = useState([0,0,0,0,0])
  const [savedDices, setSavedDice] = useState([])
  const [rollsCount, setRollsCount] = useState(0)

  const rollDice = () => {
    const rolledDice = activeDices.map(dice =>
      dice = Math.floor(Math.random() * 6 + 1)
    )
    setRollsCount(rollsCount + 1)
    setActiveDice(rolledDice)
    checkForEnd() //  ta bort sen
  }

  const keepDice = (diceToKeep, index) => {
    activeDices.splice(index, 1)
    setActiveDice([...activeDices])
    setSavedDice([...savedDices, diceToKeep])
  }

  const discardDice = (diceToDiscard, index) => {
    savedDices.splice(index, 1)
    setSavedDice([...savedDices])
    setActiveDice([...activeDices, diceToDiscard])
  }

  const checkForEnd = () => {
    if(rollsCount >= 3){
      resetState()
    }
  }

  const resetState = () => {
    console.log('reseting')
    setActiveDice([0,0,0,0,0])
    setSavedDice([])
    setRollsCount(0)
  }

  return (
    <div className="mainBoard">
        <div className="diceBoard">
          {savedDices.map((savedDice, index) =>
            <div className="dice">
              <p>{savedDice}</p>
              <button onClick={() => discardDice(savedDice, index)}>
                Discard
              </button>
            </div>
          )}
          </div>
          <div className="diceBoard">
          {activeDices.map((activeDice, index) =>
            <div className="dice">
              <p>{activeDice}</p>
              <button onClick={() => keepDice(activeDice, index)}>
                Keep
              </button>
            </div>
          )}
        </div>
        <p>Rolls: {rollsCount}</p>
      <button id="rollBtn" onClick={() => rollDice()}>
        Roll
      </button>
    </div>
  );
}

export default Board;
