import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board.js'

function App() {
  let deferredPrompt;

   window.addEventListener('beforeinstallprompt', function(event) {
     console.log('event...');
     // Prevent Chrome 67 and earlier from automatically showing the prompt
     event.preventDefault();
     // Stash the event so it can be triggered later.
     deferredPrompt = event;
   });

   // Installation must be done by a user gesture! Here, the button click
   const runDownLoad = (e) => {
     console.log('knapp tryckt');
     // hide our user interface that shows our A2HS button
     // btnAdd.style.display = 'none';
     // Show the prompt
     deferredPrompt.prompt();
     // Wait for the user to respond to the prompt
     deferredPrompt.userChoice
       .then((choiceResult) => {
         if (choiceResult.outcome === 'accepted') {
           console.log('User accepted the A2HS prompt');
         } else {
           console.log('User dismissed the A2HS prompt');
         }
         deferredPrompt = null;
       });
   };

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
