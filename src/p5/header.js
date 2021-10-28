let xPos, yPos, xOff;

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 48);
    canvas.style("z-index", "-1");
    xPos = random(windowWidth * 0.75);
    xOff = 0;

}

function draw() {
    background(255);
    fill(200);
    noStroke();

    yPos = map(noise(xOff), 0, 1, 380 / 2, 380);

    ellipse(xPos, yPos, 380, 380);

    if (xPos < windowWidth) {
        xPos += 0.5;
    } else {
        xPos = 0;
    }

    xOff += 0.001;
}



// Handle resizing of window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}