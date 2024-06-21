const ui = {
  startButton: document.getElementById('startButton'),
  addCardButton: document.getElementById('addCardButton'),
  gameStatus: document.getElementById('gameStatus'),
  sumDisplay: document.getElementById('sumDisplay')
};

let randomSum;
let sumOfCards = 0;

ui.startButton.addEventListener('click', () => {
  randomSum = Math.floor(Math.random() * 50) + 1;
  sumOfCards = 0;
  ui.sumDisplay.textContent = sumOfCards
  ui.gameStatus.textContent = 'Game started';
});

ui.addCardButton.addEventListener('click', () => {
  const cardValue = Math.floor(Math.random() * 11) + 1;
  sumOfCards += cardValue;
  ui.sumDisplay.textContent = sumOfCards;

  if (sumOfCards === randomSum) {
    ui.gameStatus.textContent = 'You win!';
    ui.addCardButton.disabled = true;
  } else if (sumOfCards < randomSum) {
    ui.gameStatus.textContent = 'Keep going!';
    ui.addCardButton.disabled = false;
  } else {
    ui.gameStatus.textContent = 'You lose!';
    ui.addCardButton.disabled = true;
  }
});
