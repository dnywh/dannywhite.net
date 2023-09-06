const clientRollEl = document.querySelector("div.client-roll")
const marqueeContentEls = document.querySelectorAll(".marquee-content")

// Prepare intersection observer
let options = {
    // Using default root of viewport
    // Bleed over top so it doesn't stop until visibly gone
    // https://blog.webdevsimplified.com/2022-01/intersection-observer/
    rootMargin: "50% 0% 0% 0%",
    threshold: 0.5,
};

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Intersecting / in view
                clientRollEl.classList.add("visible")
            } else {
                // No longer intersecting / out of view
                // Commented-out the below so the container doesn't fade back to grey
                // clientRollEl.classList.remove("visible")
                // Simply restart animation
                restartAnimation()
            }
        });
    },
    options
);
observer.observe(clientRollEl);


// Prepare animation restart function so marquees always start at optimal place
// https://www.kirupa.com/animations/restarting_css_animations.htm
function restartAnimation() {
    marqueeContentEls.forEach(el => {
        el.style.animationName = "none";
        requestAnimationFrame(() => {
            setTimeout(() => {
                el.style.animationName = ""
            }, 0);
        });
    })
}
