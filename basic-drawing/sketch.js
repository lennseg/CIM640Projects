var mapX=0;
var mapY=0;
var pupilX=50
var pupilY=50

var eyesX=0;
var eyesY=0;



function setup() {
  createCanvas(500,500);
  //console.log("current width: " + width);
  //console.log("current height: " + height);
  //background(255,0,0);
}

function draw() {
  
  mapX=map(mouseX, 0, width, -25, 25);
  console.log(mapX)
  
  mapY=map(mouseY, 0, height, -25, 0);
  
  fill(255);
  //eye1
  ellipse(50,50,100,100);
  //eye2
  ellipse(150,50,100,100);
  
  //pupil1
  ellipse(pupilX + mapX, 50 + mapY,50,50);
  
  //pupil2
  ellipse(pupilX + 100 + mapX, 50 + mapY, 50,50 );
  
}