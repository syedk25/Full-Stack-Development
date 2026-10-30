const canvas = document.getElementById('blasterCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Confetto {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = Math.random() * 15 + 5;
    this.speedX = (Math.random() - 0.5) * 8;
    this.speedY = (Math.random() - 0.5) * 8;
    this.gravity = 0.1;
    this.opacity = 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.y += this.gravity;
    this.opacity -= 0.01;
  }

  draw() {
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

const confetti = [];

// Function to create confetti burst
function createBurst(x, y) {
  const colors = ['#f44336', '#2196F3', '#4CAF50', '#FFEB3B', '#9C27B0'];

  for (let i = 0; i < 300; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const confetto = new Confetto(x, y, color);
    confetti.push(confetto);
  }
}

// Event listener for canvas click to start confetti animation
canvas.addEventListener('click', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  createBurst(mouseX, mouseY);
  animate();
});

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < confetti.length; i++) {
    confetti[i].update();
    confetti[i].draw();

    if (confetti[i].opacity <= 0) {
      confetti.splice(i, 1);
      i--;
    }
  }

  if (confetti.length > 0) {
    requestAnimationFrame(animate);
  }
}
