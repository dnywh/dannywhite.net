// Handles the color scheme toggle behavior
// https://piccalil.li/tutorial/create-a-user-controlled-dark-or-light-mode/

// Store the user's preference in local storage
const STORAGE_KEY = 'user-color-scheme';
// Extract the current CSS custom property value
const COLOR_MODE_KEY = '--color-mode';

// Get other HTML elements for later
const modeToggleButton = document.querySelector('.js-mode-toggle');
const modeStatusElement = document.querySelector('.js-mode-status');

// Get meta theme-color elements for later
const metaThemeColorArray = document.querySelectorAll("meta[name=theme-color]");
// Also get their values 
const lightThemeColorSwatch = metaThemeColorArray[0].getAttribute("content");
const darkThemeColorSwatch = metaThemeColorArray[1].getAttribute("content");

// Spit out either 'light' or 'dark' depending on the media query
const getCSSCustomProp = propKey => {
    let response = getComputedStyle(document.documentElement).getPropertyValue(propKey);

    if (response.length) {
        response = response.replace(/\"/g, '').trim();
    }

    return response;
};

// Apply the user's preference and updates button status
const applySetting = passedSetting => {
    let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);

    if (currentSetting) {
        document.documentElement.setAttribute('data-user-color-scheme', currentSetting);
        setButtonStatus(currentSetting);
    } else {
        setButtonStatus(getCSSCustomProp(COLOR_MODE_KEY));
    }
};

// Set button status (and text if I wanted that)
const setButtonStatus = currentSetting => {
    modeStatusElement.innerText = `Color mode is now "${currentSetting}"`;
};

// Toggle the color mode
const toggleSetting = () => {
    // Try to load the current setting from local storage
    let currentSetting = localStorage.getItem(STORAGE_KEY);

    // Switch the setting to the opposite
    switch (currentSetting) {
        case null:
            currentSetting = getCSSCustomProp(COLOR_MODE_KEY) === 'dark' ? 'light' : 'dark';
            break;
        case 'light':
            currentSetting = 'dark';
            // Apply this new setting to the theme-color meta for browser chrome
            metaThemeColorArray.forEach(el => el.setAttribute("content", `${darkThemeColorSwatch}`));
            break;
        case 'dark':
            currentSetting = 'light';
            // Apply this new setting to the theme-color meta for browser chrome
            metaThemeColorArray.forEach(el => el.setAttribute("content", `${lightThemeColorSwatch}`));
            break;
    }
    // No setting found in local storage, set from CSS
    localStorage.setItem(STORAGE_KEY, currentSetting);

    // Return new setting
    return currentSetting;
};

// Add an event to the button
modeToggleButton.addEventListener('click', evt => {
    evt.preventDefault();
    // Apply the new setting
    applySetting(toggleSetting());
});

// Run this by default to make sure the user's preference is applied on page load
// TODO: Why does this conflict with prefers-color-scheme?
// applySetting();
