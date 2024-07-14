function day_of_the_month(date) {
    const day = date.getDate();
    return String(day).padStart(2, '0'); // Ensure two digits with leading zeros
}

// Test the function
const d = new Date(2015, 10, 1);
console.log(day_of_the_month(d)); // Output: "01"
