let d = 50;
let x = d/2;
let y = 0;
let speed = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(4);
  y = windowHeight / 2;
}

function draw() {
  background(0);
  stroke(255);

  ellipse(x, y, d, d);

  if (x > windowWidth - d/2) {
    speed = -speed;
  }
  else if (x < d/2)  {
    speed = -speed;
  }
  x += speed;

}
