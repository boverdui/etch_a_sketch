const app = function () {
  const canvas = document.getElementById('main-canvas');
  const context = canvas.getContext('2d');

  let startX = 300;
  let startY = 250;
  let currentX = startX;
  let currentY = startY;

  context.beginPath();
  context.moveTo(startX, startY);

  const checkKey = function (event) {
    if (event.key === 'ArrowLeft') {
      leftArrow();
    } else if (event.key === 'ArrowUp') {
      upArrow();
    } else if (event.key === 'ArrowRight') {
      rightArrow();
    } else if (event.key === 'ArrowDown') {
      downArrow();
    }
  }

  const leftArrow = function () {
    currentX -= 10;
    context.lineTo(currentX, currentY);
    context.stroke();
  }
  const rightArrow = function () {
    currentX += 10;
    context.lineTo(currentX, currentY);
    context.stroke();
  }
  const upArrow = function () {
    currentY -= 10;
    context.lineTo(currentX, currentY);
    context.stroke();
  }
  const downArrow = function () {
    currentY += 10;
    context.lineTo(currentX, currentY);
    context.stroke();
  }

  document.addEventListener('keydown', checkKey);
}

document.addEventListener('DOMContentLoaded', app);
