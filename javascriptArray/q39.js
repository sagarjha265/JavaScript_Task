function diff_to_GMT(date) {
    const offset = date.getTimezoneOffset(); // Offset in minutes
    const hours = -offset / 60; // Convert to hours and invert the sign
    return `${hours >= 0 ? '+' : ''}${hours.toFixed(3)}`; // Format the output
}

// Test the function
const dtGMT = new Date();
console.log(diff_to_GMT(dtGMT)); // Output example: "+05.500" or similar
