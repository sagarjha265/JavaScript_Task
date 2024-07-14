function seconds_with_leading_zeros(date) {
    const seconds = date.getSeconds(); // Get seconds
    return String(seconds).padStart(2, '0'); // Pad with leading zeros
}

// Test the function
const dtSeconds = new Date(1989, 10, 1);
console.log(seconds_with_leading_zeros(dtSeconds)); // Output: "00"
