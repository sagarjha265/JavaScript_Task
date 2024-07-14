function ISO_numeric_date(date) {
    const day = date.getDay();
    return day === 0 ? 7 : day; // Convert Sunday (0) to 7
}

// Test the function
const dt = new Date(2015, 10, 1);
console.log(ISO_numeric_date(dt)); // Output: 7
