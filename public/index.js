const app = function () {
  const canvas = document.getElementById('main-canvas');
  const context = canvas.getContext('2d');

  let currentX = 300;
  let currentY = 250;

  context.beginPath();
  context.moveTo(currentX, currentY);

  const checkKey = function (event) {
    if (event.key === 'ArrowLeft') {
      leftArrow();
    } else if (event.key === 'ArrowUp') {
      upArrow();
    } else if (event.key === 'ArrowRight') {
      rightArrow();
    } else if (event.key === 'ArrowDown') {
      downArrow();
    } else if (event.key === 'Backspace') {
      clearAll();
    }
  }

  const leftArrow = function () {
    if (currentX !== 0) currentX -= 5;
    drawLine();
  }
  const rightArrow = function () {
    if (currentX !== canvas.width) currentX += 5;
    drawLine();
  }
  const upArrow = function () {
    if (currentY !== 0) currentY -= 5;
    drawLine();
  }
  const downArrow = function () {
    if (currentY !== canvas.height) currentY += 5;
    drawLine();
  }

  const drawLine = function () {
    context.lineTo(currentX, currentY);
    context.stroke();
  }

  const clearAll = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
  }

  document.addEventListener('keydown', checkKey);
  document.addEventListener('keypress', checkKey);

}

document.addEventListener('DOMContentLoaded', app);
