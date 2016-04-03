var input;
var analyzer;
var vol;
var shapePopTheme;

function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  frameRate(8);
  background(0);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();

  shapePopTheme = new ShapePopTheme();
}

function draw() {
    // Get the overall volume (between 0 and 1.0)
    vol = mic.getLevel();

    shapePopTheme.render();

}
