// tic tac toe game v2
// by lennse garcia
var scribble = new Scribble();
scribble.bowing = 1;
scribble.roughness = 1;
var boxes = new Array(3);
var sizeOfBox = 150;
var currentPlayer = "";
var playerWinner = "";

function setup() {
    createCanvas(500, 500);
    for (var i = 0; i < 3; i++) {
        boxes[i] = new Array(3);
        for (var j = 0; j < 3; j++) {
            boxes[i][j] = new Boxes(100 + i * 150, 100 + j * 150);
            boxes[i][j].currentPlay = i*3 + j;
        }
    }
}

function draw() {
    background(59, 86, 90);
    if(playerWinner != "")
    {
        textAlign(CENTER);
        textSize(50);
        text("Player " + playerWinner + " wins!", 250, 250);
    }
    if (mouseIsPressed == true) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (boxes[i][j].check(mouseX, mouseY) == true) {
                    console.log("I'm clicking box " + i + ", " + j);
                    boxes[i][j].currentPlay = currentPlayer;
                    if(checkWin() == true)
                    {
                        console.log("Player " + currentPlayer + " wins!");
                        playerWinner = currentPlayer;
                    }
                    console.log(boxes[i][j].currentPlay);
                }
            }
        }
    }
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
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

function checkWin() {
    if (checkHorizontal()) return true;
    if (checkVertical()) return true;
    if (checkDiagonal()) return true;
}

function checkHorizontal() {
    if (boxes[0][0].currentPlay == boxes[0][1].currentPlay && boxes[0][1].currentPlay == boxes[0][2].currentPlay) return true;
    if (boxes[1][0].currentPlay == boxes[1][1].currentPlay && boxes[1][1].currentPlay == boxes[1][2].currentPlay) return true;
    if (boxes[2][0].currentPlay == boxes[2][1].currentPlay && boxes[2][1].currentPlay == boxes[2][2].currentPlay) return true;
}

function checkVertical() {
    if (boxes[0][0].currentPlay == boxes[1][0].currentPlay && boxes[1][0].currentPlay == boxes[2][0].currentPlay) return true;
    if (boxes[0][1].currentPlay == boxes[1][1].currentPlay && boxes[1][1].currentPlay == boxes[2][1].currentPlay) return true;
    if (boxes[0][2].currentPlay == boxes[1][2].currentPlay && boxes[1][2].currentPlay == boxes[2][2].currentPlay) return true;
}

function checkDiagonal() {
    if (boxes[0][0].currentPlay == boxes[1][1].currentPlay && boxes[1][1].currentPlay == boxes[2][2].currentPlay) return true;
    if (boxes[0][2].currentPlay == boxes[1][1].currentPlay && boxes[1][1].currentPlay == boxes[2][0].currentPlay) return true;
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