// Converts between Imperial and Metric units
// TODO: Keep user's choice in local storage across site
// Get all applicable elements on page
const listOfThingsToConvert = document.querySelectorAll(".distance")
const inlineThingsOnlyToConvert = document.querySelectorAll(".distance.inline")
// Get radio form
const radioButtons = document.querySelectorAll('input[name="unit-of-measurement"]');
// Set a default unit
let unit = "km"

// Prepare function for updating the fieldset
const updateRadioButtons = () => {
    for (const radioButton of radioButtons) {
        if (radioButton.value === unit) {
            radioButton.checked = true;
            // No need to do `else` as only one can be checked
            break;
        }
    }
}

// Prepare function for updating the text on the page
const updateText = (newUnit) => {
    listOfThingsToConvert.forEach(el => {
        el.textContent = `999 ${newUnit}`
        // Do things here like splice the numbers from the text
        // If text was 'ft', do one form of math on the numbers and convert the text to 'm'
        // If text was 'mi' or 'miles', do one form of math on the numbers and conver the text to 'km'
        // If text has class `inline` consider the text verbose and convert the text to 'miles' instead of 'mi' (and 'feet' instead of 'ft')
    })
}



// Prepare main function for swapping between units
const swapUnit = (selectedUnit) => {

    // unit = "km"
    // If the visitor has selected a specific radio button
    if (selectedUnit) {
        // console.log("dealing with explicit choice in radio button")
        console.log(`Swapping unit from ${unit} to ${selectedUnit.value}...`);

        unit = selectedUnit.value;

        // Check first that they've selected the *other*, unchecked value


        // Or, if there is no explicitly selected unit, it must be coming from an inline simple swap...
    } else {
        // ...so just switch the unit to the other value
        // TODO: switch below to ternary like...
        // unit === "km" ? "mi" : "km";
        if (unit === "km") {
            unit = "mi"
        } else {
            unit = "km"
        }
    }

    updateRadioButtons();
    updateText(unit);

}

// expandButton.textContent = expandToggle.checked ? "Less" : "More";
// console.log(`new unit is: ${unit}`)

// Swap units whenever an inline item is selected
inlineThingsOnlyToConvert.forEach(el => {
    el.addEventListener("click", () => {
        swapUnit();

    })
})

// Swap units when the unchecked radio button becomes checked
radioButtons.forEach(el => {
    el.addEventListener("click", () => {
        swapUnit(el);
    })
})



// Set one of the radio buttons to checked based on the default or newly updated unit
updateRadioButtons();
// Ensure all text on page matches this unit
updateText(unit);









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







// Newer route
// Array.from(listOfThingsToConvert).forEach(el => {
//     // console.log(el);

//     // Imperial to Metric

//     // For strings like 'a 30 mile ride' or 'we rode 40 miles'
//     if (el.classList.contains("miles-to-km")) {
//         // End with 'a 48 km ride' or 'we rode 64 km'

//         // Get numbers from string
//         // Convert these numbers from miles to KM
//         // Get the word 'mile' from the string
//         // Change that word to 'km', leaving the optional 's' at the end untouched
//         // el.textContent = "all of the above goes here"
//     }

//     // Metric to Imperial

//     // For strings like '20.1 km'
//     if (el.classList.contains("km-to-mi")) {
//         // End with '12.5 mi'
//     }
//     // For strings like '400 m'
//     if (el.classList.contains("m-to-ft")) {
//         // End with '1312 ft'
//     }

// });




