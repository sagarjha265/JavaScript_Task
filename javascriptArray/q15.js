function quarter_of_the_year(date) {
    const month = date.getMonth(); // Months are 0-indexed (0 = January, 11 = December)
    return Math.floor(month / 3) + 1; // Returns 1 for Jan-Mar, 2 for Apr-Jun, etc.
}

// Test the function
console.log(quarter_of_the_year(new Date(2015, 1, 21))); // Output: 2
console.log(quarter_of_the_year(new Date(2015, 10, 18))); // Output: 4
