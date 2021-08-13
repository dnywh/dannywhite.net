// Prep element variables for placing and sizing the canvas
let parentEl, windowInnerWidth;

// Prep image variables
let ala, checkers, nativeCheckout, ticketNumber, raffleTicket, puttPutt, fridaKahlo, coffeeCup;

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
    // checkers = loadImage("assets/images/checkers.jpg");
    // ticketNumber = loadImage("https://dl.airtable.com/.attachments/864890b9250eabf9713fe922876a9508/ecaaf165/backpack-slip.jpg")
    // raffleTicket = loadImage("https://dl.airtable.com/.attachments/f74ea228cf924fd4aa48d183da689dad/d6318ea9/raffle-ticket-orange-c-47.jpg")
    // puttPutt = loadImage("https://dl.airtable.com/.attachments/fadbab2f3e2ef1e594299fce467eacea/83c6f882/maroochy-river-mini-golf.jpg")
    // postIt = loadImage("https://dl.airtable.com/.attachments/8743ca094a79fd48daa427df1f25d30a/1cacc068/post-it-mariela.jpg")
    // fridaKahlo = loadImage("https://dl.airtable.com/.attachments/fb830571d265fbe6e8941b6f8ec01020/5264b7b5/museo-frida-kahlo.jpg")
    // coffeeCup = loadImage("https://dl.airtable.com/.attachments/02b871b45dfdbae33fcc549910ef2929/5c634fb1/empanadas-cafe.jpg")
}

function setup() {
    // Set a screen-reader accessible description of entire sketch
    describe("A floating eyeball being orbited by ephemeral, decorative, content");

    // Prepare the canvas container on the DOM
    parentEl = select('#canvas-container');
    // Set the width for the canvas to the windowWidth minus scrollbars
    windowInnerWidth = parentEl.width;
    
    // Create the canvas
    const canvas = createCanvas(windowInnerWidth, windowHeight, WEBGL);
    canvas.parent(parentEl);

    // Prepare a texture width and height variables for dynamic reuse later
    const grTextureWidth = windowInnerWidth * 2;
    const grTextureHeight = grTextureWidth / 2;
    
    // Prep outer-sphere inner-wall images
    gr = createGraphics(grTextureWidth, grTextureHeight);
    // gr.image(checkers, 500, 0, 250, 250);

    // aspectRatio = nativeCheckout.height / nativeCheckout.width;
    // gr.image(nativeCheckout, canvas.width - windowInnerWidth - (canvas.width * 0.1), canvas.height - windowHeight - ((canvas.width * 0.1) * aspectRatio), canvas.width * 0.1, (canvas.width * 0.1) * aspectRatio);
    // gr.image(nativeCheckout, 500, 0, 300, 300 * aspectRatio);

//     aspectRatio = ticketNumber.height / ticketNumber.width;
//     gr.image(ticketNumber, 0, canvas.height * 0.5, canvas.width * 0.033, (canvas.width * 0.033) * aspectRatio);
// 
//     aspectRatio = raffleTicket.height / raffleTicket.width;
//     gr.image(raffleTicket, windowInnerWidth * 0.66, canvas.height * 0.5, canvas.width * 0.03, (canvas.width * 0.03) * aspectRatio);
//  
//     aspectRatio = puttPutt.height / puttPutt.width;
//     gr.image(puttPutt, windowInnerWidth * 0.33, canvas.height * 0.6, canvas.width * 0.066, (canvas.width * 0.066) * aspectRatio);
// 
//     aspectRatio = postIt.height / postIt.width;
//     gr.image(postIt, windowInnerWidth * 0.43, canvas.height * 0.3, canvas.width * 0.05, (canvas.width * 0.05) * aspectRatio);
// 
//     aspectRatio = fridaKahlo.height / fridaKahlo.width;
//     gr.image(fridaKahlo, windowInnerWidth * 0.53, canvas.height * 0.4, canvas.width * 0.066, (canvas.width * 0.066) * aspectRatio);
// 
//     aspectRatio = coffeeCup.height / coffeeCup.width;
//     gr.image(coffeeCup, windowInnerWidth * 0.63, canvas.height * 0.3, canvas.width * 0.066, (canvas.width * 0.066) * aspectRatio);
    
    gr.ellipse(grTextureWidth * 0.5, grTextureHeight * 0.5, grTextureWidth * 0.25, grTextureWidth * 0.25);

    gr.textSize(windowInnerWidth * 0.025);
    gr.textAlign(CENTER);
    gr.fill('red');
    gr.text('Welcome to the studio of Danny White', grTextureWidth * 0.66, windowHeight *0.4);

    gr.textAlign(RIGHT);
    gr.text('📱 +1 (626) 657 7733 🇺🇸 • 🇦🇺 +61 490 520 628 📱', grTextureWidth * 1, windowHeight * 0.25);
    gr.text(`📧 ${basicEmailEncoder()} 📧`, grTextureWidth * 0.89, windowHeight * 0.75);

    // gr.textAlign(LEFT);
    // gr.textSize(windowInnerWidth * 0.015);
    // gr.text('Fully vaxxed and ready to work', 0, windowHeight * 0.6);

}

function basicEmailEncoder() {
    let content = ["org", "i@", "h", "nywhite", "dan"];
    return `${content[2]}${content[1]}${content[4]}${content[3]}.${content[0]}`;
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

    

    // Create the outer sphere
    push();
    scale(-1, 1);
    texture(gr);
    // Set angle for ambient rotation
    // angle -= 0.1;
    angle -= 0.5;
    rotateY(angle * 0.02);
    sphere(windowInnerWidth * 1, 24, 24)
    pop();

    // Control rotation of the eye
    eyeLerpX = lerp(eyeLerpX, -(mouseY - windowHeight / 2) / 500, lerpAmt);
    eyeLerpY = lerp(eyeLerpY, (mouseX - windowInnerWidth / 2) / 1000, lerpAmt);

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
        // rotateX(angle * 0.02);
        // rotateY(angle * 0.05);
        // rotateZ(angle * 0.001);

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

    // Set colour of the eye's shadow
    ambientLight(225, 225, 225);

    // Set colour of the eye
    let str = 1.75;
    dirLerpX = lerp(dirLerpX, (mouseX / width - 0.5) * str, lerpAmt);
    dirLerpY = lerp(dirLerpY, (mouseY / height - 0.5) * str, lerpAmt);
    directionalLight(255, 255, 255, -dirLerpX, -dirLerpY, -1);


    // Apply the image
    texture(ala);
    // Create the inner-sphere with detail of 50
    sphere((cWidth * 0.25) * 0.4, 24, 24);
}

// Handle resizing of window
function windowResized() {
    // Recalculate windowWidth minus scrollbar
    parentEl = select('#canvas-container');
    windowInnerWidth = parentEl.width;
    resizeCanvas(windowInnerWidth, windowHeight);
}
