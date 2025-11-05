const images = [
  'img1.jpg', 'img2.png', 'img3.png',
  'img4.png', 'img5.png', 'img6.png',
  'img1.jpg', 'img2.png', 'img3.png',
  'img4.png', 'img5.png', 'img6.png'
];

images.sort(() => 0.5 - Math.random());

const board = document.getElementById('gameBoard');
const triesDisplay = document.getElementById('tries');
const message = document.getElementById('message');

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let tries = 0;
let matchedPairs = 0;

images.forEach(src => {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = 'images/' + src;
  card.appendChild(img);

  card.addEventListener('click', () => flipCard(card));

  board.appendChild(card);
});

function flipCard(card) {
  if (lockBoard || card === firstCard) return;

  card.classList.add('flipped');

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  tries++;
  triesDisplay.textContent = `Обиди: ${tries}`;

  checkMatch();
}

function checkMatch() {
  const match = firstCard.querySelector('img').src === secondCard.querySelector('img').src;

  if (match) {
    disableCards();
  } else {
    unflipCards();
  }
}


function disableCards() {
  firstCard.removeEventListener('click', () => flipCard(firstCard));
  secondCard.removeEventListener('click', () => flipCard(secondCard));

  matchedPairs++;

  if (matchedPairs === 6) {
    showMessage();
  }

  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoard();
  }, 1000);
}
function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

function showMessage() {
  const result = window.confirm(`Браво! Ги најде сите парови за ${tries} обиди.\nДали сакаш да играш повторно?`);
}