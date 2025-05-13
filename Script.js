const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 300;

let hero = {
  x: 50,
  y: 250,
  width: 30,
  height: 30,
  color: "red",
  vy: 0,
  gravity: 1,
  jumpPower: -15,
  onGround: true
};

function drawHero() {
  ctx.fillStyle = hero.color;
  ctx.fillRect(hero.x, hero.y, hero.width, hero.height);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawHero();

  hero.vy += hero.gravity;
  hero.y += hero.vy;

  if (hero.y + hero.height > canvas.height) {
    hero.y = canvas.height - hero.height;
    hero.vy = 0;
    hero.onGround = true;
  }

  requestAnimationFrame(update);
}

window.addEventListener("keydown", function (e) {
  if (e.code === "Space" && hero.onGround) {
    hero.vy = hero.jumpPower;
    hero.onGround = false;
  }
});

update();
