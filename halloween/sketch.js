//Midterm: Halloween

var letters = ["H", "A", "L", "L", "O", "W", "E", "E", "N"];

var y0 = 100;
var y1 = 100;
var y2 = 100;
var y3 = 100;
var y4 = 100;
var y5 = 100;
var y6 = 100;
var y7 = 100;
var y8 = 100;

var buttonfill = 0;

var buttonWidth = 130;
var buttonHeight = 40;

var centerBoxX1 = 123;
var centerBoxY1 = 320;

var centerBoxX2 = 323;
var centerBoxY2 = 320;

var centerBoxX3 = 515;
var centerBoxY3 = 320;

var allowDown = false;
var lowDown = false;
var weeDown = false;


function setup() {
  createCanvas(630,390);
  textFont("Georgia");
  textLeading(30);
  bg = loadImage("images/ghosts.jpg");
}

function draw() {
  background(bg);

  fill(229, 146, 19);
  noStroke();
  textSize(42);
  text(letters[0], 60, y0);
  text(letters[1], 120, y1);
  text(letters[2], 180, y2);
  text(letters[3], 240, y3);
  text(letters[4], 300, y4);
  text(letters[5], 360, y5);
  text(letters[6], 430, y6);
  text(letters[7], 485, y7);
  text(letters[8], 540, y8);

  fill(buttonfill);
  strokeWeight(1);
  stroke(229, 146, 19);
  rectMode(CENTER);
  rect(centerBoxX1, centerBoxY1, buttonWidth, buttonHeight);
  rect(centerBoxX2, centerBoxY2, buttonWidth, buttonHeight);
  rect(centerBoxX3, centerBoxY3, buttonWidth, buttonHeight);

  fill(229, 146, 19);
  noStroke();
  textSize(22);
  text("allow", 100, 329);
  text("low", 308, 329);
  text("wee", 499, 329);
}

function halloween(){
  
  
}

function mousePressed() {

  // Check if mouse is inside the button
  var d1 = dist(mouseX, mouseY, centerBoxX1, centerBoxY1);
  var d2 = dist(mouseX, mouseY, centerBoxX2, centerBoxY2);
  var d3 = dist(mouseX, mouseY, centerBoxX3, centerBoxY3);

  if (d1 < 65) {
    if (allowDown) {
      allowDown = false;
    } else {
      allowDown = true;
    }
  }

  if (d2 < 65) {
    if (lowDown) {
      lowDown = false;
    } else {
      lowDown = true;
    }
  }
  if (d3 < 65) {
    if (weeDown) {
      weeDown = false;
    } else {
      weeDown = true;
    }
  }
  if (allowDown) {
    setToAllow();
  } else if (lowDown) {
    setToLow();
  } else if (weeDown) {
    setToWee();
  } else {
    setToNone();
  }
}

function setToAllow() {
  y0 = 100;
  y1 = 200;
  y2 = 200;
  y3 = 200;
  y4 = 200;
  y5 = 200;
  y6 = 100;
  y7 = 100;
  y8 = 100;
}

function setToLow() {
  y0 = 100;
  y1 = 100;
  y2 = 100;
  y3 = 200;
  y4 = 200;
  y5 = 200;
  y6 = 100;
  y7 = 100;
  y8 = 100;
}

function setToWee() {
  y0 = 100;
  y1 = 100;
  y2 = 100;
  y3 = 100;
  y4 = 100;
  y5 = 200;
  y6 = 200;
  y7 = 200;
  y8 = 100;
}

function setToNone() {
  y1 = 100;
  y2 = 100;
  y3 = 100;
  y4 = 100;
  y5 = 100;
  y6 = 100;
  y7 = 100;
  y8 = 100;
  y9 = 100;
}