function setup() {
  createCanvas(800,500);
  background(255);
  noStroke();
}

function draw() {
  let y = height/2;
  let d = height/5;
  let x = width/6;
  let distance = width/6;

  fill(128);
  ellipse(x, y, d, d); // left
  ellipse(x+distance, y, d, d); // middle
  ellipse(x+distance * 2, y, d, d); // right
}

