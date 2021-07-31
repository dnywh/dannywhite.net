let angle = 0;
let ala;
let m = 1;
let testX, testY = 0;

const touch = matchMedia('(hover: none)').matches;

function preload() {
    ala = loadImage("assets/images/ala-2-to-1-small-split.png");
}


function setup() {
    const canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    //   canvas.parent('canvas-container');
    // alpha = 0;
    //  beta = 0;
    //  gamma = 0;
    //  fade=0;
    //  radius=20;
    console.log(touch)
}

function draw() {
    background(255);

    // TODO: Lerp between rotations, even on desktop
    // Because what if I exit the browser and reenter with the cursor elsewhere?
    // And wouldn't it be nice if there were a bit of lag?

    if (touch) {
        angle += 0.03;
        // TODO: make rotation stay within 'bounds' so <@> is always somewhat visible
        rotateX(angle * 0.02);
        rotateY(angle * 0.05);
        rotateZ(angle * 0.001);
        if (mouseIsPressed) {
            // testX = lerp(0, (-(mouseY - windowHeight / 2) / 500), 0.06);
            // rotateX(testX);
            // rotateY(lerp(0, ((mouseX - windowWidth / 2) / 1000), 0.2));
            rotateX(0);
            rotateY(0);
            rotateX(-(mouseY - windowHeight / 2) / 500);
            rotateY((mouseX - windowWidth / 2) / 1000);
        }
    } else {
        rotateX(-(mouseY - windowHeight / 2) / 500);
        rotateY((mouseX - windowWidth / 2) / 1000);
    }
    //   The colour of the eye's shadow
    ambientLight(225, 225, 225);

    //   The colour of the eye
    let str = 1.75;
    let dirX = (mouseX / width - 0.5) * str;
    let dirY = (mouseY / height - 0.5) * str;
    directionalLight(255, 255, 255, -dirX, -dirY, -1);

    noStroke();
    // Apply the image
    texture(ala);
    sphere(150, 50, 50); // Creates a sphere in 3D space.

    // TODO: Make eyeball blink

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
