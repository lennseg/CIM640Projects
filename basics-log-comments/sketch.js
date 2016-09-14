var num = 100;
var num2 = 5;
var word = "hello";
var word2 = "goodbye";

function setup() {
  console.log(num);
  console.log(num+num2);
  console.log(num-num2);
  console.log(num*num2);
  console.log(num/num2);
  console.log(word);
  console.log(word+word2);
  console.log("This is the number: " +num);
  console.log(word + " " + word2);
  
  //This is a single line comment
  /*
  I
  want
  to
  write
  a lot
  of
  stuff
  */
}

function draw() {
  //console.log(num);
  ellipse(10,10,100,100);
}