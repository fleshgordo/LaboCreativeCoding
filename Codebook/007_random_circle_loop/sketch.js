function setup() {
  createCanvas(710, 400);
  background(0);
  frameRate(15);
}

function draw() {
  //background(0)

  for (let j = 0; j < width/2; j++) {
    strokeWeight(1);
    stroke(255);
    point(j, random(height));
  }
	for (let k = width/2; k < width; k++) {
    strokeWeight(random(10));
    stroke(255);
    point(k, random(height));
  }
}
