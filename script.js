'use strict';

//Secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When is no input
  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number!');

    //Change UI when user win
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = 'Too low!';
  //   score--;
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //    document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   document.querySelector('.score').textContent = score;
  // }
});
