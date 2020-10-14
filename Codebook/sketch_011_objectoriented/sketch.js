let skullList = [];

function setup() {
  // set canvas size
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 50; i++) {
    let gravityRandom = random(4., 8.);
    let bouncing = random(0.1, 0.99);
    let ballSize = random(30, 150);
    let xRan = random(width);
    let skull = {
      x: xRan,
      y: 0,
      speedY: 1,
      gravity: gravityRandom,
      bouncing: 0.9,
      size: ballSize,
      display: function () {
        //image(this.img, this.x, this.y);
        ellipse(this.x, this.y, this.size, this.size);
      },
      move: function () {
        this.speedY = this.speedY + this.gravity;
        this.y = this.y + this.speedY;

        if (this.y > height - this.size / 2) {
          // set y to bottom pos
          this.y = height - this.size / 2;

          // invert the speed
          this.speedY = this.speedY * -this.bouncing;
        }
        // reached top?
        else if (this.y <= 0) {
          this.speedY = -this.speedY;
        }
      }
    };
    skullList[i] = skull;
  }
}

function draw() {
  background(128);
  for (let i = 0; i < skullList.length; i++) {
    skullList[i].display();
    skullList[i].move();
  }
}
