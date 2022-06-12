'use strict';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Guess input is empty and response
  if (!guess) {
    document.querySelector('.message').textContent = ' No number!';
  }
});
