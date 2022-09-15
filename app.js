import { getRandomItem } from './utils.js';

let gameState = 'guess';
let total = 0;
let wins = 0;
let losses = 0;

const results = document.getElementById('results');

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const totalDisplay = document.getElementById('total-display');
const lossesDisplay = document.getElementById('losses-display');
const winsDisplay = document.getElementById('wins-display');

const guesses = ['shellOne', 'shellTwo', 'shellThree'];

const guessOne = document.getElementById('guess-1');
const guessTwo = document.getElementById('guess-2');
const guessThree = document.getElementById('guess-3');
const guessContainer = document.getElementById('guesses');
const playAgainButton = document.getElementById('play-again-button');
let correctPosition = getRandomItem(guesses);

function loadPage() {
    displayShells();
}

function handleGuess(userGuess) {
    total++;
    totalDisplay.textContent = total;
    if (userGuess === correctPosition) {
        wins++;
        winsDisplay.textContent = wins;
    } else {
        losses++;
        lossesDisplay.textContent = losses;
    }

    if (correctPosition === 'shellOne') {
        pearl1.classList.remove('hidden');
        shell1.classList.add('reveal');
    }
    if (correctPosition === 'shellTwo') {
        pearl2.classList.remove('hidden');
        shell2.classList.add('reveal');
    }
    if (correctPosition === 'shellThree') {
        pearl3.classList.remove('hidden');
        shell3.classList.add('reveal');
    }
    guessContainer.classList.add('hidden');
    playAgainButton.classList.remove('hidden');
    correctPosition = getRandomItem(guesses);
}

function displayShells() {
    if (gameState === 'guess') {
        results.classList.add('reveal');
        pearl1.classList.add('hidden');
        pearl2.classList.add('hidden');
        pearl3.classList.add('hidden');
        shell1.classList.remove('reveal');
        shell2.classList.remove('reveal');
        shell3.classList.remove('reveal');
    } else {
        results.classList.remove('hidden');
    }
}

function playAgain() {
    displayShells();
    playAgainButton.classList.add('hidden');
    guessContainer.classList.remove('hidden');
}

playAgainButton.addEventListener('click', () => playAgain());
guessOne.addEventListener('click', () => handleGuess('shellOne'));
guessTwo.addEventListener('click', () => handleGuess('shellTwo'));
guessThree.addEventListener('click', () => handleGuess('shellThree'));

loadPage();
