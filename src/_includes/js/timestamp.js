// Get elements
const timestampEl = document.querySelector("#timestamp");
// Set location
// https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
const currentTimeZone = 'Australia/Brisbane'

// Add suffixes
// https://www.freecodecamp.org/news/format-dates-with-ordinal-number-suffixes-javascript/
const nthNumber = (number) => {
    if (number > 3 && number < 21) return "th";
    switch (number % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
};

// Get the time formatted how I like it
const formatTime = (time) => {
    // Lowercase, removed space between '00:00' and 'AM'
    return time.toLowerCase().replace(/\s/g, "")
}

function createTimestamp() {
    // Get time and date information based on location written above
    // "numeric" (e.g., 1)
    // "2-digit" (e.g., 01)
    let time = new Date().toLocaleTimeString('en-us', { timeZone: currentTimeZone, hour: "numeric", minute: "numeric" });
    let calendarDay = new Date().toLocaleDateString('en-us', { timeZone: currentTimeZone, day: "numeric" });
    let weekDay = new Date().toLocaleDateString('en-us', { timeZone: currentTimeZone, weekday: "long" });
    let month = new Date().toLocaleDateString('en-us', { timeZone: currentTimeZone, month: "long" });
    // Set in DOM
    timestampEl.innerText = `${formatTime(time)} on ${weekDay} the ${calendarDay}${nthNumber(calendarDay)} of ${month}`;
}

// Run once on load
createTimestamp()
// Then run once every minute so the timestamp remains accurate
setInterval(createTimestamp, 60000);
