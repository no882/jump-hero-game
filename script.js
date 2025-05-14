const player = document.getElementById('player');
const platform = document.getElementById('platform');
const scoreDisplay = document.getElementById('score');

let position = 50;
let score = 0;
let gravity = 2;
let isJumping = false;

function jump() {
  if (!isJumping) {
    isJumping = true;
    let jumpHeight = 0;
    const jumpInterval = setInterval(() => {
      if (jumpHeight >= 100) {
        clearInterval(jumpInterval);
        fall();
      } else {
        position += 5;
        jumpHeight += 5;
        player.style.bottom = position + 'px';
      }
    }, 20);
  }
}

function fall() {
  const fallInterval = setInterval(() => {
    if (position <= 10) {
      clearInterval(fallInterval);
      isJumping = false;
      position = 10;
    } else {
      position -= gravity;
      player.style.bottom = position + 'px';
    }
  }, 20);
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    jump();
    score++;
    scoreDisplay.innerText = 'Score: ' + score;
  }
});