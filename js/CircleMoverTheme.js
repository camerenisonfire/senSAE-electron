function CircleMoverTheme(){
    this.numCircles = random(2, 8);
    this.circleMovers = new Array();
    for(var i = 0; i < this.numCircles; i++){
        this.circleMovers[i] = new CircleMover();
    }
}

CircleMoverTheme.prototype.render = function(){
    push();

    fill(0, 5);
    rect(0, 0, width, height);

    for(var i = 0; i < this.numCircles; i++){
        this.circleMovers[i].render();
    }

    pop();
}
