var randomHello = [];

function setup() {
  
  createCanvas(500,500);
  background(0);
  fill(255);
  textSize(25);
  randomHello.push("The");
  randomHello.push("quick");
  randomHello.push("brown");
  randomHello.push("fox");
  randomHello.push("jumped");
  randomHello.push("over");
  randomHello.push("the");
  randomHello.push("lazy");
  randomHello.push("dog");
}

function draw() {
  while(randomHello.length > 0){
    var currentHello = randomHello.pop();
    text(currentHello, random(width), random(height));
  }
}