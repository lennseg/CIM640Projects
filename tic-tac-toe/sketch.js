// tic tac toe game
// by lennse garcia

// player 1 draws a cross
// player 2 draws a circle

var scribble = new Scribble();
scribble.bowing = 2;
scribble.roughness = 2;

var boxWidth = 155;
var boxHeight = 155;

var centerBoxX1 = 100;
var centerBoxY1 = 100;
var centerBoxX2 = 250;
var centerBoxY2 = 100;
var centerBoxX3 = 400;
var centerBoxY3 = 100;

var centerBoxX4 = 100;
var centerBoxY4 = 250;
var centerBoxX5 = 250;
var centerBoxY5 = 250;
var centerBoxX6 = 400;
var centerBoxY6 = 250;

var centerBoxX7 = 100;
var centerBoxY7 = 400;
var centerBoxX8 = 250;
var centerBoxY8 = 400;
var centerBoxX9 = 400;
var centerBoxY9 = 400;


function setup() {
  createCanvas(500,500);
  
}

function draw() {
  background(59,86,90);
  stroke(255);
  strokeWeight(2);
  rectMode(CENTER);
  //top left box
  scribble.scribbleRect( centerBoxX1, centerBoxY1, boxWidth, boxHeight );
  //top middle box
  scribble.scribbleRect( centerBoxX2, centerBoxY2, boxWidth, boxHeight );
  //top right box
  scribble.scribbleRect( centerBoxX3, centerBoxY3, boxWidth, boxHeight );
  //middle left box
  scribble.scribbleRect( centerBoxX4, centerBoxY4, boxWidth, boxHeight );
  //middle box
  scribble.scribbleRect( centerBoxX5, centerBoxY5, boxWidth, boxHeight );
  //middle right box
  scribble.scribbleRect( centerBoxX6, centerBoxY6, boxWidth, boxHeight );
  //bottom left box
  scribble.scribbleRect( centerBoxX7, centerBoxY7, boxWidth, boxHeight );
  //bottom middle box
  scribble.scribbleRect( centerBoxX8, centerBoxY8, boxWidth, boxHeight );
  //bottom right box
  scribble.scribbleRect( centerBoxX9, centerBoxY9, boxWidth, boxHeight );

}

function mouseClicked (){
  // Check if mouse is inside the box
  var d1 = dist(mouseX, mouseY, centerBoxX1, centerBoxY1); 
  console.log(d1);
  if (d1 < boxWidth/2) {
    console.log("it is in box 1!"); 
    // gridArray[0] = currentPlayer;
    };
  
  var d2 = dist(mouseX, mouseY, centerBoxX2, centerBoxY2);
  console.log(d2);
  if (d2 < boxWidth/2){
    console.log("it is in box 2!")
  }
  
  var d3 = dist(mouseX, mouseY, centerBoxX3, centerBoxY3);
  console.log(d3);
  if (d3 < boxWidth/2){
    console.log("it is in box 3!")
  }
  
  var d4 = dist(mouseX, mouseY, centerBoxX4, centerBoxY4);
  console.log(d4);
  if (d4 < boxWidth/2){
    console.log("it is in box 4!")
  }
  
  var d5 = dist(mouseX, mouseY, centerBoxX5, centerBoxY5);
  console.log(d5);
  if (d5 < boxWidth/2){
    console.log("it is in box 5!")
  }
  
  var d6 = dist(mouseX, mouseY, centerBoxX6, centerBoxY6);
  console.log(d6);
  if (d6 < boxWidth/2){
    console.log("it is in box 6!")
  }
  
  var d7 = dist(mouseX, mouseY, centerBoxX7, centerBoxY7);
  console.log(d7);
  if (d7 < boxWidth/2){
    console.log("it is in box 7!")
  }
  
  var d8 = dist(mouseX, mouseY, centerBoxX8, centerBoxY8);
  console.log(d8);
  if (d8 < boxWidth/2){
    console.log("it is in box 8!")
  }
  
  var d9 = dist(mouseX, mouseY, centerBoxX9, centerBoxY9);
  console.log(d9);
  if (d9 < boxWidth/2){
    console.log("it is in box 9!")
  }
  
 //check all possibilities
 
}