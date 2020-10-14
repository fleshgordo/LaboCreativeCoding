function setup() {
  createCanvas(windowWidth, windowHeight);
  // Load external json file; set drawData as callback function
  loadJSON("data.json", drawData);
  noStroke();
}

function drawData(data) {
  // Iterate over the data object, look at JSON filestructure
  var i = 1;
  for (var key in data) {
    console.log(data[key].age);
    var age = data[key].age;
    var name = data[key].name;
    var posX = 150 * i;
    i += 1;
    var posY = height/2;
    fill(random(255), random(255), random(255));
    var circleD = 30 * Math.sqrt(age / Math.PI);
    ellipse(posX, posY, circleD, circleD);
    fill(255);
    textAlign(CENTER, CENTER);
    text(name, posX, posY);
  }
}
