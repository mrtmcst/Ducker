function render() {
  placeDuck();
  checkPosition();
  drawGrid();
}

const renderLoop = setInterval(function () {
  updateDuckPosition();
  animateGame();
  render();
}, 600);

const countdownLoop = setInterval(countdown, 1000);
