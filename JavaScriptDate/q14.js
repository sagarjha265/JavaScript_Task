// Function to remove duplicates from an array, ignoring case
function removeDuplicates(arr) {
    const lowerCaseSet = new Set();
    return arr.filter(color => {
        const lowerCaseColor = color.trim().toLowerCase();
        if (!lowerCaseSet.has(lowerCaseColor)) {
            lowerCaseSet.add(lowerCaseColor);
            return true;
        }
        return false;
    });
}

// Given arrays
const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const ordinals = ["th", "st", "nd", "rd"];

// Remove duplicates from colors array
const uniqueColors = removeDuplicates(colors);

// Display colors with ordinal numbers
uniqueColors.forEach((color, index) => {
    const ordinal = (index + 1) + (ordinals[(index + 1) % 10] || "th");
    console.log(`${ordinal} choice is ${color.trim()}.`);
});
