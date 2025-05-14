const hero = document.getElementById("hero");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");
const jumpSound = document.getElementById("jumpSound");

let score = 0;
let isJumping = false;

document.getElementById("jumpBtn").addEventListener("click", () => {
  if (!isJumping) {
    jump();
    jumpSound.play();
  }
});

function jump() {
  isJumping = true;
  let jumpHeight = 0;
  let upInterval = setInterval(() => {
    if (jumpHeight >= 100) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (jumpHeight <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          jumpHeight -= 5;
          hero.style.bottom = 10 + jumpHeight + "px";
        }
      }, 20);
    } else {
      jumpHeight += 5;
      hero.style.bottom = 10 + jumpHeight + "px";
    }
  }, 20);
}

// Collision detection
setInterval(() => {
  let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("bottom"));
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));

  if (obstacleLeft < (window.innerWidth - 100) && obstacleLeft > (window.innerWidth - 150) && heroTop < 60) {
    alert("گیم ختم! تمہارا سکور: " + score);
    location.reload();
  } else if (obstacleLeft === window.innerWidth - 60) {
    score++;
    scoreDisplay.innerText = "سکور: " + score;
  }
}, 50);
