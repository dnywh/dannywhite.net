// Converts fixed dates to relative when within a reasonably recent time-frame
// Adapted from https://dbushell.com/2021/06/08/javascript-relative-date-time-formatting/
const datesToConvert = document.querySelectorAll(".relative-date");

// Formatter for "Today" and "Yesterday" etc
const relative = new Intl.RelativeTimeFormat(
    navigator.language, { numeric: 'auto' }
);

// Formatter for weekdays, e.g. "Monday"
const short = new Intl.DateTimeFormat(
    navigator.language, { weekday: 'long' }
);

// Formatter for dates, e.g. "Thursday, 23 November 2023"
const long = new Intl.DateTimeFormat(
    navigator.language, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});

// Where the magic happens
const formatDate = (date) => {
    const now = new Date().setHours(0, 0, 0, 0);
    const then = date.setHours(0, 0, 0, 0);
    const days = (then - now) / 86400000;
    if (days > -6) {
        if (days > -2) {
            return relative.format(days, 'day');
        }
        return "on " + short.format(date);
    }
    return "on " + long.format(date);
};

// Loop through all dates to convert
datesToConvert.forEach(item => {
    const isoDate = new Date(item.getAttribute("data-iso-date"))
    const formattedDate = formatDate(isoDate)
    // Apply the changes on the client's side
    item.textContent = formattedDate
})
