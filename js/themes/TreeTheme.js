
function TreeTheme(){
    this.point1 = createVector(random(0, width), random(0, height));
    this.point2 = createVector(random(0, width), random(0, height));
    this.red = random(0, 255);
    this.green = random(0, 255);
    this.blue = random(0, 255);
    this.strokeWeight = random(10, 50);
    this.strokeWeightDir = -1;
}

TreeTheme.prototype.render = function(){
    push();

    fill(0, 10);
    rect(0, 0, width, height);

    fill(255);
    stroke(this.red, this.green, this.blue);
    strokeWeight(this.strokeWeight);

    line(this.point1.x, this.point1.y, this.point2.x, this.point2.y);

    this.transferPoints();
    this.adjustColor();
    this.adjustStrokeWeight();

    pop();
}

TreeTheme.prototype.transferPoints = function(){
    this.point2 = createVector(this.point1.x, this.point1.y);
    this.point1 = createVector(random(0, width), random(0, height));
}

TreeTheme.prototype.adjustColor = function(){
    this.red -= random(-40, 40);
    this.green -= random(-40, 40);
    this.blue -= random(-40, 40);

    if(this.red < 0) this.red = 0;
    if(this.red > 255) this.red = 255;


    if(this.green < 0) this.green = 0;
    if(this.green > 255) this.green = 255;


    if(this.blue < 0) this.blue = 0;
    if(this.blue > 255) this.blue = 255;
}

TreeTheme.prototype.adjustStrokeWeight = function(){
    this.strokeWeight += this.strokeWeightDir;
    if(this.strokeWeight <= 10) this.strokeWeightDir = 1;
    if(this.strokeWeight >= 60) this.strokeWeightDir = -1;
}
