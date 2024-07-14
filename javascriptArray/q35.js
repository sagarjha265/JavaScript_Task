function minutes_with_leading_zeros(date) {
    const minutes = date.getMinutes(); // Get minutes
    return String(minutes).padStart(2, '0'); // Pad with leading zeros
}

// Test the function
const dtMinutes = new Date(1989, 10, 1);
console.log(minutes_with_leading_zeros(dtMinutes)); // Output: "00"
