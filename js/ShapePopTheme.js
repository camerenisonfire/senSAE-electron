const DRAW_THRESHOLD_TRIANGLE = .04;
const DRAW_THRESHOLD_ELLIPSE = .02;

function ShapePopTheme(){
    //
}

ShapePopTheme.prototype.render = function(){
    push();

    fill(0, map(vol, 0, .4, 10, 30));
    //fill(random(0, 255),random(0, 255),random(0, 255), map(vol, 0, .4, 10, 60));
    rect(0, 0, width, height);

    if (vol > DRAW_THRESHOLD_TRIANGLE) this.drawTriangle();
    if (vol > DRAW_THRESHOLD_ELLIPSE) this.drawEllipse();
    if (vol > DRAW_THRESHOLD_ELLIPSE / 2) this.drawEllipse();

    pop();
}

ShapePopTheme.prototype.drawTriangle = function() {

    //fill(random(0, 255),random(0, 255),random(0, 255), 100);
    //stroke(255);
    var red = random(0, 255);
    var green = random(0, 255);
    var blue = random(0, 255);
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


ShapePopTheme.prototype.drawEllipse = function(){
    //fill(random(0, 255),random(0, 255),random(0, 255), 100);
    //stroke(255);
    var red = random(0, 255);
    var green = random(0, 255);
    var blue = random(0, 255);
    stroke(red, green, blue);
    strokeWeight(map(vol, DRAW_THRESHOLD_ELLIPSE, .4, 8, 18));

    var p1 = createVector(getTriX(), getTriY());

    var eSize = map(vol, 0, .4, 20, 80);
    ellipse(p1.x, p1.y, eSize, eSize);
}
