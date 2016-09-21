var topBoundary = 0;
var bottomBoundary = 0;

var boundary0 = 0;
var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;

var buttonSize = 100;
var brushColor = "white";
var brushSize = 10;

var currentArea = "";

var colorArray = ["green","purple", "black", "blue", "orange", "red"];
var counter = 0;
var currentRN = 0;
var currentColor = "white";

function setup() {
  createCanvas(400,400); 
  strokeWeight(1);
  stroke(255);
  
  topBoundary = 0;
  bottomBoundary = height;
  boundary0 = 0;
  boundary1 = 100;
  boundary2 = 200;
  boundary3 = 300;
  boundary4 = width;
}

function draw() {

  fill("gold");
  rect(boundary0, topBoundary, buttonSize, buttonSize);
  fill("gray");
  rect(boundary1, topBoundary, buttonSize, buttonSize);
  fill("blue");
  rect(boundary2, topBoundary, buttonSize, buttonSize);
  fill("magenta");
  rect(boundary3, topBoundary, buttonSize, buttonSize);
  
  fill(brushColor);
  ellipse(mouseX, mouseY, brushSize, brushSize);
  
  console.log(currentArea);
    if (mouseY >= topBoundary && mouseY < bottomBoundary) {
    //console.log("Inside User Interface Area");
    if (mouseX > boundary0 && mouseX < boundary1) {
      //  console.log("area0");
      currentArea = "area0";
    } else if (mouseX > boundary1 && mouseX < boundary2) {
      //  console.log("area1");
      currentArea = "area1";
    } else if (mouseX > boundary2 && mouseX < boundary3) {
      //  console.log("area2");
      currentArea = "area2";
    } else if (mouseX > boundary3 && mouseX < boundary4) {
      //  console.log("area3");
      currentArea = "area3";
    }
  } else {
    currentArea = "";
  }
}

function mousePressed() {
  if (currentArea == "area0") {
    brushColor = (colorArray[counter]);
    //counter = counter + 1;
    counter++;
  if(counter >= colorArray.length){
    counter = 0;}
  }else if (currentArea == "area1") {
    brushColor = random(colorArray);
  } else if (currentArea == "area2") {
    brushColor = "blue";
    //brushSize = brushSize + 1;
    brushSize++;
  } else if (currentArea == "area3") {
    brushColor = "magenta";
    //brushSize = brushSize - 1;
    brushSize--;
    if(brushSize < 10){
      brushSize = 10;
  }
  }else {
    brushColor = "white";
}
}