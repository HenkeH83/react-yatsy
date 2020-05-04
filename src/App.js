import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board.js'

function App() {
  let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('nu vart det triggat :)');
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  // showInstallPromotion();
});

const runDownLoad (e) => {
  console.log('Knappen är tryckt');
  // Hide the app provided install promotion
  // hideMyInstallPromotion();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }
  })
});

  return (
    <div className="App">
      <div className="App-logo">
        <img src={logo} alt="logo" />
        <button onClick={() => runDownLoad()}>Download app :)</button>
      </div>
      <Board />
    </div>
  );
}

export default App;
