// Converts between Imperial and Metric distance units
// TODO: Keep user's choice in local storage across site
// Get all applicable elements on page
const listOfThingsToConvert = document.querySelectorAll(".unit")
const inlineThingsOnlyToConvert = document.querySelectorAll(".unit.inline")
// Get radio form
const radioButtons = document.querySelectorAll('input[name="unit-of-measurement"]');
// Set a default unit
// TODO: Set to KM unless the visitor is prefers US
// This currently doesn't show MI by default on page load, if that is true
// const userLocale = navigator.languages[0];
// let unit = (userLocale === "en-US") ? "mi" : "km"
let unit = "km";

// Prepare function for updating the fieldset
const updateRadioButtons = () => {
    for (const radioButton of radioButtons) {
        // If this radio button has the same value as the current unit...
        if (radioButton.value === unit) {
            // Set it as checked
            radioButton.checked = true;
            // No need to do `else` as only one can be checked
            break;
        }
    }
}

// Prepare function for updating the text throughout the page
const updateTextOnPage = (oldUnit, newUnit) => {
    // Only update if the new unit is different from the old one
    // e.g. km to mi and not't km to km
    if (newUnit !== oldUnit) {
        // Go through each affected item
        listOfThingsToConvert.forEach(el => {
            // Split up its string into sections
            const stringSectionsArray = el.textContent.split(' ');
            // Figure out each array's unit type (metres, feet, km, mi)
            const stringUnit = stringSectionsArray[stringSectionsArray.length - 1]

            // TODO: Learn more about and swap the above with regular expressions because
            // ...they are more succinct and less brittle than `split()`
            // https://stackoverflow.com/a/1483287/2009441
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
            // const myRe = /(\d+)\s*(m|cm|km)/;
            // const stringSectionsArray = myRe.exec(el.textContent)

            // If text was 'mi' or 'miles', do one form of math on the numbers and convert the text to 'km'
            // If text was 'ft', do one form of math on the numbers and convert the text to 'm'
            // If text has class `inline` consider the text verbose and convert the text to 'miles' instead of 'mi' (and 'feet' instead of 'ft')

            // Prepare empty array to store swapped parts of string in a second
            const newStringArray = [];
            // Loop through each bit of text and transform as necessary
            stringSectionsArray.forEach(section => {
                if (newUnit === "mi") {
                    // Check if *not* a number in order to get 'km', 'mi', etc
                    if (isNaN(section)) {
                        // Is not a number
                        // Check if "km"
                        if (section === "km") {
                            // Convert text from "km" to "mi"
                            section = "mi"
                        } else if (section === "m") {
                            // Convert text from "km" to "mi"
                            section = "ft"
                        }
                    } else {
                        // Is number, prepare decimal places at an assumed 0
                        let decimalPlaces = 0;
                        // Check if it contains decimals places
                        if (section.includes('.')) {
                            // Store this length instead of the 0
                            decimalPlaces = section.split('.')[1].length;
                        }
                        if (stringUnit === "km") {
                            // Convert number from mi to km in the amount of decimal places it had before
                            section = (section * 0.62137).toFixed(decimalPlaces);
                        } else if (stringUnit === "m") {
                            // Convert number from ft to m in the amount of decimal places it had before
                            section = (section * 3.28084).toFixed(decimalPlaces);
                        }
                        // TODO: remove trailing '0's such as the 0 in 91.20km
                        // TODO: Add comma(s) to number if larger than 1,000(.00)
                    }
                } else if (newUnit === "km") {
                    // TODO: Replace everything here with reusable code from above
                    // Check if *not* a number in order to get 'km', 'mi', etc
                    if (isNaN(section)) {
                        // Is not a number
                        // Check if "mi"
                        if (section === "mi") {
                            // Convert text from "mi" to "km"
                            section = "km"
                        } else if (section === "ft") {
                            // Convert text from "ft" to "m"
                            section = "m"
                        }
                    } else {
                        // Is number, prepare decimal places at an assumed 0
                        let decimalPlaces = 0;
                        // Check if it contains decimals places
                        if (section.includes('.')) {
                            // Store this length instead of the 0
                            decimalPlaces = section.split('.')[1].length;
                        }
                        if (stringUnit === "mi") {
                            // Convert number from mi to km in the amount of decimal places it had before
                            section = (section * 1.60934).toFixed(decimalPlaces);
                        } else if (stringUnit === "ft") {
                            // Convert number from ft to m in the amount of decimal places it had before
                            section = (section * 0.3048).toFixed(decimalPlaces);
                        }
                    }
                }

                // Push this new section to the newStringArray array
                newStringArray.push(section);
            })

            // Set the final text
            el.textContent = newStringArray.join(" ");
        })
    }
}

// Prepare main function for swapping between units
const switchUnit = (selectedUnit) => {
    const oldUnit = unit
    // If the visitor has explicitly selected a specific radio button...
    if (selectedUnit) {
        // Switch to (or stay with) this radio button's value
        unit = selectedUnit.value;
        // Or if this is just a general swap after tapping on an inline item...
    } else {
        // Swap the unit
        // TODO: switch below to ternary like...
        // unit === "km" ? "mi" : "km";
        if (unit === "km") {
            unit = "mi"
        } else {
            unit = "km"
        }
    }

    const newUnit = unit

    updateRadioButtons();
    updateTextOnPage(oldUnit, newUnit);

}

// Swap units whenever an inline item is selected
inlineThingsOnlyToConvert.forEach(el => {
    el.addEventListener("click", () => {
        switchUnit();
    })
})

// Swap unit when a radio button becomes checked
radioButtons.forEach(el => {
    el.addEventListener("click", () => {
        switchUnit(el);
    })
})

// Set one of the radio buttons to checked based on the default or newly updated unit
updateRadioButtons();
// Ensure all text on page matches this unit
updateTextOnPage(unit);
