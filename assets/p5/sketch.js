let ala, checkers, nativeCheckout;

// Global lerp amount variable (as it should be shared)
let lerpAmt = 0.15;
// Eyeball lerp variables
let eyeLerpX = 0;
let eyeLerpY = 0;
// Directional light lerp variables
let dirLerpX = 0;
let dirLerpY = 0;
// Camera lerp variables
let camLerpX = 0;
let camLerpY = 0;

// Allow for angle manipulation
let angle = 0;

// Outer-sphere image loading
let gr;

// Prepare variable for calculating width and height of images
let aspectRatio = 1;


// Store touch variables
let hasBeenTouched = false;
const touch = matchMedia('(hover: none)').matches;

function preload() {
    ala = loadImage("assets/images/ala-2-to-1-small-split.png");
    checkers = loadImage("assets/images/checkers.jpg");
    nativeCheckout = loadImage("https://ik.imagekit.io/dw/work/native-checkout/log-in-modal.jpg")
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    // Prep outer-sphere inner-wall images
    gr = createGraphics(windowWidth, windowHeight);
    gr.image(checkers, 0, 0, 500, 500);
    gr.image(checkers, canvas.width - windowWidth - 500, 0, 500, 500);
    
    aspectRatio = nativeCheckout.height / nativeCheckout.width;
    console.log(aspectRatio)
    gr.image(nativeCheckout, canvas.width - windowWidth - (canvas.width * 0.1), canvas.height - windowHeight - ((canvas.width * 0.1) * aspectRatio), canvas.width * 0.1, (canvas.width * 0.1) * aspectRatio);
    // gr.image(nativeCheckout, (canvas.width - windowWidth - 250) / 2, canvas.height - windowHeight - 250, 250);

}

function draw() {
    background(255);
    noStroke();

    // Store variables for use later
    let cWidth = canvas.width;
    let cHeight = canvas.height;

    // Set up a camera that follows the mouse slightly
    camLerpX = lerp(camLerpX, mouseX, lerpAmt);
    camLerpY = lerp(camLerpY, mouseY, lerpAmt);

    let camStr = 0.05;
    let camX = map(camLerpX, 0, width, width * camStr, width * -camStr);
    let camY = map(camLerpY, 0, height, height * camStr, height * -camStr);
    camera(camX, camY, width, 0, 0, 0, 0, 1, 0);

    // Set angle for ambient rotation
    angle -= 0.05;

    // Create the outer sphere
    push();
    scale(-1, 1);
    texture(gr);
    rotateY(angle * 0.02);
    sphere(windowWidth * 1)
    pop();

    // Control rotation of the eye
    eyeLerpX = lerp(eyeLerpX, -(mouseY - windowHeight / 2) / 500, lerpAmt);
    eyeLerpY = lerp(eyeLerpY, (mouseX - windowWidth / 2) / 1000, lerpAmt);

    if (touch) {
        // console.log(ms)
        // Slow down lerp amount for touch devices
        lerpAmt = 0.075;
        // Set angle for ambient rotation
        angle += 0.03;

        // Start ambient rotation
        // TODO: make rotation stay within 'bounds' so <@> is always somewhat visible
        // Push this rotation so it isn't hardcoded
        // Pop after the screen has been touched
        push();
        rotateX(angle * 0.02);
        // console.log(testVar);
        rotateY(angle * 0.05);
        rotateZ(angle * 0.001);

        // Store mouseIsPressed information in a boolean for permanent rotation changes
        if (mouseIsPressed) {
            hasBeenTouched = true;
        }

        if (hasBeenTouched) {
            // Pop out of ambient rotation
            pop();
            rotateX(eyeLerpX);
            rotateY(eyeLerpY);
        }
        // If mouse input, just rotate from mouse position only
    } else {
        rotateX(eyeLerpX);
        rotateY(eyeLerpY);
    }

    //   The colour of the eye's shadow
    ambientLight(225, 225, 225);

    //   The colour of the eye
    let str = 1.75;
    dirLerpX = lerp(dirLerpX, (mouseX / width - 0.5) * str, lerpAmt);
    dirLerpY = lerp(dirLerpY, (mouseY / height - 0.5) * str, lerpAmt);
    directionalLight(255, 255, 255, -dirLerpX, -dirLerpY, -1);


    // Apply the image
    texture(ala);
    // Create the inner-sphere with detail of 50
    sphere((cWidth * 0.25) * 0.4, 50, 50);

    // TODO: Make eyeball blink

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
