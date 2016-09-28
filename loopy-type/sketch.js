var word = "The quick brown fox jumped over the lazy dog.";

function setup() {
  
  createCanvas(720,300);
  textSize(30);
  
}

function draw() {
  frameRate(30);
  for(var start = 0; start < 300; start ++){
  //console.log(start)
  noStroke();
  ellipse(random(width), random(height), random(10), random(10));
  }
}

function mouseMoved() {
text(word, 50, 150);
loop();
}