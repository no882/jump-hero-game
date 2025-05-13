const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let hero = {
    x: 50,
    y: 350,
    width: 50,
    height: 50,
    color: "green",
    velocityY: 0,
    jumpForce: -12,
    gravity: 0.6,
    grounded: true
};

let keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
});

function update() {
    // Jump
    if (keys["Space"] && hero.grounded) {
        hero.velocityY = hero.jumpForce;
        hero.grounded = false;
    }

    hero.velocityY += hero.gravity;
    hero.y += hero.velocityY;

    if (hero.y + hero.height >= canvas.height) {
        hero.y = canvas.height - hero.height;
        hero.velocityY = 0;
        hero.grounded = true;
    }

    draw();
    requestAnimationFrame(update);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw hero
    ctx.fillStyle = hero.color;
    ctx.fillRect(hero.x, hero.y, hero.width, hero.height);
}

update();
