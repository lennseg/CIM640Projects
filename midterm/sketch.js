//Midterm: Halloween

var halloween = [];

  var allow = {
    x: 100,
    y: 329,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(22);
      text("allow", this.x, this.y);
    }
  };

  var low = {
    x: 308,
    y: 329,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(22);
      text("low", this.x, this.y);
    }
  };

  var wee = {
    x: 499,
    y: 329,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(22);
      text("low", this.x, this.y);
    }
  };

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
  createCanvas(630, 390);
  textFont("Georgia");
  textLeading(30);
  bg = loadImage("images/ghosts.jpg");

  halloween[0] = {
    x: 60,
    y: 100,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(42);
      text("H", this.x, this.y);
    },
  };

  halloween[1] = {
    x: 120,
    y: 100,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(42);
      text("A", this.x, this.y);
    },
  };

  halloween[2] = {
    x: 180,
    y: 100,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(42);
      text("L", this.x, this.y);
    },
  };

  halloween[3] = {
    x: 240,
    y: 100,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(42);
      text("L", this.x, this.y);
    },
  };

  halloween[4] = {
    x: 300,
    y: 100,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(42);
      text("O", this.x, this.y);
    },
  };

  halloween[5] = {
    x: 360,
    y: 100,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(42);
      text("W", this.x, this.y);
    },
  };

  halloween[6] = {
    x: 430,
    y: 100,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(42);
      text("E", this.x, this.y);
    },
  };

  halloween[7] = {
    x: 485,
    y: 100,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(42);
      text("E", this.x, this.y);
    },
  };

  halloween[8] = {
    x: 540,
    y: 100,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(42);
      text("N", this.x, this.y);
    },
  };
}

function draw() {
  background(bg);
  halloween[0].display();
  halloween[1].display();
  halloween[2].display();
  halloween[3].display();
  halloween[4].display();
  halloween[5].display();
  halloween[6].display();
  halloween[7].display();
  halloween[8].display();

  fill(buttonfill);
  strokeWeight(1);
  stroke(229, 146, 19);
  rectMode(CENTER);
  rect(centerBoxX1, centerBoxY1, buttonWidth, buttonHeight);
  rect(centerBoxX2, centerBoxY2, buttonWidth, buttonHeight);
  rect(centerBoxX3, centerBoxY3, buttonWidth, buttonHeight);

  allow.display();
  low.display();
  wee.display();

}


function mousePressed() {

  // Check if mouse is inside the button
  var d1 = dist(mouseX, mouseY, centerBoxX1, centerBoxY1);
  var d2 = dist(mouseX, mouseY, centerBoxX2, centerBoxY2);
  var d3 = dist(mouseX, mouseY, centerBoxX3, centerBoxY3);

}