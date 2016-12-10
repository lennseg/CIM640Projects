// tic tac toe game v2
// by lennse garcia

var scribble = new Scribble();

scribble.bowing = 2;
scribble.roughness = 2;

var box0 = new Boxes(100, 100);
var box1 = new Boxes(250, 100);
var box2 = new Boxes(400, 100);
var box3 = new Boxes(100, 250);
var box4 = new Boxes(250, 250);
var box5 = new Boxes(400, 250);
var box6 = new Boxes(100, 400);
var box7 = new Boxes(250, 400);
var box8 = new Boxes(400, 400);

var currentPlayer = "";

//var box = [];

//var box[0] = new Boxes(100,100);


function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(59, 86, 90);
  
if(mouseIsPressed==true){
    if(box0.check(mouseX,mouseY)==true){
      console.log("I'm clicking box 1");
      box0.currentPlay=currentPlayer;
      console.log(box0.currentPlay);
    }
    
    if(box1.check(mouseX, mouseY)==true){
      console.log("I'm clicking box 2");
      box1.currentPlay=currentPlayer;
      console.log(box1.currentPlay);
    }
    
    if(box2.check(mouseX, mouseY)==true){
      console.log("I'm clicking box 3");
      box0.currentPlay=currentPlayer;
      console.log(box0.currentPlay);
    }
    
    if(box3.check(mouseX, mouseY)==true){
      console.log("I'm clicking box 4");
      box0.currentPlay=currentPlayer;
      console.log(box0.currentPlay);
    }
    
    if(box4.check(mouseX, mouseY)==true){
      console.log("I'm clicking box 5");
      box0.currentPlay=currentPlayer;
      console.log(box0.currentPlay);
    }
    
    if(box5.check(mouseX, mouseY)==true){
      console.log("I'm clicking box 6");
      box0.currentPlay=currentPlayer;
      console.log(box0.currentPlay);
    }
    
    if(box6.check(mouseX, mouseY)==true){
      console.log("I'm clicking box 7");
      box0.currentPlay=currentPlayer;
      console.log(box0.currentPlay);
    }
    
    if(box7.check(mouseX, mouseY)==true){
      console.log("I'm clicking box 8");
      box0.currentPlay=currentPlayer;
      console.log(box0.currentPlay);
    }
    
    if(box8.check(mouseX, mouseY)==true){
      console.log("I'm clicking box 9");
      box0.currentPlay=currentPlayer;
      console.log(box0.currentPlay);
    }
    
  }
  
  
  box0.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

}


function Boxes(tempX, tempY) {
  this.x = tempX;
  this.y = tempY;
  this.boxSize = 155;
  this.currentPlay = "";


  this.display = function() {
    stroke(255);
    strokeWeight(2);
    rectMode(CENTER);
    scribble.scribbleRect(this.x, this.y, this.boxSize, this.boxSize);

    if (this.currentPlay == "X") {
      //draw x
      textSize(32);
      text("X", this.x, this.y);
    } else if (this.currentPlay == "O") {
      //draw o
      textSize(32);
      text("O", this.x, this.y);
    }
  }

  this.check = function(userX, userY) {
    var distbox = dist(userX, userY, this.x, this.y);

    if (distbox < this.boxSize / 2) {
      return true;
    } else {
      return false;
    }
  }
}


function keyPressed() {

  if (key == "X") {
    currentPlayer = "X";
  }
  if (key == "O") {
    currentPlayer = "O";
  }

  console.log(currentPlayer);
}