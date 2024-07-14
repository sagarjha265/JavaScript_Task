function days_passed(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const timeDifference = date - startOfYear; // Difference in milliseconds
    const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return daysPassed + 1; // Adding 1 to include the start day
}

// Test the function
console.log(days_passed(new Date(2015, 0, 15))); // Output: 15
console.log(days_passed(new Date(2015, 11, 14))); // Output: 348
