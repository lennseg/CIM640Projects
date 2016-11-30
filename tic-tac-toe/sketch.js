var scribble = new Scribble();
scribble.bowing = 2;
scribble.roughness = 2;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(59,86,90);
  stroke(255);
  strokeWeight(3);
  scribble.scribbleRect( 100, 100, 155, 155 ); //top left box
  scribble.scribbleRect( 250, 100, 155, 155 ); //top middle box
  scribble.scribbleRect( 400, 100, 155, 155 ); //top right box
  scribble.scribbleRect( 100, 250, 155, 155 ); //middle left box
  scribble.scribbleRect( 250, 250, 155, 155 ); //middle middle box
  scribble.scribbleRect( 400, 250, 155, 155 ); //middle right box
  scribble.scribbleRect( 100, 400, 155, 155 ); //bottom middle box
  scribble.scribbleRect( 250, 400, 155, 155 ); //bottom middle box
  scribble.scribbleRect( 400, 400, 155, 155 ); //bottom right box

}