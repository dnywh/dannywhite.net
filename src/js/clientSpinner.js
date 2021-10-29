const prism = document.querySelector(".object-3d.prism");
const front = document.querySelector(".object-3d.face.front");
const base = document.querySelector(".object-3d.face.base");
const back = document.querySelector(".object-3d.face.back");
const upper = document.querySelector(".object-3d.face.upper");

const allSides = [front, base, back, upper];

let count = 0;
let angle = 0;
let currentClass = "";

const intervalTest = setInterval(updatePrism, 2000);

function updatePrism() {
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
    const activeSideEl = document.querySelector(`.object-3d.face.${activeSide}`);
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

