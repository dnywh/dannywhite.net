let xPos, yPos, xOffA, xOffB, speed;

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 48);
    canvas.style("z-index", "-1");
    xPos = random(windowWidth * 0.75);
    xOffA = 0;
    xOffB = 1000;
    speed = 0.002;
}

function draw() {
    background(255);
    fill(200);
    noStroke();

    xPos = map(noise(xOffA), 0, 1, 0, windowWidth);
    yPos = map(noise(xOffB), 0, 1, 380 / 2, 380);

    ellipse(xPos, yPos, 380, 380);

    // if (xPos === 0) {
    //     xPos += speed;
    // } else if (xPos === windowWidth) {
    //     xPos -= speed;
    // }

    xOffA += speed;
    xOffB += speed;
}



// Handle resizing of window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}