function setup() {
  createCanvas(600,200);
  background(255);
  noStroke();
}

function draw() {
  let y = 100;
  let d = 60;
  let x = 100;
  fill(128);
  ellipse(x, y, d, d); // Links
  ellipse(x+100, y, d, d); // Center
  ellipse(x+200, y, d, d); // Rechts
}
