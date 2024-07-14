function add_months(date, months) {
    const newDate = new Date(date); // Create a copy of the original date
    newDate.setMonth(newDate.getMonth() + months); // Add the specified number of months
    return newDate; // Return the new date
}

// Test Data
const dt = new Date(2014, 10, 2); // November 2, 2014
console.log(add_months(dt, 10).toString());
