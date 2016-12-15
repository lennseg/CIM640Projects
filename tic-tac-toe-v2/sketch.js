// tic tac toe game v2
// by lennse garcia
var scribble = new Scribble();
scribble.bowing = 1;
scribble.roughness = 1;
var boxes = new Array(3);
var sizeOfBox = 150;
var currentPlayer = "";

function setup() {
    createCanvas(500, 500);
    for (var i = 0; i < 3; i++) {
        boxes[i] = new Array(3);
        for (var j = 0; j < 3; j++) {
            boxes[i][j] = new Boxes(100 + i * 150, 100 + j * 150);
        }
    }
}

function draw() {
    background(59, 86, 90);
    if (mouseIsPressed == true) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (boxes[i][j].check(mouseX, mouseY) == true) {
                    console.log("I'm clicking box " + i + ", " + j);
                    boxes[i][j].currentPlay = currentPlayer;
                    console.log(boxes[i][j].currentPlay);
                }
            }
        }
    }
    for(var i = 0; i < 3; i++)
    {
        for(var j = 0; j < 3; j++)
        {
            boxes[i][j].display();
        }
    }
}

function Boxes(tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
    this.boxSize = sizeOfBox;
    this.currentPlay = "";
    var halfBox = this.boxSize / 2;
    this.display = function () {
        stroke(255);
        strokeWeight(2);
        rectMode(CENTER);
        scribble.scribbleRect(this.x, this.y, this.boxSize, this.boxSize);
        if (this.currentPlay == "X") {
            //draw X
            stroke(255);
            strokeWeight(2);
            scribble.scribbleLine(this.x - halfBox, this.y - halfBox, this.x + halfBox, this.y + halfBox);
            scribble.scribbleLine(this.x + halfBox, this.y - halfBox, this.x - halfBox, this.y + halfBox);
        }
        else if (this.currentPlay == "O") {
            //draw O
            stroke(255);
            strokeWeight(2);
            ellipseMode(CENTER)
            scribble.scribbleEllipse(this.x, this.y, 150, 150);
        }
    }
    this.check = function (userX, userY) {
        var distbox = dist(userX, userY, this.x, this.y);
        if (distbox < this.boxSize / 2) {
            return true;
        }
        else {
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