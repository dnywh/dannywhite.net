
// Images
// https://sia.codes/posts/eleventy-and-cloudinary-images/
// TODO: Set up {% defaultSizes %} as per paragraph that begins:
// "The sizes attribute can be tricky to write by hand..."

// Set constants for the Cloudinary URL and fallback widths for images when not supplied by the shortcode params
const CLOUDNAME = "dannywhite"
// Assume we're looking directly in the 'notes' folder
// const FOLDER = "notes/"
// Turned the above off so I can use other folders more easily

const BASE_URL = `https://res.cloudinary.com/${CLOUDNAME}/image/upload/`;
// TODO: Why is each photo going with 1360 despite me sometimes passing in a 'width' attribute?
const FALLBACK_WIDTHS = [300, 600, 680, 1360];
const FALLBACK_WIDTH = 680;

// Generate srcset attribute using the fallback widths or a supplied array of widths
function getSrcset(filePath, widths) {
    const widthSet = widths ? widths : FALLBACK_WIDTHS
    return widthSet.map(width => {
        return `${getSrc(filePath, width)} ${width}w`;
    }).join(", ")
}
// Generate the src attribute using the fallback width or a width supplied
// by the shortcode params
function getSrc(filePath, width) {
    return `${BASE_URL}q_auto,f_auto,w_${width ? width : FALLBACK_WIDTH}/${filePath}`
}

// Export the two shortcodes to be able to access them in our Eleventy config
// I've prepended these with `ext` to make it clear that this is coming externally, from Cloudinary
module.exports = {
    // TODO: Do I really need to use extSrcset each time? Given I'm not doing anything custom,ever, perhaps I just do that in here
    extSrcset: (filePath, widths) => getSrcset(filePath, widths),
    extSrc: (filePath, width) => getSrc(filePath, width),
}
