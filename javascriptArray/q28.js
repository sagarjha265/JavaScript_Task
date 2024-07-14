function full_year(date) {
    return date.getFullYear(); // getFullYear() returns the full year (4 digits)
}

// Test the function
const dtYear = new Date(2015, 10, 1);
console.log(full_year(dtYear)); // Output: 2015
