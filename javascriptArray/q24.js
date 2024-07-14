function ISO8601_week_no(date) {
    const tempDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    // Move to the nearest Thursday
    tempDate.setDate(tempDate.getDate() + 4 - (tempDate.getDay() || 7));
    const yearStart = new Date(tempDate.getFullYear(), 0, 1);
    // Calculate the week number
    return Math.ceil((((tempDate - yearStart) / 86400000) + 1) / 7);
}

// Test the function
const dtWeek = new Date(2015, 10, 1);
console.log(ISO8601_week_no(dtWeek)); // Output: 44
