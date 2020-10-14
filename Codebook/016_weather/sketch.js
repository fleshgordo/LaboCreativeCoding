let weather = 0;
let temp_celsius = 0;

function preload() {
  let api_key = "";
  let url = 'http://api.weatherstack.com/current?access_key=' + api_key + '&query=geneva';
  weather = loadJSON(url);
}

function setup() {
  createCanvas(720, 200);
  console.log(weather);
  console.log("Temperature is: " + weather.current.temperature);
  temp_celsius = weather.current.temperature;
}

function draw() {
  if (weather != 0) {
    select('#temp').html(temp_celsius);
  }
}