function add_weeks(date, weeks) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + weeks * 7); // Add weeks in days
    return newDate; // Return the new date
}

// Test the function
const dtAddWeeks = new Date(2014, 10, 2);
console.log(add_weeks(dtAddWeeks, 10).toString()); // Output example: "Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"
