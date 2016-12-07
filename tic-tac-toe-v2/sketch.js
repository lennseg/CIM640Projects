// tic tac toe game v2
// by lennse garcia

var scribble = new Scribble();

scribble.bowing = 2;
scribble.roughness = 2;

var box0 = new Boxes(100,100);
var box1 = new Boxes(250,100);
var box2 = new Boxes(400,100);
var box3 = new Boxes(100,250);
var box4 = new Boxes(250,250);
var box5 = new Boxes(400,250);
var box6 = new Boxes(100,400);
var box7 = new Boxes(250,400);
var box8 = new Boxes(400,400);


function setup() {
   createCanvas(500,500);

}

function draw() {
  background(59,86,90);
  
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


function Boxes(tempX, tempY){
  this.x = tempX;
  this.y = tempY;
  
  
  this.display = function(){
    stroke(255);
    strokeWeight(2);
    rectMode(CENTER);
    scribble.scribbleRect(this.x, this.y, 155, 155);
  }
  
}

function mouseClicked (){
  // Check if mouse is inside the box
  var distbox0 = dist(mouseX, mouseY, box0.x, box0.y);
  if (distbox0 < 155/2) {
    console.log("it is in box 1!"); 
    };

  var distbox1 = dist(mouseX, mouseY, box1.x, box1.y);
  if (distbox1 < 155/2) {
    console.log("it is in box 2!"); 
    };
    
  var distbox2 = dist(mouseX, mouseY, box2.x, box2.y);
  if (distbox2 < 155/2) {
    console.log("it is in box 3!"); 
    };
    
  var distbox3 = dist(mouseX, mouseY, box3.x, box3.y);
  if (distbox3 < 155/2) {
    console.log("it is in box 4!"); 
    };
    
  var distbox4 = dist(mouseX, mouseY, box4.x, box4.y);
  if (distbox4 < 155/2) {
    console.log("it is in box 5!"); 
    };
    
  var distbox5 = dist(mouseX, mouseY, box5.x, box5.y);
  if (distbox5 < 155/2) {
    console.log("it is in box 6!"); 
    };
    
  var distbox6 = dist(mouseX, mouseY, box6.x, box6.y);
  if (distbox6 < 155/2) {
    console.log("it is in box 7!"); 
    };
    
  var distbox7 = dist(mouseX, mouseY, box7.x, box7.y);
  if (distbox7 < 155/2) {
    console.log("it is in box 8!"); 
    };
  
  var distbox8 = dist(mouseX, mouseY, box8.x, box8.y);
  if (distbox8 < 155/2) {
    console.log("it is in box 9!"); 
    };
    
}