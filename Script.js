const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = {
  x: 50,
  y: canvas.height - 150,
  width: 50,
  height: 50,
  color: "red",
  velocityY: 0,
  gravity: 1,
  jumpForce: -20,
  grounded: false
};

function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();

  // Gravity
  player.velocityY += player.gravity;
  player.y += player.velocityY;

  // Ground
  if (player.y + player.height > canvas.height) {
    player.y = canvas.height - player.height;
    player.velocityY = 0;
    player.grounded = true;
  }

  requestAnimationFrame(update);
}

window.addEventListener("keydown", function (e) {
  if (e.code === "Space" && player.grounded) {
    player.velocityY = player.jumpForce;
    player.grounded = false;
  }
});

update();
