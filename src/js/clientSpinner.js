const prisms = document.querySelectorAll(".object-3d.prism");
let timeOffset = 6500;

// Go through each prism
prisms.forEach((prism, index) => {
    // Declare each side for this prism
    const front = prism.querySelector(".object-3d.face.front");
    const base = prism.querySelector(".object-3d.face.base");
    const back = prism.querySelector(".object-3d.face.back");
    const upper = prism.querySelector(".object-3d.face.upper");
    const allSides = [front, base, back, upper];

    // Declare variable for later counting which side we're up to
    let count = 0;
    // Declare variable for later adding to the angle of the prism, rotating it
    let angle = 0;
    // Delcare variable for delaying the rotation depending on how far down the queue this prism is
    let delay = index * 40;

    // Every 4000ms, begin the prism rotation
    setInterval(staggerPrism, 4000);

    // Stagger this rotation in a timeout so each item has a slightly delayed start but the overall 'every 4000ms' rotation interval is maintained
    function staggerPrism() {
        setTimeout(updatePrism, delay);
    }

    // Handle prism update
    function updatePrism() {
        setTimeout
        switch (count) {
            case 0:
                rotateSide();
                prepareText("base");
                count += 1;
                break;
            case 1:
                rotateSide();
                prepareText("back");
                count += 1;
                break;
            case 2:
                rotateSide();
                prepareText("upper");
                count += 1;
                break;
            case 3:
                rotateSide();
                prepareText("front");
                count = 0;
                break;

        }
    }

    // 'Dumb' rotate the prism since we never want it to reset to 0
    function rotateSide() {
        angle += 90;
        prism.style = `transform: translateZ(-2rem) rotateX(${angle}deg);`
    }

    // 'Smart' rotate the class so text can be faded in and out
    function prepareText(activeSide) {
        // Get the element for the active side
        const activeSideEl = prism.querySelector(`.object-3d.face.${activeSide}`);
        // Get a list of the *other* sides only
        const otherSides = allSides.filter(item => item !== activeSideEl);

        // Show the active side's text
        activeSideEl.classList.remove("hidden");
        activeSideEl.classList.add('active');

        // Hide the other sides
        otherSides.forEach(item => {
            item.classList.remove("active");
            item.classList.add("hidden");
        }
        )
    }
})
