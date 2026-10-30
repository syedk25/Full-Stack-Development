const canvas = document.getElementById('drawCanvas');
const context = canvas.getContext('2d');

let painting = false;

function start(e) {
  painting = true;
  draw(e);
}

function end() {
  painting = false;
  context.beginPath();
}

function draw(e) {
  if (!painting) return;

  context.lineWidth = 5;
  context.lineCap = 'round';
  context.strokeStyle = 'black';

  context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  context.stroke();
 

}

canvas.addEventListener('mousedown', start);
canvas.addEventListener('mouseup', end);
canvas.addEventListener('mousemove', draw);
