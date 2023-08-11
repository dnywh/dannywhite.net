const introEl = document.querySelector("main > header")
const clientRollEl = document.querySelector("div#client-roll")
const marqueeItemsSample = document.querySelector(".marquee-content").children
const marqueeContentAll = document.querySelectorAll(".marquee-content")
const clientDescEl = document.querySelector("p#client-desc")
const bodyEl = document.querySelector(".home body")

// console.log(bodyEl)

// const intersectPos = clientDescEl.getBoundingClientRect().top;
// console.log(clientDescEl.getBoundingClientRect(), intersectPos)

// introEl.style.marginTop = "25vh"
// clientRollEl.style.marginTop = intersectPos + "px";


// Style Client Roll
// TODO: change the CSS `top` property to make it stick in the optical vertical center
// 1. Calc the height of the Client Roll. 
// 2. Calc the height of the window 
// 3. Do the math to find the offset from the top to make that Client Roll rectangle be visibly centered


// Sets a new dynamic width based on the client names' widths
let marqueeContentWidth = 0;
let gap = 40;

Array.from(marqueeItemsSample).forEach((item, index) => {
    console.log(index, item.offsetWidth)
    marqueeContentWidth += item.offsetWidth
    if (index < Array.from(marqueeItemsSample).length) {
        marqueeContentWidth += gap
    }
})
// This is the width that will be applied to each `marquee-content` element
console.log(marqueeContentWidth)

Array.from(marqueeContentAll).forEach((item) => {
    item.style.width = marqueeContentWidth + "px";
})

// Handle fade-in of Client Roll
// bodyEl.classList.add("visible")
// clientRollEl.classList.add("visible")
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("intro in view");
                bodyEl.classList.add("visible")
                clientRollEl.classList.add("visible")
                // TODO: enable below meta thing
                // document.querySelector('meta[name="theme-color"]').setAttribute("content", "white");
            } else {
                console.log("intro out of view");
                // bodyEl.classList.remove("visible")
                // clientRollEl.classList.remove("visible")
                // TODO: disengage observer if I choose to go with this
            }
        });
    },
    { threshold: [0.65] }
);
observer.observe(clientRollEl);
