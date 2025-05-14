
const hero = document.getElementById("hero");
let jumping = false;
let velocity = 0;
let gravity = 1;

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && !jumping) {
    jumping = true;
    velocity = -15;
  }
});

function update() {
  const heroTop = parseInt(window.getComputedStyle(hero).bottom);
  velocity += gravity;
  let newBottom = heroTop - velocity;

  if (newBottom <= 50) {
    newBottom = 50;
    velocity = 0;
    jumping = false;
  }

  hero.style.bottom = newBottom + "px";
  requestAnimationFrame(update);
}

update();
// موبائل کے لیے touch control
document.addEventListener("touchstart", function () {
    jump();
});
document.getElementById("jumpBtn").addEventListener("click", function () {
  jump();
});
function jump() {
  if (!jumping) {
    jumping = true;
    velocity = -15;

    // Play sound
    const sound = document.getElementById("jumpSound");
    sound.currentTime = 0;
    sound.play();
  }
}
