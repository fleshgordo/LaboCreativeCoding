let data;

function preload() {
  data = loadJSON("data.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
}

function draw() {
  //console.log(data["person3"].age + data["person3"].name);
  //console.log();
  //console.log(data["person3"].location);
  let counter = 0;
  
  for (let key in data) {

    counter++;
    console.log(counter);
    let name = data[key].name;
    let age = int(data[key].age);
    let color = data[key].color;
    fill(color);
    ellipse(counter*40,40,age);
    console.log (name + " ... " + age);
  }
}
