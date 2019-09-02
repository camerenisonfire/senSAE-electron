const CIRCLE_GRID_THRESHOLD = .02;

function CircleGridTheme(){
    this.gridWidth = spectrum.length / 128;
    this.grid = new Array(this.gridWidth);
    for(var i = 0; i < this.gridWidth; i++){        // Create 2D array that is gridWidth x gridWidth size
        this.grid[i] = new Array(this.gridWidth);
    }

    this.fromColor = color(218, 165, 32);
    this.toColor = color(72, 61, 139);
    console.log(this.fromColor.levels[0]);
    this.colorDiffRed = (this.fromColor.levels[0] - this.toColor.levels[0]);
    this.colorDiffGreen = (this.fromColor.levels[1] - this.toColor.levels[1]);
    this.colorDiffBlue = (this.fromColor.levels[2] - this.toColor.levels[2]);
}

CircleGridTheme.prototype.render = function(){
    var spectrumCounter = 0;

    push();

    fill(0, map(vol, 0, .4, 5, 20));
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
    var colorDiff = 100 / (widthSpacing + heightSpacing);
    var tempForColor = this.fromColor;

    for(i = 0; i < this.gridWidth - 1; i++){
        for(j = 0; j < this.gridWidth; j++){
            fill(58, 34, 240);
            //fill(lerpColor(tempForColor, this.toColor, colorDiff));
            var x = i * widthSpacing + widthSpacing / 2;
            var y = j * heightSpacing + heightSpacing / 2;
            var size = this.grid[i][j] / 2;
            if(size > 80) size = 0;
            ellipse(x, y, size, size);
            //tempForColor.levels[0] -= (this.colorDiffRed * colorDiff);
            //tempForColor.levels[1] -= (this.colorDiffGreen * colorDiff);
            //tempForColor.levels[2] -= (this.colorDiffBlue * colorDiff);
        }
    }
}
