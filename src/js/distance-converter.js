// Converts between Imperial and Metric units
// TODO: Keep user's choice in local storage across site
// Get all applicable elements on page
const listOfThingsToConvert = document.querySelectorAll(".distance")

Array.from(listOfThingsToConvert).forEach(el => {
    console.log(el);

    // Imperial to Metric

    // For strings like 'a 30 mile ride' or 'we rode 40 miles'
    if (el.classList.contains("miles-to-km")) {
        // End with 'a 48 km ride' or 'we rode 64 km'

        // Get numbers from string
        // Convert these numbers from miles to KM
        // Get the word 'mile' from the string
        // Change that word to 'km', leaving the optional 's' at the end untouched
        // el.textContent = "all of the above goes here"
    }

    // Metric to Imperial

    // For strings like '20.1 km'
    if (el.classList.contains("km-to-mi")) {
        // End with '12.5 mi'
    }
    // For strings like '400 m'
    if (el.classList.contains("m-to-ft")) {
        // End with '1312 ft'
    }

});

// Scratchpad
// https://bobbyhadz.com/blog/javascript-check-if-element-contains-text
// console.log('apple'.includes('app'));


// Old route
// Check for kilometres
// if (el.textContent.includes("km")) {
//     // el.textContent = "km to miles"
//     // Check for metres
// } else if (el.textContent.includes("m")) {
//     // el.textContent = "metres to inches"
// }