/* Imports */
    import { getRandomItem }'./utils.js';

/* State */
let gameState = 'guess';
let guess = '';
let result = '';
let reveal = '';

let total = 0;
let wins = 0;

/* Actions */
function loadPage() {
    displayShells();
    displayScoreboard();
}


/* Components */

const totalDisplay = document.getElementById('total-Display');
const winsDisplay = document.getElementById('wins-Display');
const lossesDisplay = document.getElementById('losses-Display');

function displayScoreboard() {
    totalDisplay.textContent = total;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;





// get DOM

}
// display

}
// event listeners

/* Run page load code */
loadPage();
