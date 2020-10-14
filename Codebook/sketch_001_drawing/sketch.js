function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
  // can you draw a X with the two line statemetn, i. e. from top left to bottom right and from bottom left ot top right
  // also please put the ellipse into the center of the sketch
  // Take a look at https://p5js.org/reference/#/p5/windowWidth for making your sketch fullscreen
  line(0,0,100,100);
  line(100,100,0,0);
  ellipse(0,0,10,10);
}
