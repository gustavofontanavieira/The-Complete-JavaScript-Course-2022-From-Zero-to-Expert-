'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Corretct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23; */

let secretNumberGenerated = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const typedValue = Number(document.querySelector('.guess').value);

  //No input
  if (!typedValue) {
    displayMessage('No number! 😡');

    //Win
  } else if (typedValue === secretNumberGenerated) {
    document.querySelector('.number').textContent = secretNumberGenerated;
    displayMessage('Corretct Number 🎆🎆🧨');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (typedValue !== secretNumberGenerated) {
    if (score > 1) {
      displayMessage(
        typedValue > secretNumberGenerated ? 'Too high! 😐' : 'Too low! 😐'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('❗ You lost the game 😐');
    }

    //typed number too high
    /*   } else if (typedValue > secretNumberGenerated) {
    if (score > 1) {
      document.querySelector('.message').textContent =
     
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '❗ You lost the game 😐';
    } */
    /*   //typed number too low
  } else if (typedValue < secretNumberGenerated) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low! 😐';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '❗ You lost the game 😐';
    }
  } */
  }
});

document.querySelector('.again').addEventListener('click', () => {
  console.log('CLICADO');
  secretNumberGenerated = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
