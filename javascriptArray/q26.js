function numeric_month(date) {
    const month = date.getMonth() + 1; // getMonth() returns 0 (Jan) to 11 (Dec)
    return String(month).padStart(2, '0'); // Ensure two digits with leading zeros
}

// Test the function
const dtNumeric = new Date(2015, 10, 1);
console.log(numeric_month(dtNumeric)); // Output: "11"
