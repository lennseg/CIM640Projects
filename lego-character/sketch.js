// for red, green, and blue color values
var r, g, b;

var value = 0;
function draw() {
  fill(value);
  ellipse(300, 100, 20, 20);
}
  
  
function setup() {
  createCanvas(640,400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}


function draw() {
  background(100);
  var eyeColor=color(255);
  var bodyColor=color('hsl(160, 100%, 50%)');

 //body
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 100);
  rect(280,150,75,150);
  
  //head
  rect(280, 80, 75, 55);
  
  //left arm
  rect(240,140,25,75);
  
  //right arm
  rect(370,140,25,75);
  
  //left foot
  rect(265,310,45,30);
  
  //right foot
  rect(325,310,45,30);
  
  //eye1
  fill(value);
  ellipse(300, 100, 20, 20);
  
  //eye2
  fill(value);
  ellipse(335, 100, 20, 20);
  
}

// Move the mouse across the page
// to change its value

function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

  function mousePressed() {
  // Check if mouse is inside the rectangle
  var d = dist(mouseX, mouseY, 280, 150);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  } 
  
}