let phrase1 = "hello";
let phrase2 = "world";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  textSize(width/10);
  text(phrase1, 100, 100);
  textSize(mouseY/15);
  text(phrase2, 200, 100);
  textSize(30);
  text(phrase1 + ", " + phrase2, 100, 300)
}
