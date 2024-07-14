function timezone_offset_in_seconds(date) {
    return date.getTimezoneOffset() * 60; // Convert minutes to seconds
}

// Test the function
const dtOffset = new Date();
console.log(timezone_offset_in_seconds(dtOffset)); // Output: e.g., 19800 (or similar)
