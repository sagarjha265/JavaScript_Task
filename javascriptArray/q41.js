function add_years(date, years) {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + years); // Add years
    return newDate; // Return the new date
}

// Test the function
const dtAddYears = new Date(2014, 10, 2);
console.log(add_years(dtAddYears, 10).toString()); // Output example: "Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"
