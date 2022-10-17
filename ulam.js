// x and y value of current number
let x, y;
let px, py;
// start at 1
let step = 1;
// for 5x5 grid in a 500x500 canvas, each 'step' is 100 pixels
let stepSize = 5;
let numSteps = 1;
let state = 0;
let turnCounter = 1;
let totalSteps;

const isPrime = (num) => {
  if (1 >= num) return false;
  for (let i = 2; i <= sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function setup() {
  createCanvas(500, 500);
  // start in middle of canvas
  x = width / 2;
  y = height / 2;
  px = x;
  py = y;

  const cols = width / stepSize;
  const rows = height / stepSize;
  totalSteps = cols * rows;
  background(0);
}

function draw() {
  fill(255);
  stroke(255);
  if (isPrime(step)) circle(x, y, stepSize * 0.25);
  line(x, y, px, py);

  // assign new previous values
  px = x;
  py = y;

  switch (state) {
    case 0:
      x += stepSize;
      break;
    case 1:
      y -= stepSize;
      break;
    case 2:
      x -= stepSize;
      break;
    case 3:
      y += stepSize;
      break;
    default:
      break;
  }

  // iterate values for next step
  if (step % numSteps === 0) {
    state = (state + 1) % 4;
    turnCounter++;
    if (turnCounter % 2 === 0) numSteps++;
  }
  step++;

  if (step > totalSteps) noLoop();
}
