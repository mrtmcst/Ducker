function endGame(reason) {
  // Victory
  if (reason === 'duck-arrived') {
    endGameText.innerHTML = 'YOU<br>WIN!';
    endGameScreen.classList.add('win');
  }

  gridMatrix[duckPosition.y][duckPosition.x] = reason;

  clearInterval(countdownLoop);
  clearInterval(renderLoop);

  document.removeEventListener('keyup', moveDuck);
  endGameScreen.classList.remove('hidden');
}

function countdown() {
  if (time !== 0){
  time--;
  timer.innerText =time.toString().padStart(5, '0')
  };

  if (time === 0) {
    endGame();
  }
}
