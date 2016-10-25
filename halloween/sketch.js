var oneChar = "H";
var twoChar = "A";
var threeChar = "L";
var fourChar = "L";
var fiveChar = "O";
var sixChar = "W";
var sevenChar = "E";
var eightChar = "E";
var nineChar = "N";

var y1 = 100;
var y2 = 100;
var y3 = 100;
var y4 = 100;
var y5 = 100;
var y6 = 100;
var y7 = 100;
var y8 = 100;
var y9 = 100;

var buttonfill = 51;

function setup() {
  createCanvas(640,400);
  textFont("Georgia");
} 


function draw() {
  background(255,165,0);
   
  fill(0);
  textSize(42);
  text(oneChar, 100, y1);
  text(twoChar, 150, y2);
  text(threeChar, 200, y3);
  text(fourChar, 250, y4);
  text(fiveChar, 295, y5);
  text(sixChar, 347, y6);
  text(sevenChar, 410, y7);
  text(eightChar, 460, y8);
  text(nineChar, 510, y9);
  
  fill(buttonfill);
  rect(60, 300, 130, 40);
  rect(260, 300, 130, 40);
  rect(450, 300, 130, 40);
  
  fill(255);
  textSize(22);
  text("allow", 100, 329);
  text("low", 308, 329);
  text("whoa", 490, 329);

}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the button
  var d = dist(mouseX, mouseY, 60, 300);
  if (d < 150) { 
    if (y2==200) {
    y2 = 100;
    y3 = 100;
    y4 = 100;
    y5 = 100;
    y6 = 100;
    }
    
    else {
    y2 = 200;
    y3 = 200;
    y4 = 200;
    y5 = 200;
    y6 = 200;
    }
  }
    var d2 = dist(mouseX, mouseY, 260, 300);
  if (d2 < 150) { 
    if (y4==200) {
    y4 = 100;
    y5 = 100;
    y6 = 100;
    }
    
    else {
    y4 = 200;
    y5 = 200;
    y6 = 200;
    }
  }
}
