// Spice up the accordion/expansion button on the homepage
let expandButtons = document.querySelectorAll(".expand-btn");
let expandToggle = document.getElementById("expand-toggle");

Array.from(expandButtons).forEach(expandButton => {
    // Make accessible: navigable by keyboard
    // https://www.digitalocean.com/community/tutorials/css-collapsible
    expandButton.addEventListener('keydown', e => {
        // 32 === spacebar
        // 13 === enter
        if (e.which === 32 || e.which === 13) {
            e.preventDefault();
            expandButton.click();
        };
    });

    // Listen to changes and update label text
    // https://stackoverflow.com/a/70215124/2009441
    expandToggle.addEventListener('change', e => {
        expandButton.textContent = expandToggle.checked ? "Less" : "More";
    });
});
