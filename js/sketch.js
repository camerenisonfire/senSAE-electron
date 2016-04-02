var count = 0;
function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  frameRate(8);
  background(0);
}

function draw() {
    fill(0, 10);
    //fill(random(0, 255),random(0, 255),random(0, 255), 30);
    rect(0, 0, width, height);
    //fill(random(0, 255),random(0, 255),random(0, 255), 100);
    stroke(255);
    var p1 = createVector(getTriX(), getTriY());
    var p2 = createVector(getTriX(), getTriY());
    var p3 = createVector(getTriX(), getTriY());
    noFill();
    //fill(map(p1.x, 20, width-20, 0, 255),map(p2.x, 20, width-20, 0, 255),map(p3.x, 20, width-20, 0, 255), 150)
    triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);

    count++;
    //if(count > 30){
        //noLoop();
    //}
}

function getTriX(){
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
