//Midterm: Halloween

var halloween0 = {
  x: 60,
  y: 100,
  display: function() {
    fill(229, 146, 19);
    noStroke();
    textSize(42);
    text("H", this.x, this.y);
  },
};

var halloween1 = {
  x: 120,
  y: 100,
  display: function() {
    fill(229, 146, 19);
    noStroke();
    textSize(42);
    text("A", this.x, this.y);
  },
};

var halloween2 = {
  x: 180,
  y: 100,
  display: function() {
    fill(229, 146, 19);
    noStroke();
    textSize(42);
    text("L", this.x, this.y);
  },
};

var halloween3 = {
  x: 240,
  y: 100,
  display: function() {
    fill(229, 146, 19);
    noStroke();
    textSize(42);
    text("L", this.x, this.y);
  },
};

var halloween4 = {
  x: 300,
  y: 100,
  display: function() {
    fill(229, 146, 19);
    noStroke();
    textSize(42);
    text("O", this.x, this.y);
  },
};

var halloween5 = {
  x: 360,
  y: 100,
  display: function() {
    fill(229, 146, 19);
    noStroke();
    textSize(42);
    text("W", this.x, this.y);
  },
};

var halloween6 = {
  x: 430,
  y: 100,
  display: function() {
    fill(229, 146, 19);
    noStroke();
    textSize(42);
    text("E", this.x, this.y);
  },
};

var halloween7 = {
  x: 485,
  y: 100,
  display: function() {
    fill(229, 146, 19);
    noStroke();
    textSize(42);
    text("E", this.x, this.y);
  },
};

var halloween8 = {
  x: 540,
  y: 100,
  display: function() {
    fill(229, 146, 19);
    noStroke();
    textSize(42);
    text("N", this.x, this.y);
  },
};

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

}

function draw() {
  background(bg);
  halloween0.display();
  halloween1.display();
  halloween2.display();
  halloween3.display();
  halloween4.display();
  halloween5.display();
  halloween6.display();
  halloween7.display();
  halloween8.display();

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

function moveUp() {

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