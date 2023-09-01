const clientRollEl = document.querySelector("div.client-roll")
const bodyEl = document.querySelector(".home body")

// Handle fade-in of Client Roll
let options = {
    // Using default root of viewport
    // root: document.querySelector("#parent"),

    // rootMargin
    // Bleed over top so it doesn't stop until visibly gone
    // Bottom 100px is just an experiment
    // TODO: seperate background color change from animation start/stop so when you scroll back up it isn't jarring
    rootMargin: "50% 0 100px 0",
    threshold: 1.0,
};


const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log("intersecting");
                bodyEl.classList.add("visible")
                clientRollEl.classList.add("visible")

                // TODO: enable below meta thing
                // document.querySelector('meta[name="theme-color"]').setAttribute("content", "white");
            } else {
                console.log("no longer intersecting");

                bodyEl.classList.remove("visible")
                clientRollEl.classList.remove("visible")

                // TODO: disengage observer if I choose to go with this
                // Or even better: pause (or slow animation drastically) but keep visible instead of fading to grey
                // Adjust rootmargin to make this transition better
            }
        });
    },
    options
);
observer.observe(clientRollEl);
