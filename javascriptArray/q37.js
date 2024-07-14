function get_timezone() {
    const offset = new Date().getTimezoneOffset(); // Offset in minutes
    const hours = Math.abs(offset / 60); // Convert to hours
    const sign = offset > 0 ? "-" : "+"; // Determine the sign
    return `${sign}${String(hours).padStart(2, '0')}`; // Format the offset
}

// Test the function
console.log(get_timezone()); // Output example: "-05"
