var fly;
var sam;

function setup() {
  createCanvas(720,300);
  fly = new Bug(width/2, height/2);
  sam = new Bug(100,100);
}

function draw() {
  background("#ff7373");
  fly.update();
  fly. draw();
  
  sam.update();
  sam.draw();
  
}

function Bug(startX, startY){
  this.x = startX;
  this.y = startY;
  this.diameter = random(10,100);
  this.speed = random(2,10);
  
  this.draw = function(){
    fill("#ebf3f7");
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter)
  }
  
  this.update = function(){
    this.x += random(-1, this.speed);
    this.y += random(-1,this.speed);
  }
}