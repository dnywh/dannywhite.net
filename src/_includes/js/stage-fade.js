const stageEl = document.querySelector("aside.stage")
const articleHeadline = document.querySelector("main > article > header")

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                stageEl.classList.add("visible")
            } else {
                stageEl.classList.remove("visible")
            }
        });
    },
    { threshold: [0] }
);
observer.observe(articleHeadline);
