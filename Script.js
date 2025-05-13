const hero = document.getElementById('hero');
const obstacle = document.getElementById('obstacle');

document.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
    jump();
  }
});

function jump() {
  if (!hero.classList.contains('jump')) {
    hero.classList.add('jump');
    setTimeout(() => {
      hero.classList.remove('jump');
    }, 300);
  }
}

setInterval(function () {
  let heroBottom = parseInt(window.getComputedStyle(hero).getPropertyValue("bottom"));
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

  if (obstacleLeft < 100 && obstacleLeft > 0 && heroBottom <= 50) {
    alert("Game Over!");
    location.reload();
  }
}, 10);
