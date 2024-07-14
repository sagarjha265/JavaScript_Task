function getMonthStartDate(date) {
    var startDate = new Date(date);
    // Set to the first day of the month
    startDate.setDate(1);
    // Reset time to the start of the day
    startDate.setHours(0, 0, 0, 0);
    return startDate;
}

// Example usage
console.log(getMonthStartDate(dt)); // Output: "Wed Oct 01 2014 ..."
