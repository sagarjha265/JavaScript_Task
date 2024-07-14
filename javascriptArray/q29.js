function sort_year(date) {
    const year = date.getFullYear();
    return String(year).slice(-2); // Get the last two digits of the year
}

// Test the function
const dtSortYear = new Date(1989, 10, 1);
console.log(sort_year(dtSortYear)); // Output: "89"
