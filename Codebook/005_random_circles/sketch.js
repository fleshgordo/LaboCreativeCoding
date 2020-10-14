function setup() {
  createCanvas(600,600);
  background(255);
}

function draw() {
  // create two random letiables
  let randomNumber = random(100);
  let randomColour = random(255);

  // change stroke colour
  stroke(randomColour);
  // print number to console
  print(randomNumber);
  // change stroke thickness
  strokeWeight(randomNumber);
  // draw a point at mouse position
  point(mouseX,mouseY);
}
