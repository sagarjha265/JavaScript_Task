function getMonthEndDate(date) {
    var endDate = new Date(date);
    // Set to the first day of the next month
    endDate.setMonth(endDate.getMonth() + 1);
    endDate.setDate(0); // Set to the last day of the current month
    // Reset time to the end of the day
    endDate.setHours(23, 59, 59, 999);
    return endDate;
}

// Example usage
console.log(getMonthEndDate(dt)); // Output: "Tue Oct 31 2014 ..."
