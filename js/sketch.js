var input;
var analyzer;
var vol;
var fft;
var spectrum;

var themeList;

function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  frameRate(8);
  background(0);

  mic = new p5.AudioIn();   // Create an Audio input

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();

  fft = new p5.FFT();       // Create an FFT analyzer
  fft.setInput(mic);        // Connect to Microphone input
  spectrum = fft.analyze(); // Initialize spectrum

  themeList = new ThemeList();
}

function draw() {
    // Get the overall volume (between 0 and 1.0)
    vol = mic.getLevel();
    spectrum = fft.analyze();

    themeList.render();

    /*switch(themeCounter){
        case 0:
            circleMoverTheme.render();
            break;
        case 1:
            circleGridTheme.render();
            break;
        case 2:
            shapePopTheme.render();
            break;
        case 3:
            freqBarTheme.render();
            break;
    }*/
    //freqBarTheme.render();
    //shapePopTheme.render();
    //circleGridTheme.render();
    //circleMoverTheme.render();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    themeList.updateThemeCounter(-1);
  } else if (keyCode === RIGHT_ARROW) {
    themeList.updateThemeCounter(1);
  }
}

function drawText() {
    push();

    textSize(32);

    if(textColor >= 255){
        changeColorDir = -2
    }else if(textColor <= 0){
        changeColorDir = 2;
    }
    textColor += changeColorDir;

    fill(0);
    text("camerenisonfire", width*(2/3), height*(5/6));

    fill(textColor);
    text("camerenisonfire", width*(2/3), height*(5/6));


    pop();
}
