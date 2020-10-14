let clicked = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // can you draw a X with the two line statemetn, i. e. from top left to bottom right and from bottom left ot top right
  // also please put the ellipse into the center of the sketch
  // Take a look at https://p5js.org/reference/#/p5/windowWidth for making your sketch fullscreen
  line(0,0,width,height);
  line(width,height,0,0);
  ellipse(width/2,height/2,10,10);
}

function mouseReleased() {
  if (clicked == 1) {
    clicked = 0;
    background(128);
    stroke(255);
  } else {
    clicked = 1;
    background(255);
    stroke(128);
  }
}
