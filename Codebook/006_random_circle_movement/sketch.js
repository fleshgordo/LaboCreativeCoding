let x = 0;
let y = 0;
// change steps
let steps = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth /2;
  y = windowHeight /2;
}

function draw() {

  ellipse(x, y, 50, 50);

  // randomwalker
  x = x + random(-steps, steps);
  y = y + random(-steps, steps);
}

function mousePressed() {
  background(255);
}
