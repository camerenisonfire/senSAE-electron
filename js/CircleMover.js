function CircleMover(){
    this.pos = createVector(random(width/3, width*(2/3)), random(height/3, height*(2/3)));
    this.xOff = .01;
    this.yOff = .001;
    this.col = color(random(0, 255),random(0, 255),random(0, 255));
}

CircleMover.prototype.render = function(){
    push();

    fill(this.col);
    this.move();
    var size = map(vol, 0, .4, 40, 400);
    ellipse(this.pos.x, this.pos.y, size, size);

    pop();
}

CircleMover.prototype.move = function(){
    this.pos.x = noise(this.xOff) * width;
    this.xOff += vol * random(-1, 1);

    this.pos.y = noise(this.yOff) * height;
    this.yOff += vol * random(-1, 1);
}
