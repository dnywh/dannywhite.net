const cube = document.querySelector(".object-3d.cube");
// console.log("hello from client spinner!", cube);
let count = 0;
let angle = 0;
let currentClass = "";

const intervalTest = setInterval(rotateCube, 2000);

function rotateCube() {
    switch (count) {
        case 0:
            changeClassTo("bottom");
            count += 1;
            break;
        case 1:
            changeClassTo("back");
            count += 1;
            break;
        case 2:
            changeClassTo("top");
            count += 1;
            break;
        case 3:
            changeClassTo("front");
            count = 0;
            break;

    }
}

function changeClassTo(side) {
    /*
    // Check if there is already a "to-side" class applied
    if (currentClass) {
        // Remove it if so
        cube.classList.remove(currentClass);
    }
    // Add the new "to-side" to the classList
    cube.classList.add(`to-${side}`);
    // Add it to the currentClass variable to check against next time
    currentClass = `to-${side}`;
    */

    angle += 90;
    cube.style = `transform: translateZ(-100px) rotateX(${angle}deg);`
}