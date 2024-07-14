function hours_with_zeroes(date) {
    const hours = date.getHours() % 12; // Convert to 12-hour format
    return String(hours === 0 ? 12 : hours).padStart(2, '0'); // Handle midnight and pad with leading zeros
}

// Test the function
const dtHourZeroes = new Date(1989, 10, 1);
console.log(hours_with_zeroes(dtHourZeroes)); // Output: "12"
s