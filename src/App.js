import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board.js'

function App() {
  let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  console.log('nu vart det triggat :)');
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  // showInstallPromotion();
});

  return (
    <div className="App">
      <div className="App-logo">
        <img src={logo} alt="logo" />
        <button onClick={() => deferredPrompt}>Download app :)</button>
      </div>
      <Board />
    </div>
  );
}

export default App;
