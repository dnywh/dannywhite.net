let parentEl, windowInnerWidth;

function setup() {
   

    parentEl = select('#canvas-container');
    

    windowInnerWidth = parentEl.width;

    const canvas = createCanvas(windowInnerWidth, windowHeight);
    canvas.parent(parentEl);
    
}

function draw() {
    

    background(220);
    ellipseMode(CENTER)
    ellipse(windowInnerWidth / 2, windowHeight / 2, 80, 80);
}

// Handle resizing of window
function windowResized() {
    
    parentEl = select('#canvas-container');
    windowInnerWidth = parentEl.width;
    resizeCanvas(windowInnerWidth, windowHeight);
}