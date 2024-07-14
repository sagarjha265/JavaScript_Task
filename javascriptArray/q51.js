function getWeekEndDate(date) {
    var endDate = new Date(date);
    // Set to the next Saturday (or the same if today is Saturday)
    endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));
    // Reset time to the end of the day
    endDate.setHours(23, 59, 59, 999);
    return endDate;
}

// Example usage
console.log(getWeekEndDate(dt)); // Output: "Sat Oct 18 2014 ..."
