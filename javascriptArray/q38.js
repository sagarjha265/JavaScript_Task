function daylights_savings(date) {
    const january = new Date(date.getFullYear(), 0, 1);
    const july = new Date(date.getFullYear(), 6, 1);
    const stdTimezoneOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
    return date.getTimezoneOffset() < stdTimezoneOffset ? 1 : 0; // Return 1 if in DST, otherwise 0
}

// Test the function
const dtDST = new Date();
console.log(daylights_savings(dtDST)); // Output: 1 or 0 depending on the date
