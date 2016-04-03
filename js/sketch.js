const DRAW_THRESHOLD = .014;

var input;
var analyzer;
var vol;
var count = 0;
var img;

function preload() {
    img = loadImage("imgs/Test1.jpg")
}

function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  frameRate(8);
  background(0);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
    // Get the overall volume (between 0 and 1.0)
    vol = mic.getLevel();

    fill(0, 20);
    //fill(random(0, 255),random(0, 255),random(0, 255), 30);
    rect(0, 0, width, height);

    if (vol > .017) drawTriangle();


    //count++;
    //if(count > 30){
        //noLoop();
    //}
}

var red, green, blue;

function drawTriangle() {

    //fill(random(0, 255),random(0, 255),random(0, 255), 100);
    //stroke(255);
    red = random(0, 255);
    green = random(0, 255);
    blue = random(0, 255);
    console.log(red);
    stroke(red, green, blue);
    strokeWeight(map(vol, 0, 1, 4, 18));

    var p1 = createVector(getTriX(), getTriY());
    var p2 = createVector(getTriX(), getTriY());
    var p3 = createVector(getTriX(), getTriY());
    noFill();
    //fill(map(p1.x, 20, width-20, 0, 255),map(p2.x, 20, width-20, 0, 255),map(p3.x, 20, width-20, 0, 255), 150)
    triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
}

function getTriX(){
    var size = map(vol)
    return random(20, width - 20);
}

function getTriY(){
    return random(20, height - 20);
}

function getTriPoints(){
    var points = new Array();
    for(var i = 0; i < 3; i++){
        points[i] = new Array();
    }
}
