/* Imports */
    import { getRandomItem }'./utils.js';

/* State */
const shellsTriplet = ['guessShell1', 'guessShell2', 'guessShell3']

let total = 0
let losses = 0
let wins = 0


/* Actions */
function loadPage() {
    displayShells();
}

/* Components */
/* scoreboard */

/* guess */

/* Component */
// get DOM
const guessShell1 = document.getElementById('guess-guessShell1');
const guessShell2 = document.getElementById('guess-guessShell2');
const guessShell3 = document.getElementById('guess-guessShell3');
// display
// function displayGuess() {
//     guessShell1.classList.remove('Found It!', 'Not Here!');
//     guessShell2.classList.remove('Found It!', 'Not Here!');
//     guessShell3.classList.remove('Found It!', 'Not Here!');
// }
 
// DOM
const results = document.getElementById('')

// display
function displayShells () {
    if(gameState === 'guess')
        results.classList.add('hidden');
}
// event listeners

/* Run page load code */
loadPage();
