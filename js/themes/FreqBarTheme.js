
function FreqBarTheme(){
    //
}

FreqBarTheme.prototype.render = function(){
    push();

    fill(0, 10);
    rect(0, 0, width, height);

    fill(255);

    var xPos = 0;
    var rectWidth = width / 24;
    var spectrumCounter = 0;
    for (i = 0; i < 24; i++) {
        //vertex(i, map(spectrum[i], 0, 255, height, 0) );
        var rectHeight = map(spectrum[spectrumCounter], 0, 255, 0, height);
        rect(xPos, 0, rectWidth, rectHeight);
        xPos += rectWidth;
        spectrumCounter += 32;
    }

    pop();
}
