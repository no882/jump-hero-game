// Hero selection
const hero = document.getElementById("hero");

// Gravity and jump settings
let positionY = 0;
let velocityY = 0;
let gravity = 0.8;
let jumpStrength = -15;
let isJumping = false;

// Handle jump on screen tap or spacebar
function jump() {
    if (!isJumping) {
        velocityY = jumpStrength;
        isJumping = true;
    }
}

// Update hero position
function update() {
    velocityY += gravity;
    positionY += velocityY;

    if (positionY >= 0) {
        positionY = 0;
        velocityY = 0;
        isJumping = false;
    }

    hero.style.transform = `translateY(${positionY}px)`;

    requestAnimationFrame(update);
}

// Controls
document.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "ArrowUp") {
        jump();
    }
});

document.addEventListener("touchstart", jump);

// Start the loop
update();
