// HTML elements
const grid = document.querySelector('.grid');
const timer = document.querySelector('.timer');
const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('.end-game-text');
const playAgainButton = document.querySelector('.play-again');

// Grid
const gridMatrix = [
  ['', '', '', '', '', '', '', '', ''],
  ['river', 'wood', 'wood', 'river', 'wood', 'river', 'river', 'river', 'river'],
  ['river', 'river', 'river', 'wood', 'wood', 'river', 'wood', 'wood', 'river'],
  ['', '', '', '', '', '', '', '', ''],
  ['road', 'bus', 'road', 'road', 'road', 'car', 'road', 'road', 'road'],
  ['road', 'road', 'road', 'car', 'road', 'road', 'road', 'road', 'bus'],
  ['road', 'road', 'car', 'road', 'road', 'road', 'bus', 'road', 'road'],
  ['', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', ''],
];

// Game settings' variables
const victoryRow = 0;
const riverRows =[1, 2];
const roadRows =[4, 5, 6];
const duckPosition = { x: 4, y: 8 };
let contentBeforeDuck= '';
let time = 15;


// Playing Keys
document.addEventListener('keyup', moveDuck);
playAgainButton.addEventListener('click', function() {
  location.reload();
})
