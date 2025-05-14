const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 360;
canvas.height = 480;

let score = 0;
let player = { x: 50, y: 400, w: 30, h: 30, dy: 0 };
let gravity = 0.6;
let jumpPower = -10;
let isJumping = false;
let obstacles = [];
let jumpSound = new Audio("jump.mp3");

document.addEventListener("keydown", e => {
  if (e.code === "Space" && !isJumping) {
    player.dy = jumpPower;
    isJumping = true;
    jumpSound.play();
  }
});

function createObstacle() {
  let width = 60;
  let height = 20;
  let x = Math.random() * (canvas.width - width);
  obstacles.push({ x, y: 0, w: width, h: height });
}

setInterval(createObstacle, 1500);

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  player.dy += gravity;
  player.y += player.dy;

  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
    isJumping = false;
  }

  ctx.fillStyle = "yellow";
  ctx.fillRect(player.x, player.y, player.w, player.h);

  ctx.fillStyle = "red";
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 3;
    ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].w, obstacles[i].h);

    if (
      player.x < obstacles[i].x + obstacles[i].w &&
      player.x + player.w > obstacles[i].x &&
      player.y < obstacles[i].y + obstacles[i].h &&
      player.y + player.h > obstacles[i].y
    ) {
      alert("Game Over! Score: " + score);
      window.location.reload();
    }

    if (obstacles[i].y > canvas.height) {
      score++;
      document.getElementById("score").innerText = "Score: " + score;
      obstacles.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(update);
}

update();
