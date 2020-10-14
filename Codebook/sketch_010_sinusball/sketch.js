let d = 50.;
let direction = true;
let x =  0;
let y = 0;
let speed = 1;
let angle = 50;
let angle2 = 50;
let speed2 = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(10);
  stroke(255);
  y = height / 2;
  x = width / 2;
}

function draw() {
  background(0);

  angle += speed;
  angle2 += speed2;
  let ang = radians(angle2 + PI);
  d = 100 * sin(ang);
  d2 = angle;

  ellipse(x, y-100, d, d);
  ellipse(x, y+100, d2, d2)

  if (d2 > 100) {
    speed = -speed;
  } else if (d2 < 10) {
    speed = -speed;
  }
  //x += speed;
}
