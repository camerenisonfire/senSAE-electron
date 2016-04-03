const DRAW_THRESHOLD_TRIANGLE = .04;
const DRAW_THRESHOLD_ELLIPSE = .02;

var input;
var analyzer;
var vol;
var count = 0;

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

    //drawText();

    fill(0, map(vol, 0, .4, 10, 30));
    //fill(random(0, 255),random(0, 255),random(0, 255), map(vol, 0, .4, 10, 60));
    rect(0, 0, width, height);

    if (vol > DRAW_THRESHOLD_TRIANGLE) drawTriangle();
    if (vol > DRAW_THRESHOLD_ELLIPSE) drawEllipse();
    if (vol > DRAW_THRESHOLD_ELLIPSE / 2) drawEllipse();

}

var textColor = 255;
var changeColorDir;
function drawText() {
    push();

    textSize(32);

    if(textColor >= 255){
        changeColorDir = -2
    }else if(textColor <= 0){
        changeColorDir = 2;
    }
    textColor += changeColorDir;

    fill(0);
    text("camerenisonfire", width*(2/3), height*(5/6));

    fill(textColor);
    text("camerenisonfire", width*(2/3), height*(5/6));


    pop();
}

var red, green, blue;

function drawTriangle() {

    //fill(random(0, 255),random(0, 255),random(0, 255), 100);
    //stroke(255);
    red = random(0, 255);
    green = random(0, 255);
    blue = random(0, 255);
    stroke(red, green, blue);
    strokeWeight(map(vol, DRAW_THRESHOLD_TRIANGLE, .4, 4, 18));

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

var redE, greenE, blueE;
function drawEllipse(){
    //fill(random(0, 255),random(0, 255),random(0, 255), 100);
    //stroke(255);
    redE = random(0, 255);
    greenE = random(0, 255);
    blueE = random(0, 255);
    stroke(red, green, blue);
    strokeWeight(map(vol, DRAW_THRESHOLD_ELLIPSE, .4, 8, 18));

    var p1 = createVector(getTriX(), getTriY());

    var eSize = map(vol, 0, .4, 20, 80);
    ellipse(p1.x, p1.y, eSize, eSize);
}
