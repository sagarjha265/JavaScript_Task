function hours_without_zeroes(date) {
    return date.getHours(); // Returns the hour in 24-hour format
}

// Test the function
const dtHourNoZeroes = new Date(1989, 10, 1);
console.log(hours_without_zeroes(dtHourNoZeroes)); // Output: 0
