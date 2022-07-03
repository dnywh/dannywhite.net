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
            // TODO: Learn more about and swap the above with regular expressions because
            // ...they are more succinct and less brittle than `split()`
            // https://stackoverflow.com/a/1483287/2009441
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
            // const myRe = /(\d+)\s*(m|cm|km)/;
            // const stringSectionsArray = myRe.exec(el.textContent)

            // Get just the numbers in the string
            // let numbers = stringSectionsArray.filter(i => !isNaN(i));
            // console.log(numbers)

            // let lastItem = stringSectionsArray.slice(-1)[0];
            // console.log(lastItem)
            // If text was 'mi' or 'miles', do one form of math on the numbers and conver the text to 'km'
            // If text was 'ft', do one form of math on the numbers and convert the text to 'm'
            // If text has class `inline` consider the text verbose and convert the text to 'miles' instead of 'mi' (and 'feet' instead of 'ft')

            // Prepare empty array to store swapped parts of string in a second
            const newStringArray = [];
            // Loop through each bit of text and transform as necessary
            stringSectionsArray.forEach(sec => {
                // sec = "hello"
                if (newUnit === "mi") {
                    // Check if *not* a number
                    if (isNaN(sec)) {
                        // Is not a number
                        // Check if "km"
                        if (sec === "km") {
                            // convert text to "mi"
                            sec = "mi"
                        }
                    } else {
                        // Is number
                        // Check if it contains decimals
                        let decimalPlaces;
                        if (sec.includes('.')) {
                            // Store this length
                            decimalPlaces = sec.split('.')[1].length;
                        } else {
                            // Does not contain any decimals
                            decimalPlaces = 0;
                        }
                        // const decimalPlaces = 2;
                        // Convert number from mi to km in the amount of decimal places it had before
                        console.log(decimalPlaces)
                        sec = (sec * 0.62137).toFixed(decimalPlaces);
                    }
                } else if (newUnit === "km") {
                    /// Check if *not* a number
                    if (isNaN(sec)) {
                        // Is not a number
                        // Check if "mi"
                        if (sec === "mi") {
                            // convert text to "km"
                            sec = "km"
                        }
                    } else {
                        // Is number
                        // Check if it contains decimals
                        let decimalPlaces;
                        if (sec.includes('.')) {
                            // Store this length
                            decimalPlaces = sec.split('.')[1].length;
                        } else {
                            // Does not contain any decimals
                            decimalPlaces = 0;
                        }
                        // const decimalPlaces = 2;
                        // Convert number from mi to km in the amount of decimal places it had before
                        console.log(decimalPlaces)
                        sec = (sec / 0.62137).toFixed(decimalPlaces);
                    }
                }

                // Push this new section to the newStringArray array
                newStringArray.push(sec);
            })


            // if (newUnit === "mi") {
            //     if (lastItem === "km") {
            //         lastItem = "mi"
            //         // Convert from mi to km
            //         numbers.forEach(number => number = number * 0.62137)
            //         // console.log("new:", numbers)
            //     }
            // } else if (newUnit === "km") {
            //     if (lastItem === "miles" || lastItem === "mi") {
            //         lastItem = "km"
            //     }
            // }


            // Set the final text
            // el.textContent = `999 ${lastItem}`
            el.textContent = newStringArray.join(" ");
        })
    }
}



// Prepare main function for swapping between units
const switchUnit = (selectedUnit) => {
    const oldUnit = unit
    // If the visitor has expliclity selected a specific radio button...
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
