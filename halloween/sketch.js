var oneChar = "H";
var twoChar = "A";
var threeChar = "L";
var fourChar = "L";
var fiveChar = "O";
var sixChar = "W";
var sevenChar = "E";
var eightChar = "E";
var nineChar = "N";

function setup() {
  createCanvas(640,400);
  textSize(42);
  textFont("Georgia");
  
} 


function draw() {
  background(255,165,0);
   
  text(oneChar, 100, 100);
  text(twoChar, 150, 100);
  text(threeChar, 200, 100);
  text(fourChar, 250, 100);
  text(fiveChar, 295, 100);
  text(sixChar, 347, 100);
  text(sevenChar, 410, 100);
  text(eightChar, 460, 100);
  text(nineChar, 510, 100);
  
}