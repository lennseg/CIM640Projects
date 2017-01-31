//Midterm: Halloween
//by lennse garcia

var halloween = [];

var allow = {
  x: 123,
  y: 329,
  display: function() {
    fill(229, 146, 19);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("allow", this.x, this.y);
  }
};

var low = {
  x: 324,
  y: 329,
  display: function() {
    fill(229, 146, 19);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("low", this.x, this.y);
  }
};

var wee = {
  x: 515,
  y: 329,
  display: function() {
    fill(229, 146, 19);
    noStroke();
    textSize(22);
    textAlign(CENTER);
    text("wee", this.x, this.y);
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


function setup() {
  createCanvas(630, 390);
  textFont("Georgia");
  textLeading(30);
  bg = loadImage("images/ghosts.jpg");

  halloween[0] = {
    x: 80,
    y: 100,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(42);
      text("H", this.x, this.y);
    },
  };

  halloween[1] = {
    x: 135,
    y: 100,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(42);
      text("A", this.x, this.y);
    },
  };

  halloween[2] = {
    x: 190,
    y: 100,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(42);
      text("L", this.x, this.y);
    },
  };

  halloween[3] = {
    x: 245,
    y: 100,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(42);
      text("L", this.x, this.y);
    },
  };

  halloween[4] = {
    x: 303,
    y: 100,
    display: function() {
      fill(229, 146, 19);
      noStroke();
      textSize(42);
      text("O", this.x, this.y);
    },
  };

  halloween[5] = {
    x: 365,
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

// function halloween(x,y) {
//   this.x = x;
//   this.y = y;

// }


function mousePressed() {

  // Check if mouse is inside the button
  var d1 = dist(mouseX, mouseY, allow.x, allow.y);
  var d2 = dist(mouseX, mouseY, low.x, low.y);
  var d3 = dist(mouseX, mouseY, wee.x, wee.y);

  if (d1 < 30) {
    var allowArray = [1, 2, 3, 4, 5];

    for (var i = 0; i < halloween.length; i++) {
      halloween[i].y = 100;
    }


    for (var i = 0; i < allowArray.length; i++) {
      if (halloween[allowArray[i]].y == 100) {
        halloween[allowArray[i]].y = 200;
      }
    }

  }

  if (d2 < 30) {
    var lowArray = [3, 4, 5];

    for (var i = 0; i < halloween.length; i++) {
      halloween[i].y = 100;
    }


    for (var i = 0; i < lowArray.length; i++) {
      if (halloween[lowArray[i]].y == 100) {
        halloween[lowArray[i]].y = 200;
      }
    }

    console.log(d2);


  }

  if (d3 < 30) {
    var weeArray = [5, 6, 7];

    for (var i = 0; i < halloween.length; i++) {
      halloween[i].y = 100;
    }


    for (var i = 0; i < weeArray.length; i++) {
      if (halloween[weeArray[i]].y == 100) {
        halloween[weeArray[i]].y = 200;
      }
    }

  }






}
