function CircleMoverTheme(){
    this.pos = createVector(width/2, height/2);
    this.xOff = .01;
}

CircleMoverTheme.prototype.render = function(){
    push();

    fill(0, 5);
    rect(0, 0, width, height);

    fill(255);
    this.move();
    var size = map(vol, 0, .4, 40, 400);
    ellipse(this.pos.x, this.pos.y, size, size);

    pop();
}

CircleMoverTheme.prototype.move = function(){
    this.pos.x = noise(this.xOff) * width;
    this.xOff += vol;
}
