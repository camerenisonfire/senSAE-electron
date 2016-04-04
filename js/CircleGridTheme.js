const CIRCLE_GRID_THRESHOLD = .02;

function CircleGridTheme(){
    this.gridWidth = spectrum.length / 128;
    this.grid = new Array(this.gridWidth);
    for(var i = 0; i < this.gridWidth; i++){        // Create 2D array that is gridWidth x gridWidth size
        this.grid[i] = new Array(this.gridWidth);
    }
}

CircleGridTheme.prototype.render = function(){
    var spectrumCounter = 0;

    push();

    fill(0, map(vol, 0, .4, 10, 30));
    rect(0, 0, width, height);

    for(i = 0; i < this.gridWidth; i++){
        for(j = 0; j < this.gridWidth; j++){
            this.grid[i][j] = spectrum[spectrumCounter];
            spectrumCounter += 16;
        }
    }

    this.drawGrid();

    pop();
}

CircleGridTheme.prototype.drawGrid = function() {
    var widthSpacing = width / (this.gridWidth - 1);
    var heightSpacing = height / (this.gridWidth);

    for(i = 0; i < this.gridWidth - 1; i++){
        for(j = 0; j < this.gridWidth; j++){
            fill(255);
            var x = i * widthSpacing + widthSpacing / 2;
            var y = j * heightSpacing + heightSpacing / 2;
            var size = this.grid[i][j] / 2;
            if(size > 80) size = 0;
            ellipse(x, y, size, size);
        }
    }
}
