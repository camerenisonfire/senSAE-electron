function CircleMover(){
    this.pos = createVector(random(0, width), random(0, height));
    this.xOff = .1;
    this.yOff = .1;
    this.col = color(random(0, 255),random(0, 255),random(0, 255));
}

CircleMover.prototype.render = function(){
    push();

    fill(this.col);
    this.move();
    var size = map(vol, 0, .4, 40, 300);
    ellipse(this.pos.x, this.pos.y, size, size);

    pop();
}

CircleMover.prototype.move = function(){
    this.xOff += vol * random(-1, 1);
    this.pos.x = noise(this.xOff) * width;

    this.yOff += vol * random(-1, 1);
    this.pos.y = noise(this.yOff) * height;
}
